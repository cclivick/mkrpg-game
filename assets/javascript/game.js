//INITIAL MATCH SET-UP//
var characterWasChosen;
var chosenCharHealth;
var opponentHealth;
//Add click event to #character elements that moves clicked character to .yourCharacter div//
$( document ).ready(function() {

    $( ".availChar" ).click(function() {
        $(this).removeClass("availChar").addClass("chosenChar");
        $(this).css({"background-color" : "rgb(1, 80, 1)", "border" : "3px solid white"});
        $(this).appendTo($(".yourCharacter"));
        chosenCharHealth = +$('.yourCharacter .charPoints').text();
        console.log(chosenCharHealth);
        // adding plus sign (+) before "str" will presumably convert to number
        characterWasChosen = 1;
//Once #character element clicked, move other #character elements to .yourEnemies div//    
        if(characterWasChosen === 1) {
            $( ".availChar" ).appendTo($(".yourEnemies"));
            $( ".yourEnemies .availChar" ).removeClass("availChar chosenChar").addClass("availEnemy");
//Change background color of #character elements in .yourEnemies div to orange//
            $( ".availEnemy" ).css({"background-color" : "orange", "border" : "3px solid red"});
            $( ".availEnemy" ).off("click");
        }
//Add click event to #character elements in .yourEnemies div that moves clicked enemy into .yourOpponent div/

    $( ".availEnemy" ).click(function() {
        $(this).removeClass("availChar chosenChar availEnemy").addClass("opponent");
        $(this).appendTo($(".yourOpponent"));
        $(this).css({"background-color" : "black", "border" : "3px solid red"});
        opponentHealth = +$('.yourOpponent .charPoints').text();
        console.log(opponentHealth)
//Add click event to attackButton that decreases opponentHealth and chosenCharHealth//
//WHY IS THIS CLICK FUNCTION ADDING +$('.yourOpponent .charPoints').text() to var chosenCharHealth?
    
    $( ".attackButton" ).click(function() {
        console.log($( ".opponent" ).attr("id"))
        if($( ".opponent" ).attr("id") === "scorpion") {
            chosenCharHealth -= 25;
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
        } else if ($( ".opponent" ).attr("id") === "subZero") {
            chosenCharHealth -= 30;
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
        } else if ($( ".opponent" ).attr("id") === "raiden") {
            chosenCharHealth -= 35;
            $( ".yourCharacter .charPoints").text(chosenCharHealth);

        } else if ($( ".opponent" ).attr("id") === "liuKang") {
            chosenCharHealth -= 25;
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
        } else if ($( ".opponent" ).attr("id") === "shaoKhan") {
            chosenCharHealth -= 50;
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
        }
        });
    });    
});

});
