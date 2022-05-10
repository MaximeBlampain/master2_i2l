<?php

namespace Ulco\Question;


class Questions
{
    private PopQuestion $popQuestions ;
    private ScienceQuestion $scienceQuestions;
    private SportQuestion $sportsQuestions;
    private RockQuestion $rockQuestions;

    public function __construct(float $nbQuestion){

        $this->popQuestions = new PopQuestion();
        $this->scienceQuestions = new ScienceQuestion();
        $this->sportsQuestions = new SportQuestion();
        $this->rockQuestions = new RockQuestion();

        for ($i = 0; $i < $nbQuestion; $i++) {
            $this->popQuestions->createQuestion("Pop Question " . $i);
            $this->scienceQuestions->createQuestion("Science Question " . $i);
            $this->sportsQuestions->createQuestion("Sports Question " . $i);
            $this->rockQuestions->createQuestion("Rock Question " . $i);
        }
    }

    /**
     * @param string $category
     * @return string
     */
    public function ask(string $category) :string {
        return match ($category) {
            "Pop" => $this->popQuestions->askQuestion(),
            "Science" => $this->scienceQuestions->askQuestion(),
            "Sports" => $this->sportsQuestions->askQuestion(),
            "Rock" => $this->rockQuestions->askQuestion(),
        };
    }
}