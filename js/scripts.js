var small=8.99;
var mediium=11.99;
var large=14.99;
var toppings=[];

function Pizza(size,toppings) {
  this.size=size;
  this.toppings=toppings;
}


Pizza.prototype.addToppings=function() {
  smallToppings = toppings.length + small
}







$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#review").show();
    $("#cost").show();
    //console.log("result");
    var sizePrice = $("input:radio[name=sizing]:checked").val();
    if (sizePrice ==="large") {
      sizePrice=14.99;
    } else if (sizePrice === "medium") {
      sizePrice=11.99;
    } else if (sizePrice === "small") {
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

        var totalCost= $("#price").val();


  });

});
});
