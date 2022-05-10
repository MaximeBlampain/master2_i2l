<?php

declare(strict_types=1);

namespace Ulco;

use Ulco\Exceptions\UnknownOperatorException;
use Ulco\Strategy\Context;

class Rpn
{
    private Context $context;

    private array $operators;

    public function __construct(Context $context, array $operators)
    {
        $this->context = $context;
        $this->operators = $operators;
    }

    public function calculate(string $calculation): float
    {
        //get values as an array
        $values = explode(' ', $calculation);
        $stack = [];

        foreach ($values as $value) {
            //if the value is a number, push it to the stack
            if (is_numeric($value)) {
                $stack[] = $value;
                continue;
            }

            //start by the end with the right number.
            //order matters for dividing/substraction operation
            $rightNumber = (float)array_pop($stack);
            $leftNumber = (float)array_pop($stack);

            if (!isset($this->operators[$value])) {
                throw new UnknownOperatorException();
            }

            $this->context->setStrategy($this->operators[$value]);

            //repush to the stack calculated bumber
            $stack[] = $this->context->exec($leftNumber, $rightNumber);
        }

        //return last calculated result
        return current($stack);
    }
}