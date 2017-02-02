var attempt= 3;

function clicked() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
if( (username == "test") && (password == "123"))
  {

    window.location="http://www.yahoo.com";
    return false;
  }
else {
    attempt --;
    window.alret="You have left"+ alret +"attempts;";
    if (attempt == 0){
      document.getElementById("username").disable = true;
      document.getElementById("password").disable= true;

      return false;
    }
  }
}
