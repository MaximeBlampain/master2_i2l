<?php

namespace Ulco\Output;

interface OutputInterface {

    public function echoLn(string $input): void;
}