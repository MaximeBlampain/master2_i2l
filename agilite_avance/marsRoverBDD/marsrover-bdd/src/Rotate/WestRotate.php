<?php

namespace Ulco\Rotate;

use Ulco\OrientationEnum;

class WestRotate implements RotateInterface
{
    public function rotate(RotateEnum $rotation): OrientationEnum{
        switch ($rotation){
            case RotateEnum::LEFT:
                return OrientationEnum::SOUTH;
            case RotateEnum::RIGHT:
                return OrientationEnum::NORTH;
        }
    }
}