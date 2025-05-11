const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const country =document.getElementById('country');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

 
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value =password2.value.trim();
    const countryValue = country.value.trim();
    
    let isValid = true;

  
    

    if(fullnameValue === '') {
        setError(fullname, 'Fullname is required');
        isValid = false;
    } else {
        setSuccess(fullname);
    }

        

   if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 5) {
        setError(password, 'Password must be at least 5character.')
    } else {
        setSuccess(password);
    }

     if(password2Value === '') {
     setError(password2, 'Confirm your password');
     isValid = false;
     } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords doesn't match");
      } else {
     setSuccess(password2);
       }

       if(countryValue === '') {
        setError(country, 'country is required');
        isValid = false;
    // } else if (!isValidcountry(countryValue)) {
        // setError(country, 'Provide a valid country address');
    } else {
        setSuccess(country);
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
        // Optional: clear all success classes
        document.querySelectorAll('.input-control').forEach(el => {
            el.classList.remove('success');
        });
    }
}