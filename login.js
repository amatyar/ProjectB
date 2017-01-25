function clicked() {
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser="test";
  var corpass="123";
  if(user.value == coruser){
    if(pass.value== corpass)
    {
      window.alret(" you are logged on as " + user.value);
      window.open("http://www.yahoo.com");
    }else {
      window.alret("Incorrect username or password");
    }
  }else {
    window.alret("incorrect username or password");
  }
}
