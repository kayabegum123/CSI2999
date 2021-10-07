document.addEventListener("DOMContentLoaded", () => {
    const login_form = document.querySelector("#login");
    const signup_form = document.querySelector("#signup");

    //Switch between login and signup forms
    document.querySelector("#signup_link").addEventListener("click", e => {
        e.preventDefault();
        login_form.classList.add("form_hidden");
        signup_form.classList.remove("form_hidden");
    });

    document.querySelector("#login_link").addEventListener("click", e => {
        e.preventDefault();
        login_form.classList.remove("form_hidden");
        signup_form.classList.add("form_hidden");
    });

    
});
