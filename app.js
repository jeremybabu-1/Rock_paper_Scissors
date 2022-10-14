var compchoicedetails =["rock", "paper", "scissors"];

$("#startButton").click(function(){

   var playername =  $("#playernamedetails").val();

   console.log(playername);

   $("#playername").html("<p>Hello "+playername+" kindly select an option below");

   $("#selectionButtonsDisplay").show();

 


});

$(".selectionButtons").click(function(){

    $(this).fadeIn(100).fadeOut(100).fadeIn(100)


    var userval = $(this).val();
    

    rockPaperGame(userval);


    
});




function rockPaperGame(e){

var compchoiceval = Math.round((Math.random())*2);

console.log(compchoiceval);

var compFinalChoice = compchoicedetails[compchoiceval];
console.log(compFinalChoice);







  var userfinalchoice = e;



if(userfinalchoice === 'rock' && compFinalChoice ==='scissors' ){
   $("#selectionButtonsDisplay").hide();
   $("#youwin").show();
}else if(userfinalchoice === 'rock' && compFinalChoice ==='paper' ){
   $("#selectionButtonsDisplay").hide();
   $("#computerwins").show();
}else if(userfinalchoice === 'rock' && compFinalChoice ==='rock' ){
  console.log("its draw");
}else if(userfinalchoice === 'rock' && compFinalChoice ==='paper' ){
   $("#selectionButtonsDisplay").hide();
   $("#computerwins").show();
}else if(userfinalchoice === 'paper' && compFinalChoice ==='scissors' ){
   $("#selectionButtonsDisplay").hide();
   $("#computerwins").show();
}
else if(userfinalchoice === 'paper' && compFinalChoice ==='paper' ){
   $("#selectionButtonsDisplay").hide();
   $("#tie").show();;
}else if(userfinalchoice === 'paper' && compFinalChoice ==='rock' ){
   $("#selectionButtonsDisplay").hide();
   $("#youwin").show();
}else if(userfinalchoice === 'scissors' && compFinalChoice ==='rock' ){
   $("#selectionButtonsDisplay").hide();
   $("#computerwins").show();
}
else if(userfinalchoice === 'scissors' && compFinalChoice ==='paper' ){
   $("#selectionButtonsDisplay").hide();
   $("#youwin").show();
}else if(userfinalchoice === 'scissors' && compFinalChoice ==='scissors' ){
   $("#selectionButtonsDisplay").hide();
   $("#tie").show();;
}else{
  console("enter a right value");
}


$("#restart").show();




}