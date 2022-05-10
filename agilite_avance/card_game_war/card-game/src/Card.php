<?php

namespace Ulco;


class Card
{
    private string $label;
    private string $suit;
    private int $value;

    public function __construct($label, $suit, $value){
        $this->label = $label;
        $this->suit = $suit;
        $this->value = $value;
    }

    /**
     * @return int
     */
    public function getValue(): int
    {
        return $this->value;
    }



}