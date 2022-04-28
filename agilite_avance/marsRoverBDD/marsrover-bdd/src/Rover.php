<?php

declare(strict_types=1);

namespace Ulco;

use Ulco\Moves\EastMoves;
use Ulco\Rotate\EastRotate;
use Ulco\Moves\MovesEnum;
use Ulco\Moves\MovesInterface;
use Ulco\Moves\NorthMoves;
use Ulco\Rotate\NorthRotate;
use Ulco\Moves\SouthMoves;
use Ulco\Rotate\RotateEnum;
use Ulco\Rotate\SouthRotate;
use Ulco\Moves\WestMoves;
use Ulco\Rotate\WestRotate;

class Rover
{
    private float $x;
    private float $y;
    private OrientationEnum $orientation;
    private array $commands;

    /**
     * @return float
     */
    public function getX(): float
    {
        return $this->x;
    }

    /**
     * @param float $x
     */
    public function setX(float $x): void
    {
        $this->x = $x;
    }

    /**
     * @return float
     */
    public function getY(): float
    {
        return $this->y;
    }

    /**
     * @param float $y
     */
    public function setY(float $y): void
    {
        $this->y = $y;
    }

    /**
     * @return OrientationEnum
     */
    public function getOrientation(): OrientationEnum
    {
        return $this->orientation;
    }

    /**
     * @param OrientationEnum $orientation
     */
    public function setOrientation(OrientationEnum $orientation): void
    {
        $this->orientation = $orientation;
    }

    /**
     * @return array
     */
    public function getCommands(): array
    {
        return $this->commands;
    }

    /**
     * @param array $commands
     */
    public function setCommands(array $commands): void
    {
        $this->commands = $commands;
    }

    public function move(MovesEnum $move): void {
        $strategy = null;
        switch ($this->orientation){
            case OrientationEnum::NORTH:
                $strategy = new NorthMoves($this->x, $this->y);
                break;
            case OrientationEnum::SOUTH:
                $strategy = new SouthMoves($this->x, $this->y);
                break;
            case OrientationEnum::EAST:
                $strategy = new EastMoves($this->x, $this->y);
                break;
            case OrientationEnum::WEST:
                $strategy = new WestMoves($this->x, $this->y);
                break;
        }
        [$newX, $newY] = $strategy->moves($move);

        $this->setX($newX);
        $this->setY($newY);
    }

    public function rotate(RotateEnum $rotation): void {
        $strategy = null;
        switch ($this->orientation){
            case OrientationEnum::NORTH:
                $strategy = new NorthRotate();
                break;
            case OrientationEnum::SOUTH:
                $strategy = new SouthRotate();
                break;
            case OrientationEnum::EAST:
                $strategy = new EastRotate();
                break;
            case OrientationEnum::WEST:
                $strategy = new WestRotate();
                break;
        }

        $this->setOrientation($strategy->rotate($rotation));
    }

}