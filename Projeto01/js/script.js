var index = 0;
var colors = ["Red","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];

function mudaCor(){
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if(index > colors.length - 1)
    index = 0;
}