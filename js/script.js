// Question 1
const changeBackgroundBtn = document.querySelector("#bg");

changeBackgroundBtn.addEventListener('click', () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
});


// Question 2
const toggle = document.querySelector(".toggler");

toggle.addEventListener('click', () => {
  let togglee = document.querySelector(".togglee");
  togglee.classList.toggle("extra");
});


// Question 3
const dropdown = document.querySelector('select');
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function() {
  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= this.value; i++) {
    paragraphsContainer.innerHTML += `<p class="content">Paragraph ${i}</p>`
  }
}

// Question 4
const textArea = document.querySelector(".input");
const charCount = document.querySelector(".char-count b")

textArea.onkeyup = () => { charCount.innerHTML = event.target.value.length; }

// Question 5
const body = document.querySelector("body");

window.onscroll = () => { window.scrollY > 35 ? body.classList.add("highlight") : body.classList.remove("highlight"); }