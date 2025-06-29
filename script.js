    let options = document.querySelectorAll(".options");
    let Flip = document.querySelector("#Flip");
    let Head= document.querySelector("#Head");
    let Tail= document.querySelector("#Tail");
    let msg = document.querySelector(".msg");
    let coin = document.querySelector(".coin");
    let heading = document.querySelector("#headingH2");
    let body= document.querySelector("body");

    let userchoice = null;

    options.forEach((option) => {
      option.addEventListener("click", () => {
         // Remove previous selection
        options.forEach(btn => btn.classList.remove("selected"));
        userchoice = option.getAttribute("id");
        msg.classList.add("msg2");
        msg.classList.remove("msg");
        msg.style.color = "#00CED1"; // reset to cyan
        msg.innerText = `You selected ${userchoice}. Now click Flip.`;
        heading.innerText = userchoice;
        option.classList.add("selected"); 
      });
    });



     function isFlip() {
       if (!userchoice) {
         msg.innerText = "Please select Head or Tail before flipping!";
         msg.style.color = "orange";
         return;
       }
      
       Head.disabled=true;
       Tail.disabled=true;
      Flip.disabled = true;
      coin.classList.add("coin2");
      heading.classList.add("headH2");
    
      setTimeout(() => {
        playGame();
        
      }, 2000);
      }



    const playGame=()=> {
      showWinner(userchoice);
    }
 

    Flip.addEventListener("click",isFlip);
    //if we click on coin it flip like  weclick on flip button
    coin.addEventListener("click",isFlip);
  


    const showWinner=(userchoice)=> {
     coin.classList.remove("coin2");
     heading.classList.remove("headH2");

     let compChoice = getComputerChoice();
      //heading.innerText = compChoice;

      if (userchoice === compChoice) {  
        msg.innerText = `🎉 You win! You chose ${userchoice}.`;
        msg.style.color= "lightgreen";
      } 

      else {
         msg.innerText = `😢 You lose! You chose ${userchoice}, but it was ${compChoice}.`;
         msg.style.color= "red";
      }


       msg.classList.add("result-pop");
       setTimeout(() => msg.classList.remove("result-pop"), 500);
       setTimeout(resetGame, 3000);
    }


  function resetGame() {
  msg.innerText = "Choose Head or Tail.";
  msg.style.color = "";
  userchoice = null;
  Flip.disabled = false;
  Head.disabled=false;
  Tail.disabled=false;
  options.forEach(Option => Option.classList.remove("selected"));
  }


 function getComputerChoice() {
   const choices = ["Head", "Tail"];
   const randIdx = Math.floor(Math.random() * 2);
   return choices[randIdx];
 }