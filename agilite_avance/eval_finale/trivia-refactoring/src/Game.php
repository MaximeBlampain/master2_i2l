<?php

namespace Ulco;

use Ulco\Output\OutputInterface;
use Ulco\Question\Questions;

class Game
{
    private const NB_QUESTIONS = 50;

    /** @var Player[] */
    private array $players = [];
    private Questions $questions;
    private OutputInterface $output;

    private float $currentPlayer = 0;
    private bool $isGettingOutOfPenaltyBox = false;

    public function __construct(OutputInterface $outputInterface)
    {
        $this->questions = new Questions(self::NB_QUESTIONS);
        $this->output = $outputInterface;
    }

    public function add(string $playerName): void
    {
        $this->players[] = new Player($playerName);

        $this->output->echoLn($playerName . " was added");
        $this->output->echoLn("They are player number " . count($this->players));
    }

    public function roll(float $roll): void
    {
        $currentPlayer = $this->players[$this->currentPlayer];

        $this->output->echoLn($currentPlayer->getName() . " is the current player");
        $this->output->echoLn("They have rolled a " . $roll);

        if ($currentPlayer->isInPenaltyBox()) {
            $this->rollInPenaltyBox($roll, $currentPlayer);
        } else {
            $this->rollOutOfPenaltyBox($roll, $currentPlayer);
        }

    }

    private function rollInPenaltyBox(float $roll, Player $currentPlayer): void
    {
        if ($roll % 2 === 0) {
            $this->output->echoLn($currentPlayer->getName() . " is not getting out of the penalty box");
            $this->isGettingOutOfPenaltyBox = false;
            return;
        }

        $this->isGettingOutOfPenaltyBox = true;

        $this->output->echoLn($currentPlayer->getName() . " is getting out of the penalty box");
        $currentPlayer->setPosition($currentPlayer->getPosition() + $roll);

        $this->output->echoLn($currentPlayer->getName()
            . "'s new location is "
            . $currentPlayer->getPosition());
        $this->output->echoLn("The category is " . $this->currentCategory());
        $this->askQuestion();
    }

    private function rollOutOfPenaltyBox(float $roll, Player $currentPlayer): void
    {
        $currentPlayer->setPosition($currentPlayer->getPosition() + $roll);

        $this->output->echoLn(
            $currentPlayer->getName() . "'s new location is "
            . $currentPlayer->getPosition());
        $this->output->echoLn("The category is " . $this->currentCategory());
        $this->askQuestion();
    }

    private function changeCurrentPlayer(): void
    {
        $this->currentPlayer++;
        $this->currentPlayer = $this->currentPlayer % count($this->players);
    }

    private function askQuestion(): void
    {
        $this->output->echoLn($this->questions->ask($this->currentCategory()));
    }

    /**
     * @return string
     */
    private function currentCategory(): string
    {
        return match ($this->players[$this->currentPlayer]->getPosition()) {
            0, 4, 8 => "Pop",
            1, 9, 5 => "Science",
            2, 6, 10 => "Sports",
            default => "Rock",
        };
    }

    public function wasCorrectlyAnswered(): bool
    {
        $currentPlayer = $this->players[$this->currentPlayer];

        if ($currentPlayer->isInPenaltyBox()) {
            if ($this->isGettingOutOfPenaltyBox) {
                $this->output->echoLn("Answer was correct!!!!");
                $currentPlayer->addPoint();
                $this->output->echoLn($currentPlayer->getName()
                    . " now has "
                    . $currentPlayer->getPoints()
                    . " Gold Coins.");

                $winner = $currentPlayer->didWin();

                $this->changeCurrentPlayer();

                return $winner;
            }

            $this->changeCurrentPlayer();
            return true;

        }

        $this->output->echoLn("Answer was corrent!!!!");
        $currentPlayer->addPoint();
        $this->output->echoLn(
            sprintf(
                "%s now has %d Gold Coins.",
                $currentPlayer->getName(),
                $currentPlayer->getPoints()
            )
        );

        if ($currentPlayer->didWin()) {
            return true;
        }

        $this->changeCurrentPlayer();

        return false;
    }

    /**
     * @return bool
     */
    public function wrongAnswer(): void
    {
        $currentPlayer = $this->players[$this->currentPlayer];
        $this->output->echoLn("Question was incorrectly answered");
        $this->output->echoLn($currentPlayer->getName() . " was sent to the penalty box");
        $currentPlayer->setIsInPenaltyBox(true);

        $this->changeCurrentPlayer();
    }

}