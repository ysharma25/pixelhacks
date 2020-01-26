function OnSubmit() {
  //var dietary_restrictions = document.getElementById("container");
  
  //need to fix saving the data here... something about this next line
  
  var dietary_restrictions = document.getElementsByClass("container");
  alert(dietary_restrictions.length());
  
  var user_restrictions = {};
  var count = 0;
   
  for(var i = 0; i < dietary_restrictions.length(); i++) {
    
  if(dietary_restrictions[i].isSelected()) { 
      user_restrictions[count] = dietary_restrictions[i];
      count++; 
      }
  }
  
  var str = ""; 
  for(var i2 = 0; i2 < user_restrictions.length(); i++) {
     str += user_restrictions[i2];  
  }
  alert(str); 
  onclick="window.location.href='homepage.html'";
}
