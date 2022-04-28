<?php

namespace Ulco\Rotate;

use Ulco\OrientationEnum;

interface RotateInterface
{
    public function rotate(RotateEnum $rotation): OrientationEnum;
}