<?php

namespace Ulco\Rotate;


use Ulco\OrientationEnum;

class EastRotate implements RotateInterface
{
    public function rotate(RotateEnum $rotation): OrientationEnum{
        switch ($rotation){
            case RotateEnum::LEFT:
                return OrientationEnum::NORTH;
            case RotateEnum::RIGHT:
                return OrientationEnum::SOUTH;
        }
    }
}