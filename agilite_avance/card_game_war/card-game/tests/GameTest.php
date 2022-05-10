<?php

declare(strict_types=1);

namespace Ulco\Tests;

use PHPUnit\Framework\TestCase;
use Ulco\Card;
use Ulco\Game;
use Ulco\Player;

class GameTest extends TestCase
{
    private Game $game;
    protected function setUp(): void
    {
        parent::setUp();
        $playerOne = new Player("Maxime");
        $playerTwo = new Player("Théo");
        $this->game = new Game(array($playerOne, $playerTwo));
        $this->game->init();
    }

    public function testGameHaveTwoPlayers(): void
    {
        self::assertCount(2, $this->game->getPlayers());
    }

    public function testGameHaveFiftyTwoCards(): void
    {
        self::assertCount(52, $this->game->getCards());
    }

    public function testPlayerHaveSameDeckLengthBeforeStart(): void
    {
        $players = $this->game->getPlayers();
        $p1 = $players[0];
        $p2 = $players[1];

        self::assertCount(26, $p1->getDeck()->getCards());
        self::assertCount(26, $p2->getDeck()->getCards());
    }

    public function testFightTwoCards(): void
    {
        $c1 = new Card("NINE", "SPADES", 9);
        $c2 = new Card("THREE","DIAMONDS", 3);
        self::assertEquals(true, $this->game->fight($c1, $c2));
    }

}