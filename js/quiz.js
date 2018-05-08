var QuestionAnswers = [
    ['Which is the largest country by area?', 'Russia'],
    ['How many states are there in the US?', 50],
    ['What is the biggest mammal?', 'Blue Whale']
];

function print(message) {
    document.write(message);
}
var correctAnswers = 0;
var question;
var response;
var correctAns = [];
var wrongAns = [];

var i = 0;
while (i < QuestionAnswers.length) {
    var question = QuestionAnswers[i][0];
    var answer = QuestionAnswers[i][1];
    response = prompt(question);

    if (isNaN(answer)) { // is Not a number?
        // we assume it's a string
        if (response.toUpperCase() === answer.toUpperCase()) {
            //correct
            correctAnswers++;
            correctAns.push(question);

        } else {
            wrongAns.push(question);
        }
    } else {
        if (parseInt(response) === answer) {
            correctAnswers++;
            correctAns.push(question);
        } else {
            wrongAns.push(question);
        }
    }

    i++;
}

print("<p> You have got " + correctAnswers + " answers correct </p>" );
print("<h2> Questions that were correct:</h2>");
print("<ol>");
for(var i = 0; i < correctAns.length; i++) {
    print("<li>" + correctAns[i] + "</li>");
}
print("</ol>");

print("<h2> Questions that were wrong:</h2>");
print("<ol>");
for(var i = 0; i < wrongAns.length; i++) {
    print("<li>" + wrongAns[i] + "</li>");
}
print("</ol>");