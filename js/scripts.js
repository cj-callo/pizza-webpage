function Pizza(size,toppings) {
  this.size=size;
  this.toppings=toppings;
}

//Pizza.prototype.customerOrder=() {

//}

//var newOrder= new Pizza()





$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#review").show();
    //console.log("result");
    $("input:checkbox[name=veggies]:checked").each(function() {
          var arrayOfVeggies=[];
          var veggies = $(this).val();
          arrayOfVeggies.push(veggies);
        $("#toppings").append(veggies + "<br>");


  });
});
});
