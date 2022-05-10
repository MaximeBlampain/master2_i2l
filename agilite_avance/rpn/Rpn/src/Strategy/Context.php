<?php

declare(strict_types=1);

namespace Ulco\Strategy;

class Context
{
    private StrategyInterface $strategy;

    public function setStrategy(StrategyInterface $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function exec(float $leftNumber, float $rightNumber): float
    {
        return $this->strategy->calculate($leftNumber, $rightNumber);
    }
}