<?php

namespace Ulco\Rotate;

use Ulco\OrientationEnum;

class NorthRotate implements RotateInterface
{
    public function rotate(RotateEnum $rotation): OrientationEnum{
        switch ($rotation){
            case RotateEnum::LEFT:
                return OrientationEnum::WEST;
            case RotateEnum::RIGHT:
                return OrientationEnum::EAST;
        }
    }
}