let myMoney = document.getElementById("my-money")
let money = 1000
let bet = document.getElementById("bet")
let betSize = document.getElementById("bet-size")
myMoney.innerText = "Balance - " + money + "$"
let betClicked = 0
let startSpin = document.getElementById("start-spin")
let getId_Count = 0
let refresh = document.getElementById("refresh")
var Global_Variables_Object = {}
Global_Variables_Object.red = [1, 3, 5, 7, 9, 11, 13, 15]
Global_Variables_Object.black = [2, 4, 6, 8, 10, 12, 14]
startSpin.addEventListener("click", function() {
    startSpin.style.display = "none"
    refresh.style.display = "block"
    if (betClicked == 1 && getId_Count == 1) {
        let CountNumber = Math.round(Math.random() * 15)
        console.log(CountNumber);
        let count_number_to_string = "" + CountNumber
        let count_get_ = document.getElementById("spin-num" + count_number_to_string)
        count_get_.style.background = "blue"
    if (Global_Variables_Object.color == "red") {
        for (let k = 0; k < Global_Variables_Object.red.length; k++) {
            if(CountNumber == Global_Variables_Object.red[k] && Global_Variables_Object.color == "red" && CountNumber == Global_Variables_Object.GetId_DOC_NUM){
              alert("same number [red]")
              Global_Variables_Object.betMoney =  Global_Variables_Object.betMoney * 3
              money = money + Global_Variables_Object.betMoney
              myMoney.innerText = "Balance - " + money + "$"

              }
            else if(Global_Variables_Object.color == "red" && CountNumber == Global_Variables_Object.red[k]){
              alert("same color [red]")
              Global_Variables_Object.betMoney =  Global_Variables_Object.betMoney * 1.5
              money = money + Global_Variables_Object.betMoney
              myMoney.innerText = "Balance - " + money + "$"
            } 
          }
          
    } else if(Global_Variables_Object.color == "black"){
        for (let s = 0; s < Global_Variables_Object.black.length; s++) {
            if(CountNumber == Global_Variables_Object.black[s] && Global_Variables_Object.color == "black" && CountNumber == Global_Variables_Object.GetId_DOC_NUM){
              alert("same number [black]")
              Global_Variables_Object.betMoney =  Global_Variables_Object.betMoney * 3
              money = money + Global_Variables_Object.betMoney
              myMoney.innerText = "Balance - " + money + "$"
              }
            else if(CountNumber == Global_Variables_Object.black[s]){
              alert("same color [black]")
              Global_Variables_Object.betMoney =  Global_Variables_Object.betMoney * 1.5
              money = money + Global_Variables_Object.betMoney
              myMoney.innerText = "Balance - " + money + "$"
            }
       
          }
    }
    else if(Global_Variables_Object.color == "green" && CountNumber == 0){
        Global_Variables_Object.betMoney =  Global_Variables_Object.betMoney * 10
        money = money + Global_Variables_Object.betMoney
        alert("same number [green]")
    }
      


    } else {
        alert("Please Click bet and pick number after that , Spin the Roulette")
    }


}, {once : true});






bet.onclick = function () {
    if (betSize.value == "") {
        alert("Please Fill the value of Money")
    }
    else {
        if (betSize.value < money) {
            betClicked++
            money = money - betSize.value
            myMoney.innerText = "Balance - " + money + "$"
            Global_Variables_Object.betMoney = betSize.value 
            console.log(Global_Variables_Object.betMoney);
        
        } else {
            alert("You havent enough Money")
        }
    }
}

function picked(button) {
    if (betClicked == 1) {
        if (getId_Count == 0) {
            getId_Count++
            let GetId = button.id
            let GetId_DOC = document.getElementById(GetId)
            GetId_DOC.style.background = "blue"
           Global_Variables_Object.GetId_DOC_NUM = GetId_DOC.innerText
            console.log(Global_Variables_Object.GetId_DOC_NUM);
            if (Global_Variables_Object.GetId_DOC_NUM == 0) {
            Global_Variables_Object.color = "green"
                console.log(Global_Variables_Object.color);

            }
            for (let i = 0; i < Global_Variables_Object.red.length; i++) {
                if (Global_Variables_Object.GetId_DOC_NUM == Global_Variables_Object.red[i]) {
                Global_Variables_Object.color = "red"
                    console.log(Global_Variables_Object.color);
                }
            }
            for (let j = 0; j <  Global_Variables_Object.black.length; j++) {
                if (Global_Variables_Object.GetId_DOC_NUM == Global_Variables_Object.black[j]) {
                Global_Variables_Object.color = "black"
                    console.log(Global_Variables_Object.color);
                }
            }
        } else {
            alert("Please spin, you already pick the number")
        }
    } else {
        alert("Please bet and after pick number")
    }
}