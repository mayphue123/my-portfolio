let menu = document.querySelector('#menu-bar');
let header =document.querySelector('.aside');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

function openForm(){
    document.getElementById("myForm").style.display = "block";
} 
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function cvDownload(){
    
    if ((document.getElementById("username").value == "demo") &&(document.getElementById("password").value =='demo') ) {
        window.open('MayPhue.pdf');
    }
    else{
        alert('Username and Password Incorrect, Please Try Again.');
    }
  
}
 function linkEntertainer(){
     window.open('https://test.gei-tassha.jp/');
 }
 function linkPortal(){
     window.open('https://test.borderless-working.jp/');
 }
 