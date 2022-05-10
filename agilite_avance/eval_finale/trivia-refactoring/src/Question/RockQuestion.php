<?php

namespace Ulco\Question;


class RockQuestion implements QuestionInterface
{
    private array $questions;

    public function createQuestion(string $question): void
    {
        $this->questions[] = $question;
    }

    public function askQuestion(): string
    {
        return array_shift($this->questions);
    }

    public function getQuestions(): array
    {
        return $this->questions;
    }
}