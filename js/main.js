const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

var toast = document.querySelector(".toast");
var btn = document.querySelector(".toast-btn");
var close = document.querySelector(".toast-close");
var progress = document.querySelector(".progress");

btn.addEventListener("click", (event) =>{
	
	event.preventDefault()
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() =>{
    toast.classList.remove("active");
  }, 5000)

  setTimeout(() =>{
    progress.classList.remove("active");
  }, 5300)
})

close.addEventListener("click", () =>{
  toast.classList.remove("active");

  setTimeout(() =>{
    progress.classList.remove("active");
  }, 300)
})
