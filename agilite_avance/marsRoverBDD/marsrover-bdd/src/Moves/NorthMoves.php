<?php

namespace Ulco\Moves;

class NorthMoves implements MovesInterface
{
    private float $x;
    private float $y;

    public function __construct(float $x, float $y){
        $this->x = $x;
        $this->y = $y;
    }

    public function moves(MovesEnum $move): array {
        $finalY = $this->y;
        switch($move){
            case MovesEnum::FORWARD:
                $finalY++;
                break;
            case MovesEnum::BACKWARD:
                $finalY--;
                break;
        }

        return [$this->x,  $finalY < 0 ? 5+$finalY : $finalY %5];
    }
}