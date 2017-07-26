function Pizza(size) {
  this.size=size;
  this.toppings=[];
  this.cost=0;
}

Pizza.prototype.withToppings = function() {
  var toppings=[];
    $("input:checkbox[name=veggies]:checked").each(function() {
      var veggies = $(this).val();
      toppings.push(veggies);
      $("#toppings").append(veggies + "<br>");
    });
      this.toppings = toppings;
    }

Pizza.prototype.calculateCost = function() {
  if (this.size === "large") {
    this.cost=14.99;
  } else if (this.size === "medium") {
    this.cost=11.99;
  } else if (this.size === "small") {
    this.cost=8.99;
  } else {
    alert ("Error");
  }
  this.cost = (this.toppings.length * .99) + this.cost
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#review").show();
    $("#cost").show();
    //console.log("result");
    var size = $("input:radio[name=sizing]:checked").val();
    newOrder = new Pizza (size);
    newOrder.withToppings();
    newOrder.calculateCost();
    $("#sizing").text(newOrder.size);
    $("#price").text(newOrder.cost);
    });
  });
;
