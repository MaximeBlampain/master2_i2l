<?php

namespace Ulco\Question;

interface QuestionInterface {
    public function createQuestion(string $question): void;
    public function getQuestions(): array;
    public function askQuestion(): string;
}