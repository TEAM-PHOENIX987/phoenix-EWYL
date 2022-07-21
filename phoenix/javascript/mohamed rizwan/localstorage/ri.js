let markform = document.getElementById("markform");
const markContainer = document.querySelector(".marks");

const marks = JSON.parse(localStorage.getItem("marks")) || [];

function storeDetails(event) {
  event.preventDefault();
 
  const tamilInput = document.querySelector(".tamil").value;
  const englishInput = document.querySelector(".english").value;
  const mathsInput = document.querySelector(".maths").value;
  const scienceInput = document.querySelector(".science").value;
  const socialscienceInput = document.querySelector(".socialscience").value;
  showdetails(tamilInput, englishInput, mathsInput, scienceInput, socialscienceInput)
}


function showdetails(tamil, english, maths, science, socialscience) {
marks.push({
    tamil,
    english,
    maths,
    science,
    socialscience,
  });

  localStorage.setItem("marks", JSON.stringify(marks));
  addmarks(tamil, english, maths, science, socialscience);
};

function addmarks(tamil, english, maths, science, socialscience) {
  const markDiv = document.createElement("div");
  const marktamil = document.createElement("p");
  const markenglish = document.createElement("p");
  const markmaths = document.createElement("p");
  const markscience = document.createElement("p");
  const marksocialscience = document.createElement("p");

  marktamil.innerText = "tamil mark=" + tamil;
  markenglish.innerText = "english mark=" + english;
  markmaths.innerText = "maths mark=" + maths;
  markscience.innerText = "science mark=" + science;
  marksocialscience.innerText = "socialscience mark=" + socialscience;

  markDiv.append(marktamil, markenglish, markmaths, markscience, marksocialscience);
  markContainer.appendChild(markDiv);

};



