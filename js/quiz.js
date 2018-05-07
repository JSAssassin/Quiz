var QuestionAnswers = [
    ['Who is the president of the US?', 'Donald Trump'],
    ['How many states are there in the US?', 50],
    ['Which city does the President live in?', 'Washington DC']
];

function print(message) {
    document.write(message)
}
var i = 0;
var correctAnswers = 0;
var question;
var response;
while (i < QuestionAnswers.length) {
    question = prompt(QuestionAnswers[i][0]);
    response = (question);
    var answer = QuestionAnswers[i][1];

    if (isNaN(answer)) { // is Not a number?
        // we assume it's a string
        if (response.toUpperCase() === answer.toUpperCase()) {
            correctAnswers++;
        }
    } else {
        if (parseInt(response) === answer) {
            correctAnswers++;
        }
    }

    i++;
}

print("You have got " + correctAnswers + " answers correct");
