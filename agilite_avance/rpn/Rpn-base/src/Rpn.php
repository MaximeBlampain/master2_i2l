<?php

declare(strict_types=1);

namespace Ulco;

use function in_array;

class Rpn
{
    private array $operations;

    public function __construct(array $operations){
        $this->operations = $operations;
    }

    public function calc(string $chain): float
    {
        $result = explode(' ', $chain);
        $stack = [];

        foreach ($result as $value) {
            if (isset($this->operations[$value])) {
                $b = (float)array_pop($stack);
                $a = (float)array_pop($stack);
                $operand = $this->operations[$value];

                $context = new CalculatorContext();
                $context->setStrategy($operand);

                $stack[] = $context->calc($a,$b);

            } elseif (is_numeric($value)) {
                $stack[] = $value;
            } else {
                throw new \Exception("Character not available");
            }

        }

        return (float)$stack[0];
    }
}