var foodname;
var request;

function askFood() {
  var apiId = "50542467";
  var apiKey = "f3be5bfef9eae9ad0f8e62ab01d504b1	—";
  var foodname = document.getElementById("foodname").value;
  if (foodname === "") {
    alert('You did not enter an ingredient!');
    return;
  }

  console.log("Name of recipe: " + foodname);

  //var query = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + foodname;
  var query = "https://api.edamam.com/search?q=chicken&app_id=" + apiId+ "&app_key="+ apiKey+"&from=0&to=3&calories=591-722&health=alcohol-free";
  query = query.replace(/ /g, "-")
  foodnameRequest = new XMLHttpRequest();
  foodnameRequest.open("GET", query, true);
  foodnameRequest.setRequestHeader('Authorization', apiKey);
  foodnameRequest.onload = findLocation;
  foodnameRequest.send();
}

function findLocation(){
  if(foodnameRequest.status != 200){
    alert("Error");
    return;
  }
  var foodInfo = JSON.parse(foodnameRequest.responseText);
  console.log(foodInfo);
}
