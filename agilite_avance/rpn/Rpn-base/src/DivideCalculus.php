<?php

namespace Ulco;

class DivideCalculus implements CalculusInterface
{

    public function makeCalcul(float $num1, float $num2): float
    {
        return $num1 / $num2;
    }
}