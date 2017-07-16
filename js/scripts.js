function Pizza(size,toppings) {
  this.size=size;
  this.toppings=[];
}

Pizza.prototype.withToppings=function() {
  var totalCost= (this.toppings.length * .99) + this.size
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#review").show();
    $("#cost").show();
    //console.log("result");
    var sizePrice = $("input:radio[name=sizing]:checked").val();
    newOrder = new Pizza (sizePrice, veggies);
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
      newOrder.withToppings("");
      var arrayOfVeggies=[];
      var veggies = $(this).val();
      arrayOfVeggies.push(veggies);
      $("#toppings").append(veggies + "<br>");
      $("#price").text(sizePrice);
    });
  });
});
