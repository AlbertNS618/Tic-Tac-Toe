var play = 0;
var statusGame;
var x = new Array(), y = new Array();

function game(){
    for(var i = 0; i < 9 ; i++){
        document.querySelectorAll(".board div")[i].addEventListener("click", function(){
            if(!(this.innerHTML == "X" || this.innerHTML == "O")){
                if(play == 0 || play % 2 == 0){
                    x.push(this.getAttribute("data-spot"));
                    this.innerHTML = "X";
                    play+=1;
                }else{
                    y.push(this.getAttribute("data-spot"));
                    this.innerHTML = "O";
                    play+=1;
                }
            }
            decision();
           
        })
        
        try {
            if(statusGame == "over"){
                throw "exit";
            }else{
                
            }
            
        } catch (error) {
            
        }
    }
}

game();

function decision(){
    if(x.includes("1") && x.includes("2") && x.includes("3") || x.includes("1") && x.includes("3") && x.includes("7")
    || x.includes("4") && x.includes("5") && x.includes("6") || x.includes("2") && x.includes("5") && x.includes("8")
    || x.includes("7") && x.includes("8") && x.includes("9") || x.includes("3") && x.includes("6") && x.includes("9")
    || x.includes("1") && x.includes("5") && x.includes("9")
    || x.includes("3") && x.includes("5") && x.includes("7")
    ){
        document.querySelector(".game").innerHTML = "X WIN!"
        statusGame = "over";
        
    }
    
    if(y.includes("1") && y.includes("2") && y.includes("3") || y.includes("1") && y.includes("3") && y.includes("7")
    || y.includes("4") && y.includes("5") && y.includes("6") || y.includes("2") && y.includes("5") && y.includes("8")
    || y.includes("7") && y.includes("8") && y.includes("9") || y.includes("3") && y.includes("6") && y.includes("9")
    || y.includes("1") && y.includes("5") && y.includes("9")
    || y.includes("3") && y.includes("5") && y.includes("7")
    ){
        document.querySelector(".game").innerHTML = "O WIN!"
        statusGame = "over";
    }
}

document.querySelector('.refresh-button').addEventListener("click", function(){
    for(var i = 0; i < 9 ; i++){
        document.querySelectorAll(".board div")[i].innerHTML = "";   
        x.pop();
        y.pop();    
    }
    document.querySelector(".game").innerHTML = ""
    player = 0;
});

