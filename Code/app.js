const form = document.querySelector('#create-account-form');
const firstnameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const dobInput = document.querySelector('#dob');
const genderInput = document.querySelector('#gender');
const addressline1Input = document.querySelector('#address1');
const addressline2Input = document.querySelector('#address2');
const cityInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');
const postalInput = document.querySelector('#postal');


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //NAME
    if(firstnameInput.value.trim()==''){
        setError(firstnameInput, 'Name can not be empty');
    }else if(firstnameInput.value.trim().length <5 || firstnameInput.value.trim().length > 15){
        setError(firstnameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(firstnameInput);
    }

    if(lastnameInput.value.trim()==''){
        setError(lastnameInput, 'Name can not be empty');
    }else if(lastnameInput.value.trim().length <5 || lastnameInput.value.trim().length > 15){
        setError(lastnameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(lastnameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    //DOB
    if (dobInput.value.trim()==''){
        setError(dobInput,'Provide Date of Birth');
    }
    else{
        setSuccess(dobinput);
    }

   //GENDER
   if(genderInput.value.trim()==''){
    setError(genderInput,'Select any one gender');
   }
   else{
    setSuccess(genderInput);
   }

   //ADDRESS LINE 1
   if(addressline1Input.value.trim()==''){
    setError(addressline1Input, 'Address can not be empty');
}else if(addressline1Input.value.trim().length <5 || addressline1Input.value.trim().length > 15){
    setError(addressline1Input, 'Address must be min 5 and max 15 charecters');
}else {
    setSuccess(addressline1Input);
}

//ADDRESS LINE 2
if(addressline2Input.value.trim()==''){
    setError(addressline2Input, 'Address can not be empty');
}else if(addressline2Input.value.trim().length <5 || addressline2Input.value.trim().length > 15){
    setError(addressline2Input, 'Address must be min 5 and max 15 charecters');
}else {
    setSuccess(addressline2Input);
}

//POSTAL
if(postalInput.value.trim()==''){
    setError(postalInput, 'Postal code can not be empty');
}else {
    setSuccess(postalInput);
}

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}