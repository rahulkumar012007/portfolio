const editbtnn = document.getElementsByClassName("editbtnn")[0];

const edit = document.getElementById("edit");
const image = document.querySelector(".rahulimg");

editbtnn.addEventListener("click", function () {
    edit.click();
});

edit.addEventListener("change", function () {
     const file = edit.files[0];
     if (file) { image.src = URL.createObjectURL(file); } });

 console.log("hdjdhhf");
 console.log("js connected");
 
 