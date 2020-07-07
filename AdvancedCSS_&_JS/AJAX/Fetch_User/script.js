// https://randomuser.me/api/
var img = document.querySelector('#avatar');
var fname = document.querySelector('#fullname');
var user_name = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var btn = document.querySelector('#btn');

var url = 'https://randomuser.me/api/';
function handleErrors(response){
    if(!response.ok){
        throw Error("Custom Error!!!");
    }
    console.log(response);
    return response;
}
function parseJSON(res){
    return res.json();
}
function updateUser(res){
    var newName = res.results[0].name.first + " " + res.results[0].name.last;
    fname.innerText = newName;
    user_name.innerText = res.results[0].login.username;
    img.src = res.results[0].picture.medium;
    email.innerText = res.results[0].email;
    city.innerText = res.results[0].location.city;
}
function printError(error){
    console.log(error);
}
btn.addEventListener("click", function(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateUser)
    .catch(printError)
})