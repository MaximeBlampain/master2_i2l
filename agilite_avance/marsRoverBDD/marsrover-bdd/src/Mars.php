<?php

declare(strict_types=1);

namespace Ulco;

class Mars
{
    private ?Rover $rover = null;

    public function land(Rover $rover, float $x, float $y): void
    {
        $this->rover  = $rover;

        $rover->setX($x);
        $rover->setY($y);
    }

}