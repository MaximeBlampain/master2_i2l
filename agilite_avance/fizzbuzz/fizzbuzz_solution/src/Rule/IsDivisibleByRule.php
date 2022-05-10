<?php

declare(strict_types=1);

namespace Ulco\Rule;

class IsDivisibleByRule implements RuleInterface
{
    private int $isDivisibleBy;

    public function __construct(int $isDivisibleBy)
    {
        $this->isDivisibleBy = $isDivisibleBy;
    }

    public function isValid(int $number): bool
    {
        return $number % $this->isDivisibleBy === 0;
    }
}