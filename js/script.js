// Question 1
const changeBackgroundBtn = document.querySelector("#bg");

changeBackgroundBtn.addEventListener('click', function() {
  let body = document.querySelector("body")
  body.style.backgroundColor = "green";
});


// Question 2
const toggle = document.querySelector(".toggler");

toggle.addEventListener('click', function() {
  let togglee = document.querySelector(".togglee")
  togglee.classList.toggle("extra")
});


// Question 3
const dropdown = document.querySelector('select');
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function() {
  const selectedValue = this.value;

  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    paragraphsContainer.innerHTML += `<p class="content">Paragraph ${i}</p>`
  }
}

// Question 4
const textArea = document.querySelector(".input");
const charCount = document.querySelector(".char-count b")

textArea.onkeyup = function() {
  // console.log(event.target.value.length);

  const length = event.target.value.length;

  charCount.innerHTML = length;
}

// Question 5
const body = document.querySelector("body");

function handleScroll() {
  // console.log(window.scrollY)

  const scrolled = window.scrollY;
  if (scrolled > 35) {
    body.classList.add("highlight")
  } else {
    body.classList.remove("highlight")
  }
}

window.onscroll = handleScroll;