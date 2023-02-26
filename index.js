/*Javascript for the sample site
Created by Vyanna Hill
Give functionality to the buttons on the page
*/

// assigning elements by their ids in the html
var btnverse=document.getElementById("btnRev");
var fans=document.getElementById("rans");
var btnTab=document.getElementById("btnTab");
var finTable=document.getElementById("tables");
var upload=document.getElementById("File_sub");


//hiding the label where the answer will appear
fans.style.display="none";


//Looking for any click activity for the side bar's button
btnverse.addEventListener("click",function(){
    var word=document.getElementById("wrdverse").value;
    // Once button is click, enter the string into a for loop. Starting from the last character, append the char into the new string
    var reversestr='';
    for(var l=word.length-1;l>=0;l--){
        reversestr+=word[l];
    }

    //assign the reverse string to be printed in the paragraph section and set visibility to true
    fans.style.display="inLine";
    fans.innerHTML=reversestr;

}
);

btnTab.addEventListener("click",function(){
    
    // After it ran sucessfully, notice the duplicate table. I used a resource to help debug this issue https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
    if(finTable.hasChildNodes()){
        while(finTable.hasChildNodes()){
            finTable.removeChild(finTable.lastChild);
        }
    }

    let arry=[];
    let temp;
    var tvalue=document.getElementById("tab").value;

    //Grabbing the user's input, create an array of 20 multiples for the table
    for(var i=1;i<=20;i++){
        temp=i*tvalue;
        arry.push(temp)
    }
    var a=0;

    //For each row on the table, we will create five cells
    for (var j=0;j<5; j++){
        let tr=finTable.insertRow();
        for(var k=0;k<4;k++){
                // For each cell, travel down the array of multiples and place in its corresponding cell
                let td= tr.insertCell();
                let data=document.createTextNode(arry[a+k]);
                td.appendChild(data);  
        }
        //To make sure it continues down the array, we will add four to the recount to adjust for the loop after a new row
        a+=4;
    }

});

upload.addEventListener("submit",function(e){
    //will not submit the user's file, as it will create a post request
    e.preventDefault();

    // retrieve file uploaded
    var data=document.getElementById('data').files[0];
    const scan= new FileReader();

    scan.onload=function(){
        let d= scan.results
    }
    scan.readAsText(data);
});