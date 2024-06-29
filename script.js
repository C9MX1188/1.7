function goToSecondPage() {
  window.location.href = "TST.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}

function information1() {
  window.location.href = "information1.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}

function information2() {
  window.location.href = "information2.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}

function information3() {
  window.location.href = "information3.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}

function information4() {
  window.location.href = "information4.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}

function information5() {
  window.location.href = "information5.HTML"; // استبدل "second_page.html" برابط الصفحة الثانية
}
//lodng
var loader = document.getElementById("prelloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//lodng
var loader = document.getElementById("prelloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

function startCountdown() {
  var countDownDate = new Date().getTime() + 25 * 60 * 1000; // تحديد وقت البدء
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
      minutes + " ثانية  " + seconds + " دقيقة ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "انتهى الوقت";
      let score = 0;

      // Loop through questions and check answers
      for (let i = 1; i <= 20; i++) {
        if (document.getElementById("q" + i + "-a").checked) {
          score++;
        }
      }

      // Check score and display result accordingly
      if (score === 0 || score < 18) {
        // If score is 0 or less than 18, display result

        document.querySelector(".success").style.display = "none"; // إخفاء الاختبار
        document.getElementById("resultScore").textContent = score;
        document.getElementById("resultPage").style.display = "block";
        document.querySelector(".question").style.display = "none"; // إخفاء الاختبار
        document.querySelector(".calculateResult").style.display = "none"; // إخفاء زر
        document.querySelector(".main").style.height = "260px";
        document.querySelector(".control-div").style.margin = "10%";
      } else {
        // If score is 18 or more, display result

        document.querySelector(".Retest").style.display = "none"; // إخفاء الاختبار
        document.getElementById("resultScore").textContent = score;
        document.getElementById("resultPage").style.display = "block";
        document.querySelector(".question").style.display = "none"; // إخفاء الاختبار
        document.querySelector(".calculateResult").style.display = "none"; // إخفاء زر
        document.querySelector(".main").style.height = "250px";
        document.querySelector(".control-div").style.margin = "10%";
      }
    }
  }, 1000);

  // يجعل الزر يختفي بعد الضغط عليه
  document.getElementById("startButton").style.display = "none";
  document.getElementById("Final button").style.display = "block";
  document.querySelector(".main").style.display = "block";
}

function calculateResult() {
  let score = 0;

  // Loop through questions and check answers
  for (let i = 1; i <= 20; i++) {
    if (document.getElementById("q" + i + "-a").checked) {
      score++;
    }
  }

  // Check score and display result accordingly
  if (score === 0 || score < 18) {
    // If score is 0 or less than 18, display result

    document.querySelector(".success").style.display = "none"; // إخفاء الاختبار
    document.getElementById("resultScore").textContent = score;
    document.getElementById("resultPage").style.display = "block";
    document.querySelector(".question").style.display = "none"; // إخفاء الاختبار
    document.querySelector(".calculateResult").style.display = "none"; // إخفاء زر
    document.querySelector(".main").style.height = "260px";
    document.querySelector(".control-div").style.margin = "10%";
  } else {
    // If score is 18 or more, display result

    document.querySelector(".Retest").style.display = "none"; // إخفاء الاختبار
    document.getElementById("resultScore").textContent = score;
    document.getElementById("resultPage").style.display = "block";
    document.querySelector(".question").style.display = "none"; // إخفاء الاختبار
    document.querySelector(".calculateResult").style.display = "none"; // إخفاء زر
    document.querySelector(".main").style.height = "250px";
    document.querySelector(".control-div").style.margin = "10%";
  }
}

// الكود المتعلق بفحص حجم الشاشة وتغيير العناصر وفقًا لذلك
window.addEventListener("resize", function () {
  checkScreenSize();
});

// تحقق من حجم الشاشة عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", function () {
  checkScreenSize();
});

// دالة لفحص حجم الشاشة وتغيير العناصر
function checkScreenSize() {
  var ul1 = document.querySelector(".ul1");
  var topNav = document.querySelector(".top-nav");

  if (window.innerWidth >= 1000) {
    ul1.style.display = "block";
    topNav.style.display = "none";
  } else {
    ul1.style.display = "none";
    topNav.style.display = "block";
  }
}
