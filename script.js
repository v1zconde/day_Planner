$(document).ready(function () {
  // get date with moment js
  //put date on page
  // add css clases acording to the time

  $("#currentDay").text(moment().format("MMMM Do YYYY"));
var varTime = " AM";
var textTime = 8;
var realTime = 9;
  //get current hour
 
 var currentHour = parseInt(moment().format('HH'))
 console.log(currentHour);


init();
  //inside for each loop
  // get the value from the html for the current hour block

  //var blockHour = parseInt($(this).attr("id").split("-")[1]);
function init(){

createPage();


}

$("textarea").each(function () {
    var name = parseInt($(this).attr("value"));
    console.log(name + "name");
    console.log(currentHour + "currenthour");
    

    if (name < currentHour) {
        $(this).addClass("past");
        console.log($(this));
    }


    if (name > currentHour) {
        $(this).addClass("future")
        console.log("2");
    }

    if (name === currentHour) {
        $(this).addClass("present")
        console.log("3");
    }


})

function createPage(){


  for (i = 0; i < 9; i++) {

    textTime++;
    realTime++;

    if (i >= 3) varTime = " PM";
    if (i === 4) textTime = 1;
    
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id", "hour-" + realTime);
    var divHour = $("<div>");
    divHour.addClass("col-md-1 hour p-1");
    divHour.text(textTime + varTime);
    var textHour = $("<textarea>");
    textHour.attr("value", realTime);
    textHour.addClass("col-md-10 description");
    setColor(textHour, currentHour, realTime);

    var btnHour = $("<button>");
    btnHour.addClass("btn saveBtn col-md-1");
    btnHour.attr("value", realTime);
    var btnIcon =$("<i>");
    btnIcon.addClass("fas fa-save");

    $(divRow).appendTo(".container");
    $(divHour).appendTo("#hour-" + realTime);
    $(textHour).appendTo("#hour-" + realTime);
    $(btnHour).appendTo("#hour-" + realTime);
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

function setColor(){




}


});
