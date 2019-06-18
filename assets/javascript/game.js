//INITIAL MATCH SET-UP//
var characterWasChosen;
var chosenCharHealth;
var opponentHealth;
var attackMultiplier = 0;
var currentPower;
var opponentAttack;

//Add click event to #character elements that moves clicked character to .yourCharacter div//
$( document ).ready(function() {

    $( ".availChar" ).click(function() {
        $(this).removeClass("availChar").addClass("chosenChar");
        $(this).css({"background-color" : "rgb(1, 80, 1)", "border" : "3px solid white"});
        $(this).appendTo($(".yourCharacter"));
        chosenCharHealth = +$('.yourCharacter .charPoints').text();
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
        opponentChosen = 1;
        console.log(opponentHealth)
//Add click event to attackButton that decreases opponentHealth and chosenCharHealth//
//WHY IS THIS CLICK FUNCTION ADDING +$('.yourOpponent .charPoints').text() to var chosenCharHealth?
        // ANSWERED: Click functions sometimes need to be removed from divs as well. In this case, the classes were removed, but the click function from .availChar was "overriding" it. Once the .off method was added on line 24, it fixed the issue.  
    
    $( ".attackButton" ).on("click", function() {
        attackMultiplier++;
        opponentHealth -= 11 * attackMultiplier;
        currentPower = 11 * attackMultiplier;
        console.log(opponentHealth);
        if(opponentHealth <= 0) {
            $(".opponent").remove();
            $( ".fightStats .oppoCounter").text("Your opponent was defeated!");
            $( ".fightStats .yourAttack").text("You attacked for " + currentPower + " damage!") 
        }

        $( ".fightStats .yourAttack").text("You attacked for " + currentPower + " damage!")
        $( ".yourOpponent .charPoints" ).text(opponentHealth);

        if($( ".opponent" ).attr("id") === "scorpion") {
            chosenCharHealth -= 25;
            if(chosenCharHealth <= 0) {
                $(".fightStats .yourAttack").text("You Lose! Fatality!");
                $(".fightStats .oppoCounter" ).text("FATALITY!");
            } else {
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
            $( ".fightStats .oppoCounter").text("Your opponent countered for 25 damage!")
            }

        } else if ($( ".opponent" ).attr("id") === "subZero") {
            chosenCharHealth -= 35;
            if(chosenCharHealth <= 0) {
                $(".fightStats .yourAttack").text("You Lose! Fatality!");
                $(".fightStats .oppoCounter" ).text("FATALITY!");
            } else {
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
            $( ".fightStats .oppoCounter").text("Your opponent countered for 35 damage!")
            }

        } else if ($( ".opponent" ).attr("id") === "raiden") {
            chosenCharHealth -= 50;
            if(chosenCharHealth <= 0) {
                $(".fightStats .yourAttack").text("You Lose! Fatality!");
                $(".fightStats .oppoCounter" ).text("FATALITY!");
            } else {
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
            $( ".fightStats .oppoCounter").text("Your opponent countered for 50 damage!")
            }

        } else if ($( ".opponent" ).attr("id") === "liuKang") {
            chosenCharHealth -= 35;
            if(chosenCharHealth <= 0) {
                $(".fightStats .yourAttack").text("You Lose!");
                $(".fightStats .oppoCounter" ).text("FATALITY!");
            } else {
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
            $( ".fightStats .oppoCounter").text("Your opponent countered for 35 damage!")
            }
            
        } else if ($( ".opponent" ).attr("id") === "shaoKhan") {
            chosenCharHealth -= 65;
            if(chosenCharHealth <= 0) {
                $(".fightStats .yourAttack").text("You Lose!");
                $(".fightStats .oppoCounter" ).text("FATALITY!");
            } else {
            $( ".yourCharacter .charPoints").text(chosenCharHealth);
            $( ".fightStats .oppoCounter").text("Your opponent countered for 65 damage!")
            }
        }
        });
    });    
});

});
//Test
