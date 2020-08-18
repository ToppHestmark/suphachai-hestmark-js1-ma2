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
  console.log(this.value);
  const selectedValue = this.value;

  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    paragraphsContainer.innerHTML += `<p class="content">Paragraph ${i}</p>`
  }
}