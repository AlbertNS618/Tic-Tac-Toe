var play = 0, game = 0;
var x = new Array(), y = new Array();

$(".board div").click(function () { 
    if(game == 0){
        if($(this).html() == ""){
            if(play == 0 || play % 2 == 0){
                x.push($(this).attr("data-spot"));
                $(this).html("X");
                play += 1;
            }
            else{
                y.push($(this).attr("data-spot"));
                $(this).html("O");
                play += 1;
            }
        }
    }
    decision();
});


function decision(){
    console.log(play);
    if(x.includes("1") && x.includes("2") && x.includes("3") || x.includes("1") && x.includes("3") && x.includes("7")
    || x.includes("4") && x.includes("5") && x.includes("6") || x.includes("2") && x.includes("5") && x.includes("8")
    || x.includes("7") && x.includes("8") && x.includes("9") || x.includes("3") && x.includes("6") && x.includes("9")
    || x.includes("1") && x.includes("5") && x.includes("9")
    || x.includes("3") && x.includes("5") && x.includes("7")
    ){
        $(".game").html("X WIN!");
        game = 1;
        // for(var i = 0; i < 9 ; i++){
        //     boxBoard[i].replaceWith(boxBoard[i]);
        // }    
    }
    
    if(y.includes("1") && y.includes("2") && y.includes("3") || y.includes("1") && y.includes("3") && y.includes("7")
    || y.includes("4") && y.includes("5") && y.includes("6") || y.includes("2") && y.includes("5") && y.includes("8")
    || y.includes("7") && y.includes("8") && y.includes("9") || y.includes("3") && y.includes("6") && y.includes("9")
    || y.includes("1") && y.includes("5") && y.includes("9")
    || y.includes("3") && y.includes("5") && y.includes("7")
    ){
        $(".game").html("O WIN!");
        game = 1;
        // for(var i = 0; i < 9 ; i++){
        //     boxBoard[i].replaceWith(boxBoard[i].cloneNode(true));
        // }    
    }

    if(play == 9 && game == 0){
        $(".game").html("DRAW!");
    }
}

$(".refresh-button").click(function() {
    $(".board div").html("");
    for(var i = 0; i < 9 ; i++){
        x.pop();
        y.pop();    
    }
    $(".game").html("");
    play = 0;
    game = 0;
});