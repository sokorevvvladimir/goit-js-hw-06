const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password
    };
    
    if (mail === "" || password === "") {
        const message = "Все поля должны быть заполнены!";
        alert(message);
    };
    console.log(formData);

    event.currentTarget.reset();

   // Решение через класс FormData ниже
    // const formData = new FormData(event.currentTarget);
    // console.log(formData);

    // formData.forEach((value, name) => {
    //     console.log("value:", value);
    //     console.log("name:", name);
    // })
};

form.addEventListener('submit', onFormSubmit);