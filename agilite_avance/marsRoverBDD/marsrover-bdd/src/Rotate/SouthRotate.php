<?php

namespace Ulco\Rotate;

use Ulco\OrientationEnum;

class SouthRotate implements RotateInterface
{
    public function rotate(RotateEnum $rotation): OrientationEnum{
        switch ($rotation){
            case RotateEnum::LEFT:
                return OrientationEnum::EAST;
            case RotateEnum::RIGHT:
                return OrientationEnum::WEST;
        }
    }
}