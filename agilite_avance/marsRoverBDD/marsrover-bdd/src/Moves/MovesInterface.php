<?php

namespace Ulco\Moves;

interface MovesInterface
{
    public function moves(MovesEnum $move): array;
}