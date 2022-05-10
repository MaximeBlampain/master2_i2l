<?php

namespace Ulco\Output;

use Ulco\Output\OutputInterface;

class OutputEchoLn implements OutputInterface {

    public function echoLn(string $input): void
    {
        echo $input . "\n";
    }
}