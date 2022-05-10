<?php

namespace Ulco;

class Player
{
    private string $name;
    private bool $isInPenaltyBox = false;
    private int $points = 0;
    private int $position = 0;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return bool
     */
    public function isInPenaltyBox(): bool
    {
        return $this->isInPenaltyBox;
    }

    /**
     * @param bool $isInPenaltyBox
     */
    public function setIsInPenaltyBox(bool $isInPenaltyBox): void
    {
        $this->isInPenaltyBox = $isInPenaltyBox;
    }

    /**
     * @return int
     */
    public function getPoints(): int
    {
        return $this->points;
    }

    public function addPoint(): void
    {
        $this->points++;
    }

    /**
     * @return int
     */
    public function getPosition(): int
    {
        return $this->position;
    }

    /**
     * @param int $position
     */
    public function setPosition(int $position): void
    {
        $this->position = $position;

        if ($this->position >= 12) {
            $this->position = $this->position - 12;
        }
    }

    public function didWin(): bool
    {
        return $this->points !== 6;
    }
}