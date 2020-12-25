let boi=document.getElementById("btnboi");

boi.addEventListener("click",funcboi);

function funcboi()
{
    let divboi=document.getElementById("boi");
    divboi.style="display:none;";
    let divpnb=document.getElementById("pnb");
    divpnb.style="display:block;";
    divpnb.innerHTML=`<h3>DEEPENDRA TRIVEDI</h3>
    <h3>CURRENT ACCOUNT NO:- <span>4140000100151683</span></h3>
    <h3>PUNJAB NATIONAL BANK</h3>
    <h3>BRANCH:- KHAZANA COMPLEX,LUCKNOW</h3>
    <h3>IFSC:- <span>PUNB0414000</span></h3>`
}

let pnb=document.getElementById("btnpnb");

pnb.addEventListener("click",funcpnb);

function funcpnb()
{
    let divpnb=document.getElementById("pnb");
    divpnb.style="display:none;";
    let divboi=document.getElementById("boi");
    divboi.style="display:block;";
    divboi.innerHTML=`<h3>R S TOUR AND TRAVELS</h3>
    <h3>CURRENT ACCOUNT NO:- <span>683420110000273</span></h3>
    <h3>BANK OF INDIA</h3>
    <h3>BRANCH:- LDA COLONY KANPUR ROAD,LUCKNOW</h3>
    <h3>IFSC:- <span>BKID0006834</span></h3>`
}