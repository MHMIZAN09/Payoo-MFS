// console.log('button added clicking');

//document.getElementById('id').addEventListener('click',fun)
//search : form submit reloading the page

//step-1: set event handler
document.getElementById("btn-login").addEventListener('click', function (e) {

    //step-2 prevent default behavior (prevent reloading browser)
    e.preventDefault();
    // console.log('login button clicked');

    //step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);

})
