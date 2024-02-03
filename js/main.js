const feat = document.querySelector("#classes")

feat.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "yoga":
            yoga();
            break;
        case "group":
            group();
            break;
        case "solo":
            solo();
            break;
        case "stretching":
            stretching();
            break;
        default:
            break;
    }
})
// Değerlendirme formu 11: Our Classes alanında bulunan butonların içeriğini değiştirmeye yarayan kod blokları.

function yoga() {
    document.querySelector("#text-content h2").innerHTML ="Why are your Yoga??"
    document.querySelector("#text-content img").src ="images/yoga.jpg"
    document.querySelector("#text-content h2:nth-child(3)").innerHTML = "When comes Yoga Your Time?";

}
function group() {
    document.querySelector("#text-content h2").innerHTML ="Why are your Group?"
    document.querySelector("#text-content img").src ="images/group.webp"
    document.querySelector("#text-content h2:nth-child(3)").innerHTML = "When comes Group Your Time?";

}
function solo() {
    document.querySelector("#text-content h2").innerHTML ="Why are your Solo?"
    document.querySelector("#text-content img").src ="images/solo.jpg"
    document.querySelector("#text-content h2:nth-child(3)").innerHTML = "When comes Solo Your Time?";

}
function stretching() {
    document.querySelector("#text-content h2").innerHTML ="Why are your Stretching?"
    document.querySelector("#text-content img").src ="images/stret.webp"
    document.querySelector("#text-content h2:nth-child(3)").innerHTML = "When comes Stretching Your Time?";

}

function createArrow(topPercentage, leftPercentage, color) {
    var arrow = document.createElement("div");
    arrow.style.position = "absolute";
    arrow.style.content = "";
    arrow.style.width = "20px";
    arrow.style.height = "20px";
    arrow.style.top = topPercentage;
    arrow.style.left = leftPercentage;
    arrow.style.backgroundColor = color;
    arrow.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
    document.getElementById("calculatorImg").appendChild(arrow);
  }

function calculateBMI() { // Değerlendirme formu 8: BMI Calculator'ın çalıştığı kod bloğu.
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (weight && height) {
    var bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    var arrowColor, arrowLeft;

    if (bmi < 18.5) {
      arrowColor = "blue";
      arrowLeft = "15%";
    } else if (bmi >= 18.5 && bmi < 22.4) {
      arrowColor = "green";
      arrowLeft = "31%";
    } else if (bmi >= 22.4 && bmi < 26.9) {
      arrowColor = "yellow";
      arrowLeft = "49%";
    } else if (bmi >= 26.9 && bmi < 29.9) {
      arrowColor = "orange";
      arrowLeft = "65%";
    } else {
      arrowColor = "red";
      arrowLeft = "80%";
    }

    var oldArrows = document.querySelectorAll("#calculatorImg > div");
    oldArrows.forEach(function (arrow) {
      arrow.remove();
    });

    createArrow("100%", arrowLeft, arrowColor);
  } else {
    alert("Please enter your weight and height.");
  }
}


window.addEventListener('scroll', function () {
    var header = document.querySelector('#header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        header.classList.add('navbar-scrolled');
    } else {
        header.classList.remove('navbar-scrolled');
    }
});

