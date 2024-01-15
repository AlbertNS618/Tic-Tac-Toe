var play = 0;
const boxBoard = document.querySelectorAll(".board div");
var x = new Array(), y = new Array();

for(var i = 0; i < 9 ; i++){
    boxBoard[i].addEventListener("click", function(){
        if(this.innerHTML == ""){
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
}

function decision(){
    if(x.includes("1") && x.includes("2") && x.includes("3") || x.includes("1") && x.includes("3") && x.includes("7")
    || x.includes("4") && x.includes("5") && x.includes("6") || x.includes("2") && x.includes("5") && x.includes("8")
    || x.includes("7") && x.includes("8") && x.includes("9") || x.includes("3") && x.includes("6") && x.includes("9")
    || x.includes("1") && x.includes("5") && x.includes("9")
    || x.includes("3") && x.includes("5") && x.includes("7")
    ){
        document.querySelector(".game").innerHTML = "X WIN!"
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
        document.querySelector(".game").innerHTML = "O WIN!"
        // for(var i = 0; i < 9 ; i++){
        //     boxBoard[i].replaceWith(boxBoard[i].cloneNode(true));
        // }    
    }
}

document.querySelector('.refresh-button').addEventListener("click", function(){
    for(var i = 0; i < 9 ; i++){
        boxBoard[i].innerHTML = "";
        x.pop();
        y.pop();    
    }
    document.querySelector(".game").innerHTML = ""
    play = 0;
});

