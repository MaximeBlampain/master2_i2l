<?php

declare(strict_types=1);

namespace Ulco;

use Ulco\Rule\RuleInterface;

class FizzBuzz
{
    /**
     * @var RuleInterface[]
     */
    private array $rules;

    public function __construct(array $rules)
    {
        $this->rules = $rules;
    }

    public function fizzBuzz(int $number): string
    {
        foreach ($this->rules as $result => $rule) {
            if ($rule->isValid($number)) {
                return $result;
            }
        }

        return (string)$number;
    }
}