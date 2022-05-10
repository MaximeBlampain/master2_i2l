<?php

declare(strict_types=1);

namespace Ulco\Strategy;

class MultiplyStrategy implements StrategyInterface
{
    public function calculate(float $leftNumber, float $rightNumber): float
    {
        return $leftNumber * $rightNumber;
    }
}