<?php

declare(strict_types=1);

namespace Ulco\Rule;

class PalindromRule implements RuleInterface
{
    public function isValid(int $number): bool
    {
        return strlen((string)$number) > 1 && strrev((string)$number) === (string)$number;
    }
}