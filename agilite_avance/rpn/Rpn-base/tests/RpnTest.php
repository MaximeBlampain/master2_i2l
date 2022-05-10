<?php

declare(strict_types=1);

namespace Ulco\Tests;

use Ulco\AdditionCalculus;
use Ulco\DivideCalculus;
use Ulco\ModuloCalculus;
use Ulco\MultipleCalculus;
use Ulco\Rpn;
use PHPUnit\Framework\TestCase;
use Ulco\SubstractCalculus;

class RpnTest extends TestCase
{
    private ?Rpn $rpn = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->rpn = new Rpn([
            "+" => new AdditionCalculus(),
            "-" => new SubstractCalculus(),
            "/" => new DivideCalculus(),
            "x" => new MultipleCalculus(),
            "%" => new ModuloCalculus()
        ]);
    }

    public function testRpnBasicCalcPlus(): void
    {
        self::assertEquals(8, $this->rpn->calc('5 3 +'));
    }

    public function testRpnBasicCalcDivide(): void
    {
        self::assertEquals(3, $this->rpn->calc('6 2 /'));
    }

    public function testRpnComplexCalcMultiOperatorsNumbers(): void
    {
        self::assertEquals(10, $this->rpn->calc('5 2 - 7 +'));
    }

    public function testRpnComplexCalcMultiOperatorsNumbersA(): void
    {
        self::assertEquals(141, $this->rpn->calc('3 5 8 x 7 + x'));
    }


    public function testRpnComplexCalcMultiOperatorsNumbersB(): void
    {
        self::assertEquals(7.5, $this->rpn->calc('3 4 2 1 + x + 2 /'));
    }

    public function testRpnCalc7(): void{
        self::assertEquals(14, $this->rpn->calc('1 2 + 4 x 5 + 3 -'));
    }

    public function testRpnCalc8(): void {
        self::assertEquals(17, $this->rpn->calc('5 4 1 2 + x +'));
    }

    public function testRpnModulo(): void {
        self::assertEquals(1, $this->rpn->calc('5 2 %'));
    }
}