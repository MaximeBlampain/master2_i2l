<?php

namespace Ulco;

class CalculatorContext
{
    private ?CalculusInterface $strategy = null;

    public function setStrategy(CalculusInterface $strategy): void {
        $this->strategy = $strategy;
    }

    public function calc(float $num1, float $num2): float{
        return $this->strategy->makeCalcul($num1, $num2);
    }

}