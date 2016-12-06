// JavaScript Document

//Embed Video
function createYouTubeEmbedLink (link) {
  link = document.getElementById('link').value;
  if (link.charAt(12) == 'y') {    //if the 13th character = y (youtube videos)
	  var number = link.substring(32);    //key # = from 33rd character on
  	  var embed = "https://www.youtube.com/embed/" + number;    //Add youtube link before key #
  	  document.getElementById('iframe').src = embed;
  }
  else if (link.charAt(12) == 'o') {    //if the 13th character = o (vimeo videos)
	  var number = link.substring(18);    //key # = from 19th character on
	  var embed = "https://player.vimeo.com/video/" + number;    //Add vimeo link before key #
	  document.getElementById('iframe').src = embed;
  }
  else {}
}

//Intro Text
function getVal() {
    var x = document.getElementById("fname");
    document.getElementById("icard").innerHTML = x.value;
}

//Button Text
function changeButtonText() {
    var x = document.getElementById("buttonText");
    document.getElementById("submit").value = x.value;
}

//Input Text
function getVal2() {
    var x = document.getElementById("inputText");
    document.getElementById("email").placeholder = x.value;
}

//Hide Skip Text
function showHideSkip() {
  var div = document.getElementById("skipEmail");
  if (div.style.display == 'none') {    
    div.style.display = '';    //If the text is hidden make it appear
  }
  else {
    div.style.display = 'none'; //Else hide the text
  }
}

//Hide Form Upon Submission
function showHide() {
  var div = document.getElementById("dissapear");
  if (div.style.display == 'none') {
    div.style.display = '';    //If the text is hidden make it appear
  }
  else {
    div.style.display = 'none';    //Else hide the text
  }
}