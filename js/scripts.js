

function Pizza(size,toppings) {
  this.size=size;
  this.toppings=[];
}



//Pizza.protype.sizeofPizza = function() {
  //var type = "";
  //if ()
    //return type = 8.99;
  //} {
    //return type = 0
    //console.log("")
//










$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#review").show();
    $("#cost").show();
    //console.log("result");
    var  size = $("input:radio[name=sizing]:checked").val();
    var  sizePrice ="";

    if (size ==="large") {
      sizePrice=14.99;
    } else if (size === "medium") {
      sizePrice=11.99;
    } else if (size === "small") {
      sizePrice=8.99;
    } else {
      sizePrice=0;
    }






    var size = $("input:radio[name=sizing]:checked").val();
      $("#sizing").text(size);
    $("input:checkbox[name=veggies]:checked").each(function() {
          var arrayOfVeggies=[];
          var veggies = $(this).val();
          arrayOfVeggies.push(veggies);
        $("#toppings").append(veggies + "<br>");
        $("#price").text(sizePrice);

  });

});
});
