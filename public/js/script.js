const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const namaku = document.getElementsByName('nama')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// settingan carousel slick slider
$('.carouselslick').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    variableWidth: false,
});

// setting googlemaps
// function initMaps() {
//     const centerMaps = { 
//         lat: -7.3371968,
//         lng: 112.7856979
//     }
//     const mapOptions = {
//         center: centerMaps,
//         zoom: 10
//     }
//     const map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);
// }

// $("#formValidation").validate({
//     rules:{
//         namaku:{
//             minlenght: 2
//         },
//     },
//     message:{
//         namaku:{
//             required:"Silahkan masukkan nama Anda",
//             minlenght:"nama minimal 2 huruf",
//         },
//     },

//     submitHandler: function(form) {
//         form.submit();
//     }
// });

const userForm = document.getElementById("user-form")
const dataContainer = document.getElementById("data-container")

const username = document.getElementById("username");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

const kritiksaran = document.getElementById("kritiksaran");
const kritiksaranError = document.getElementById("kritiksaran-error");

function ValidateName() {
    if (username.value !== "") {
        username.classList.add("border-green-400")
        username.classList.remove("border-gray-300")
    }
    else {
        username.classList.remove("border-green-400")
        username.classList.add("border-red-400")
    }
}

username.addEventListener("keyup", () => {
    ValidateName()
})

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        email.classList.add("border-green-400")
        email.classList.remove("border-red-400")
        emailError.classList.add("hidden")
        emailError.classList.remove("block")
        return true
    }
    else {
        email.classList.add("border-red-400")
        email.classList.remove("border-green-400")
        emailError.classList.remove("hidden")
        emailError.classList.add("block")
        return false;
    }
}

email.addEventListener("keyup", () => {
    ValidateEmail(email)
})

function ValidatePhoneNumber(phoneNumber) {
    if (phoneNumber.value.length >= 9) {
        phone.classList.add("border-green-400")
        phone.classList.remove("border-red-400")
        phoneError.classList.add("hidden")
        phoneError.classList.remove("block")
    }
    else {
        phone.classList.remove("border-green-400")
        phone.classList.add("border-red-400")
        phoneError.classList.remove("hidden")
        phoneError.classList.add("block")
    }
}

phone.addEventListener("keyup", () => {
    ValidatePhoneNumber(phone)
})

function ValidateKritikSaran(kritikSaran) {
    if (kritikSaran.value.length >= 5) {
        kritiksaran.classList.add("border-green-400")
        kritiksaran.classList.remove("border-red-400")
        kritiksaranError.classList.add("hidden")
        kritiksaranError.classList.remove("block")
    }
    else {
        kritiksaran.classList.remove("border-green-400")
        kritiksaran.classList.add("border-red-400")
        kritiksaranError.classList.remove("hidden")
        kritiksaranError.classList.add("block")
    }
}

kritiksaran.addEventListener("keyup", () => {
    ValidateKritikSaran(kritiksaran)
})

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (username.classList.contains("border-green-400") && phone.classList.contains("border-green-400") &&
        email.classList.contains("border-green-400") && kritiksaran.classList.contains("border-green-400")) {
        let finalData = {
            username: username.value,
            email: email.value,
            phone: phone.value,            
            kritiksaran: kritiksaran.value,
        }
        dataContainer.innerHTML = `
                        <div class="flex flex-col gap-3">
                        <p>Username - ${finalData["username"]}</p>
                        <p>Email - ${finalData["email"]}</p>
                        <p>Phone - ${finalData["phone"]}</p>                        
                        <p>Kritik Saran - ${finalData["kritiksaran"]}</p>
                        </div>
        `
    }
})



