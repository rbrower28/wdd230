// set a hidden attribute on the form as the date and time of the request



document.querySelector("#submit").addEventListener("click", function() {

    const hidden = document.querySelector("#hid")
    hidden.setAttribute("value", new Date())

})
