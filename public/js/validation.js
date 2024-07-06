$("#formValidation").validate({
    rules:{
        name:{
            minlength: 3
        },
        email:{
            email: true
        },
        phone:{
            number: true,
            minlength: 9,
            maxlength: 14
        }
    },
    messages: {
        name: {
            required: "Silahkan masukkan nama",
            minlength: "Nama minimal 3 karakter"
        },
        email: "Silahkan masukkan email Anda",
        phone: "Silahkan masukkan nomor WA Anda",        
        subject: "Silahkan masukkan permasalahan",
        formMessage: "Silahkan masukkan pesan Anda",
    },

    submitHandler: function (form) {
        form.submit();
    }
});