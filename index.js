/*Javascript for the sample site
Created by Vyanna Hill
Give functionality to the buttons on the page
*/

// assigning elements by their ids in the html
var btnverse=document.getElementById("btnRev");
var word=document.getElementById("wrdverse").value;
var fans=document.getElementById("rans");

//hiding the label where the answer will appear
fans.style.display="none";


//Looking for any click activity for the side bar's button
btnverse.addEventListener("click",function(){

    // Once button is click, enter the string into a for loop. Starting from the last character, append the char into the new string
    var reversestr='';
    for(let l=word.length-1;l=>0;l--){
        reversestr+=word[l];
    }

    //assign the reverse string to be printed in the paragraph section and set visibility to true
    fans.style.display="inLine";
    fans.innerHTML=reversestr;


}
);