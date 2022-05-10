<?php

declare(strict_types=1);

namespace Ulco\Rule;

class OrRule implements RuleInterface
{
    private RuleInterface $leftRule;

    private RuleInterface $rightRule;

    public function __construct(RuleInterface $leftRule, RuleInterface $rightRule)
    {
        $this->leftRule = $leftRule;
        $this->rightRule = $rightRule;
    }

    public function isValid(int $number): bool
    {
        return $this->leftRule->isValid($number) || $this->rightRule->isValid($number);
    }
}