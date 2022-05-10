<?php


namespace Ulco\Tests;

use PHPUnit\Framework\TestCase;
use Ulco\Player;

class PlayerTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
    }

    public function testPlayerHaveName(): void
    {
        $jose = new Player("jose");
        self::assertEquals("jose", $jose->getName());
    }

}