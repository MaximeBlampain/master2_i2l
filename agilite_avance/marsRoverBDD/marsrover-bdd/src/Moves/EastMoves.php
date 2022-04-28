<?php

namespace Ulco\Moves;

class EastMoves implements MovesInterface
{
    private float $x;
    private float $y;

    public function __construct(float $x, float $y){
        $this->x = $x;
        $this->y = $y;
    }


    public function moves(MovesEnum $move): array {
        $finalX = $this->x;
        switch($move){
            case MovesEnum::FORWARD:
                $finalX++;
                break;
            case MovesEnum::BACKWARD:
                $finalX--;
                break;
        }

        return [$finalX < 0 ? 5+$finalX : $finalX %5, $this->y];
    }
}