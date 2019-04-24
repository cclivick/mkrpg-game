//INITIAL MATCH SET-UP//
var characterWasChosen
//Add click event to #character elements that moves clicked character to .yourCharacter div//
$( document ).ready(function() {

    $( ".availChar" ).click(function() {
        $(this).removeClass("availChar").addClass("chosenChar");
        $(this).css({"background-color" : "white", "border" : "3px solid green"});
        $(this).appendTo($(".yourCharacter"));
        characterWasChosen = 1;
//Once #character element clicked, move other #character elements to .yourEnemies div//    
        if(characterWasChosen === 1) {
            $( ".availChar" ).appendTo($(".yourEnemies"));
            $( ".availChar" ).removeClass("availChar").addClass("availEnemy");
//Change background color of #character elements in .yourEnemies div to orange//
            $( ".availEnemy" ).css({"background-color" : "orange", "border" : "3px solid red"});
        }
//Add click event to #character elements in .yourEnemies div that moves clicked enemy into .yourOpponent div//
        $( ".availEnemy" ).click(function() {
            $(this).removeClass("chosenChar availEnemy").addClass("opponent");
            $(this).css({"background-color" : "black", "border" : "3px solid rgba(157, 255, 0, 0.795)"});
            $(this).appendTo($(".yourOpponent"));
        });
    });    
});


