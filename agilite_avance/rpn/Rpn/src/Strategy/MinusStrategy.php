<?php

declare(strict_types=1);

namespace Ulco\Strategy;

class MinusStrategy implements StrategyInterface
{
    public function calculate(float $leftNumber, float $rightNumber): float
    {
        return $leftNumber - $rightNumber;
    }
}