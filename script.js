$(document).ready(function () {
  // get date with moment js
  //put date on page
  // add css clases acording to the time

  $("#currentDay").text(moment().format("MMMM Do YYYY"));
var varTime = 9;
  //get current hour
 
 var currentHour = moment().format('LT');
 console.log(currentHour);


init();
  //inside for each loop
  // get the value from the html for the current hour block

  //var blockHour = parseInt($(this).attr("id").split("-")[1]);
function init(){

createPage();



}



function createPage(){

  for (i = 9; i <= 17; i++) {
    console.log(varTime);   
    varTime = i;
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id", "hour-" + varTime);
    var divHour = $("<div>");
    divHour.addClass("col-md-1 hour p-3");
    divHour.text(varTime);
    var textHour = $("<textarea>");
    textHour.addClass("col-md-10 description");
    var btnHour = $("<button>");
    btnHour.addClass("btn saveBtn col-md-1");
    btnHour.attr("value", varTime);
    var btnIcon =$("<i>");
    btnIcon.addClass("fas fa-save");


    $(divRow).appendTo(".container");
    $(divHour).appendTo("#hour-" + varTime);
    $(textHour).appendTo("#hour-" + varTime);
    $(btnHour).appendTo("#hour-" + varTime);
    $(btnIcon).appendTo(btnHour);

  }
}
  //check and see if the currentHour > or < blockhour.
  // add css classes according the time - past, future and current.

   $(".saveBtn").on("click", function() {

            var btnText = ($(this).siblings("textarea").val());
            console.log(btnText);
            var horaTest = $(this).val();
            console.log(horaTest);
           
          
});



});
