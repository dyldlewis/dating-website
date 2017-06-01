$(document).ready(function() {
  $("#info").submit(function(event){
    event.preventDefault();
    var interest = $("input:radio[name=interests]:checked").val();
    var sexuality = $("input:radio[name=sexuality]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();

  if (interest === "biking" && sexuality === "straight" && gender === "male") {
    var ashley = "ashley"
    alert("You got ashley!")
  } else if (interest === "biking" && sexuality === "straight" && gender == "female") {
    alert("You got Brian!")
  } else {
    alert("You got Alex!")
  }
  });
});
