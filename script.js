$(document).ready(function () {
  // get date with moment js
  //put date on page
  // add css clases acording to the time

$("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentHour = parseInt(moment().format('HH'));
var varTime = " AM";
var textTime = 8;
var realTime = 8;
var day;
var storedDay = [];

init();
  
function init(){

    if (localStorage.getItem("day") === null) {
        day = ["","","","","","","","",""];
        localStorage.setItem("day", JSON.stringify(day));
      }

      storedDay = JSON.parse(localStorage.getItem("day"));
    
 createPage();

}

$("textarea").each(function () {
    var name = parseInt($(this).attr("value"));   
    console.log(name);
   // var textValue = $(this).val();
    if (name < currentHour) {
        $(this).addClass("past");      
    }
    if (name > currentHour) {
        $(this).addClass("future")      
    }
    if (name === currentHour) {
        $(this).addClass("present")     
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
    textHour.text(storedDay[i]);
    

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

   $(".saveBtn").on("click", function() {
       
            var btnText = ($(this).siblings("textarea").val());
            console.log(btnText);
            var horaTest = $(this).val();
            console.log(horaTest);
            storedDay[horaTest-9] = btnText;
            localStorage.setItem("day", JSON.stringify(storedDay));

});




});
