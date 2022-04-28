<?php

declare(strict_types=1);

use Behat\Behat\Context\Context;
use Ulco\Mars;
use Ulco\Moves\MovesEnum;
use Ulco\OrientationEnum;
use Ulco\Rotate\RotateEnum;
use Ulco\Rover;
use Webmozart\Assert\Assert;

/**
 * Defines application features from the specific context.
 */
class FeatureContext implements Context
{
    private ?Rover $rover = null;
    private ?Mars $mars = null;


    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /**
     * @Given there is a rover
     */
    public function thereIsARover()
    {
        $this->rover = new Rover();
    }

    /**
     * @Given there is Mars
     */
    public function thereIsMars()
    {
        $this->mars = new Mars();
    }

    /**
     * @When I land the rover at :arg1, :arg2
     */
    public function iLandTheRoverAt(float $arg1, float $arg2)
    {
        $this->mars->land($this->rover, $arg1, $arg2);
    }

    /**
     * @Then Rover should be in :arg1, ":arg2
     */
    public function roverShouldBeIn(float $arg1, float $arg2)
    {
       Assert::eq($this->rover->getX(), $arg1);
       Assert::eq($this->rover->getY(), $arg2);
    }


    /**
     * @When Rover is directed to :arg1
     */
    public function roverIsDirectedTo(string $arg1)
    {
        $this->rover->setOrientation(OrientationEnum::from($arg1));
    }

    /**
     * @Then Rover should be directed towards :arg1
     */
    public function roverShouldBeDirectedTowards(string $arg1)
    {
        Assert::eq($this->rover->getOrientation()->value, $arg1);
    }

    /**
     * @When Rover receive :arg1
     */
    public function roverReceive(string $arg1)
    {
        $commands = explode(",", $arg1);
        $this->rover->setCommands($commands);
    }

    /**
     * @Then Rover have :arg1 commands to do
     */
    public function roverHaveCommandsToDo(float $arg1)
    {
        Assert::count($this->rover->getCommands(), $arg1);
    }

    /**
     * @When Rover moves
     */
    public function roverMoves()
    {
        $commands = $this->rover->getCommands();
        foreach ($commands as $command){
            $this->rover->move(MovesEnum::from($command));
        }
    }

    /**
     * @When Rover rotate :arg1
     */
    public function roverRotate(string $arg1)
    {
        $this->rover->rotate(RotateEnum::from($arg1));
    }
}
