<?php

declare(strict_types=1);

namespace Ulco\Rule;

interface RuleInterface
{
    public function isValid(int $number): bool;
}