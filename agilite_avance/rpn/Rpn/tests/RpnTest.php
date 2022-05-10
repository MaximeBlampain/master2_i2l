<?php

declare(strict_types=1);

namespace Ulco\Tests;

use Ulco\Exceptions\UnknownOperatorException;
use Ulco\Rpn;
use PHPUnit\Framework\TestCase;
use Ulco\Strategy\AddStrategy;
use Ulco\Strategy\Context;
use Ulco\Strategy\DivideStrategy;
use Ulco\Strategy\MinusStrategy;
use Ulco\Strategy\ModuloStrategy;
use Ulco\Strategy\MultiplyStrategy;

class RpnTest extends TestCase
{
    private ?Rpn $rpn = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->rpn = new Rpn(new Context(), [
            '+' => new AddStrategy(),
            '-' => new MinusStrategy(),
            '/' => new DivideStrategy(),
            'x' => new MultiplyStrategy,
            '%' => new ModuloStrategy()
        ]);
    }

    public function testEasyPlusCalc(): void
    {
        self::assertEquals(8, $this->rpn->calculate('5 3 +'));
    }

    public function testEasyDivideCalc(): void
    {
        self::assertEquals(3, $this->rpn->calculate('6 2 /'));
    }

    public function test3NumbersCalc(): void
    {
        self::assertEquals(10, $this->rpn->calculate('5 2 - 7 +'));
    }

    public function test3NumbersCalc2(): void
    {
        self::assertEquals(10, $this->rpn->calculate('7 5 2 - +'));
    }

    public function testComplexCalc1(): void
    {
        self::assertEquals(7.5, $this->rpn->calculate('3 4 2 1 + x + 2 /'));
    }

    public function testComplexCalc2(): void
    {
        self::assertEquals(17, $this->rpn->calculate('5 4 1 2 + x +'));
    }

    public function testCalcModulo1(): void
    {
        self::assertEquals(0, $this->rpn->calculate('6 2 %'));
    }

    public function testCalcModulo2(): void
    {
        self::assertEquals(1, $this->rpn->calculate('5 2 %'));
    }

    public function testWillThrowUnknownOperatorException(): void
    {
        $this->expectException(UnknownOperatorException::class);

        $this->rpn->calculate('5 3 $');
    }

}