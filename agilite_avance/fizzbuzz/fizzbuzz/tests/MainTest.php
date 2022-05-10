<?php

declare(strict_types=1);

namespace Ulco\Tests;

use PHPUnit\Framework\TestCase;
use Ulco\Main;

class MainTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->main = new Main();
    }

    public function testDivisibleNumberBy3ReturnFizz(): void
    {
        self::assertEquals('Fizz', $this->main->fizzBuzz(3));
        self::assertEquals('Fizz', $this->main->fizzBuzz(6));
    }
}