var data = [
  {},
  {},
  {},
  {},
  {},
  {},
  { start: 18, end: 23 }, // Saturday
];

var date = new Date(),
  dayOfWeek = date.getDay(),
  hoursToParty = data[dayOfWeek],
  canParty = false,
  answerEl = document.querySelector(".answer");

if (
  hoursToParty.hasOwnProperty("start") &&
  hoursToParty.hasOwnProperty("end")
) {
  var hour = date.getHours();
  canParty = hoursToParty.start <= hour && hour < hoursToParty.end;
}

var response = function () {
  if (canParty) {
    return "Yep, let's party!";
  } else {
    return "Nope, try again later!";
  }
};

var timeOut = function (content, callback) {
  setTimeout(function () {
    answerEl.innerHTML = content;
    if (callback) callback();
  }, 2000);
};

document.addEventListener("DOMContentLoaded", function () {
  var consoleText = 'bakku@local > $ echo "hello little hacker :)"';
  console.log(
    `%c${consoleText}`,
    "background: #222; color: #bada55; font-family: Courier"
  );
  timeOut("Are you sure you wanna know?", function () {
    timeOut("Hum, okay. I'll give you the anwser.", function () {
      timeOut("Give me 2 seconds", function () {
        timeOut(response());
      });
    });
  });
});
