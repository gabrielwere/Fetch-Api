let btn = document.getElementById("button");
let btn2 = document.getElementById("button2");
let userNames = document.querySelectorAll(".user-name");
let userIds = document.querySelectorAll(".user-id");
let profilePhotos = document.querySelectorAll(".profile-photo");



btn.addEventListener("click",fetchUsers);

function fetchUsers(){
    fetch('https://api.github.com/users?since=0')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
       for(let i=0;i<userNames.length;i++){
           userNames[i].textContent = data[i].login;
           userIds[i].textContent = data[i].id;
           profilePhotos[i].src=data[i].avatar_url;
       }
    
           
    })
    .catch((err)=>{
        return err;
    });
}