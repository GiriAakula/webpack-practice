var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByTagName("li");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
export const myScript = function(){
    modal.style.display = "block";
    modalImg.src = this.childNodes[0].src;    
  }

for(var i = 0;i<img.length;i++){
    img[i].addEventListener("click", myScript);
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}