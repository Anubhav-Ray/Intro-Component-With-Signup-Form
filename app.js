const firstName=document.getElementById('first-name');
const lastName=document.getElementById('last-name');
const email=document.getElementById('email');
const password=document.getElementById('password');
let submitBtn = document.getElementById('submit-btn');
let inputButtons = document.querySelectorAll('.input-control');

// Value is removed after refresh of Window or Tab
document.addEventListener('DOMContentLoaded',()=>{
	for(let i=0; i<inputButtons.length-1; i++){
		inputButtons[i].querySelector('input').value='';
	}
});

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	validateInputs();
})
function validateInputs(){
const firstNameValue=firstName.value.trim();
const lastNameValue=lastName.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();
if(firstNameValue===''){
setError(firstName,'First Name cannot be empty');
}
else{
	success(firstName);
}
if(lastNameValue===''){
	setError(lastName,'Last Name cannot be empty');
}
else{
	success(lastName);
}
if(emailValue==='')
{
	setError(email,'Looks like this is not an email');
}
else if(!isValidEmail(emailValue)){
	setError(email,'Email is invalid');
}
else{
	success(email)
}
if(passwordValue===''){
	setError(password,'Passwords cannot be empty');
}
else if(!isValidPassword(passwordValue)){
	setError(password,'Password length must be 6 characters long');
}
else {
	success(password);
}


}

// Regex
function isValidEmail(email){
	const regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase());
}
function isValidPassword(password){
	const regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	// console.log(regex.test(String(password)));
	return regex.test(String(password));
}
// validation
function success(element){
	const inputControl=element.parentElement;
	const input=inputControl.querySelector('input');
	const error=inputControl.querySelector('p');
	error.innerHTML='';
	inputControl.classList.remove('error');
	inputControl.classList.add('success');
	input.classList.remove('error');


}

function setError(element,message){
const inputControl=element.parentElement;
const errorDisplay=inputControl.querySelector('p');
const input=inputControl.querySelector('input');

inputControl.classList.add('error');
inputControl.classList.remove('success');
input.setAttribute('class','error');

if(inputControl.placeholder==='Email Address')
{
	inputControl.placeholder='example@example.com';
}
input.placeholder=""
	// console.log(errorDisplay);
errorDisplay.innerHTML=message;

}




















