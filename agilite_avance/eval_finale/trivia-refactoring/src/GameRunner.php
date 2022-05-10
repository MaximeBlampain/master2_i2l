<?php

use Ulco\Game;
use Ulco\Output\OutputEchoLn;


require_once( __DIR__ . '/../vendor/autoload.php');

$notAWinner = false;

$output = new OutputEchoLn();

$aGame = new Game($output);

$aGame->add("Chet");
$aGame->add("Pat");
$aGame->add("Sue");


do {

    $aGame->roll(rand(0,5) + 1);

    if (rand(0,9) == 7) {
        $aGame->wrongAnswer();
    } else {
        $notAWinner = $aGame->wasCorrectlyAnswered();
    }



} while ($notAWinner);
