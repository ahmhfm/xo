let allchouses = ["","","","","","","","",""]
let clicksCount = 0 ;
let stop = false;
let turn = "X";
let headerTitle = document.querySelector(".header h1");


let AllBoxes = document.getElementsByClassName("box");
for (let x = 0 ; x < AllBoxes.length ; x++)
{
    AllBoxes[x].addEventListener("click",()=>{
       if(stop){return;}
       if(AllBoxes[x].innerHTML === "" )
       {
            
            AllBoxes[x].innerHTML = turn;
            allchouses[x] = turn;

            if(allchouses[0]===allchouses[1] && allchouses[1]===allchouses[2] && allchouses[2] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won 1" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[3]===allchouses[4] && allchouses[4]===allchouses[5] && allchouses[5] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[6]===allchouses[7] && allchouses[7]===allchouses[8] && allchouses[8] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[0]===allchouses[4] && allchouses[4]===allchouses[8] && allchouses[8] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[2]===allchouses[4] && allchouses[4]===allchouses[6] && allchouses[6] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[0]===allchouses[3] && allchouses[3]===allchouses[6] && allchouses[6] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[1]===allchouses[4] && allchouses[4]===allchouses[7] && allchouses[7] != "" )
            {
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }
            else if(allchouses[2]===allchouses[5] && allchouses[5]===allchouses[8] && allchouses[8] != "" )
            {
                
                headerTitle.innerHTML = " " + turn + " - won !!!" ;
                headerTitle.style.color = "green";
                stop = true;
                return;
            }


            if(turn === "X")
            {
                turn = "O";
                headerTitle.innerHTML = turn;

            }
            else{
                turn = "X";
                headerTitle.innerHTML = turn;
            }

            clicksCount++;
            if(clicksCount == 9)
            {
                alert("Offer Game !! ");
                resetAll();
            }
            
       }
       
    });
}


let reset = document.querySelector(".footer button");
reset.addEventListener("click",()=>
{
    resetAll();

})

function resetAll(){
    turn = "X";
    headerTitle.innerHTML = turn;
    let AllBoxes = document.getElementsByClassName("box");
    for (let x = 0 ; x < AllBoxes.length ; x++){
        AllBoxes[x].innerHTML = "";
    }

    allchouses = ["","","","","","","","",""];
    clicksCount = 0 ;
    stop = false;
    headerTitle.style.color = "rgba(126, 120, 113, 0.377)";
}