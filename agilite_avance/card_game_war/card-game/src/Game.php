<?php

declare(strict_types=1);

namespace Ulco;

class Game
{

    /*
        CLUBS
        DIAMONDS
        HEARTS
        SPADES
    */
    private array $players;
    private array $cards;

    public function __construct(array $players)
    {
        $this->players = $players;
    }

    /**
     * Get cards from a json file.
     * Set players deck
     * @return void
     */
    public function init(): void
    {
        $json = file_get_contents("./cards.json");

        $cards = json_decode($json);

        $finalCards = array();
        foreach ($cards as $card){
            $finalCards[] = new Card($card->label, $card->suit, $card->value);
        }
        shuffle($finalCards);
        $this->cards = $finalCards;

        // Set players Deck
        $this->players[0]->setDeck(new Deck(array_slice($finalCards, 0, 26 )));
        $this->players[1]->setDeck(new Deck(array_slice($finalCards, 0, 26 )));
    }

    public function fight(Card $c1, Card $c2): bool{
        return $c1->getValue() > $c2->getValue();
    }

    /**
     * @return array
     */
    public function getPlayers(): array
    {
        return $this->players;
    }

    /**
     * @return array
     */
    public function getCards(): array
    {
        return $this->cards;
    }



}