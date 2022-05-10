<?php

declare(strict_types=1);

namespace Ulco\Strategy;

interface StrategyInterface
{
    public function calculate(float $leftNumber, float $rightNumber): float;
}