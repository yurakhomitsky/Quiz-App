const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.route('/api/questions').get(findAll)

function findAll(req, res) {


    setTimeout(() => {

      res.status(200).json({
        question_1: {
            question: "Як називається найбільш популярна снайперська гвинтівка у грі CS:GO?",
            answers: ["Fnatic", "Na`Vi", "Team Secret", "OG"],
            correct_answers: ["OG"]
        },
        question_2: {
            question: "Хто виграв головний турнір року по Dota 2 - The International 2019?",
            answers: ["Fnatic", "Na`Vi", "Team Secret", "OG"],
            correct_answers: ["OG"]
        },
        question_3: {
            question: "Скільки карт використовується на офіційних турнірах СS:GO?",
            answers: ["12", "24", "6", "7"],
            correct_answers: ["7"]
        },
        question_4: {
            question: "Найпопулярніша укарїнська кіберспортивна команда",
            answers: ["VP", "Na`Vi", "Astralis", "HR"],
            correct_answers: ["Na`Vi"]
        },
        question_5: {
            question: "Яка гра є головним конкурентом дисципліни DOTA2",
            answers: ["LOL", "WOW", "Startcraft", "Battlerite"],
            correct_answers: ["LOL"]
        },
    });

    }, 2000);


}

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
})