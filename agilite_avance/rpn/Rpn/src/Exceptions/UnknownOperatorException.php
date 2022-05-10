<?php

declare(strict_types=1);

namespace Ulco\Exceptions;

use JetBrains\PhpStorm\Pure;
use RuntimeException;

class UnknownOperatorException extends RuntimeException
{
    #[Pure] public function __construct()
    {
        parent::__construct(
            'The asked operator is unknown, please check.',
            400
        );
    }
}