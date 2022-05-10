<?php

declare(strict_types=1);

namespace Ulco\Tests;

use Ulco\FizzBuzz;
use Ulco\Rule\AndRule;
use Ulco\Rule\IsDivisibleByRule;
use Ulco\Rule\OrRule;
use Ulco\Rule\PalindromRule;
use PHPUnit\Framework\TestCase;

class FizzBuzzTest extends TestCase
{
    private ?FizzBuzz $fizzBuzz = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->fizzBuzz = new FizzBuzz([
            'paladin'   => new PalindromRule(),
            'FizzBuzz'  => new AndRule(new IsDivisibleByRule(3), new IsDivisibleByRule(5)),
            'paletemps' => new OrRule(new IsDivisibleByRule(7), new IsDivisibleByRule(4)),
            'Fizz'      => new IsDivisibleByRule(3),
            'Buzz'      => new IsDivisibleByRule(5),
        ]);
    }

    /**
     * @covers
     */
    public function testReturnString(): void
    {
        $this->assertEquals('1', $this->fizzBuzz->fizzBuzz(1));
    }

    /**
     * @covers
     */
    public function testReturnFizzDivisibleBy3(): void
    {
        $this->assertEquals('Fizz', $this->fizzBuzz->fizzBuzz(3));
    }

    /**
     * @covers
     */
    public function testReturnFizzDivisibleByAnotherNumber(): void
    {
        $this->assertEquals('Fizz', $this->fizzBuzz->fizzBuzz(6));
    }

    /**
     * @covers
     */
    public function testReturnBuzzDivisibleBy5(): void
    {
        $this->assertEquals('Buzz', $this->fizzBuzz->fizzBuzz(5));
    }

    /**
     * @covers
     */
    public function testReturnFizzBuzzDivisibleBy3and5(): void
    {
        $this->assertEquals('FizzBuzz', $this->fizzBuzz->fizzBuzz(15));
    }

    /**
     * @covers
     */
    public function testPalyndromNumberReturnPaladin(): void
    {
        $this->assertEquals('paladin', $this->fizzBuzz->fizzBuzz(1221));
    }

    public function testIsMultiplOf6Or4(): void
    {
        $this->assertEquals('paletemps', $this->fizzBuzz->fizzBuzz(7));
        $this->assertEquals('paletemps', $this->fizzBuzz->fizzBuzz(4));
    }
}