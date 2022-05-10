<?php

namespace Ulco;

class Deck
{
    private array $cards;

    public function __construct($cards){
        $this->cards = $cards;
    }

    /**
     * @return array
     */
    public function getCards(): array
    {
        return $this->cards;
    }



}