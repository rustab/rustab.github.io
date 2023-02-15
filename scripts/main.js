const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dripCoraline.jpg") {
    myImage.setAttribute("src", "images/Charlie_Jones.jpg");
  } else {
    myImage.setAttribute("src", "images/dripCoraline.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi, ${myName}`;
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = 'Trust me Daddy-${storedName}!';
}

myButton.onclick = () => {
    setUserName();
  };