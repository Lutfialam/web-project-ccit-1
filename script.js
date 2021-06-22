$(function () {
    setTimeout(() => {
        $('#app').removeClass('hidden')
        $('#loading').addClass('hidden')
    }, 100)
})

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const nav = document.querySelector(".main_nav")
const linked = document.querySelectorAll(".link_nav")
const link_nav_detail = document.querySelectorAll(".link_nav_detail")
const available_email = ['example@email.com', 'example@gmail.com', 'email@example.com']

window.addEventListener('scroll', () => {
    window.scrollY > 30 ? (
        nav.classList.add('bg-white', 'shadow-xl'),
        nav.classList.remove('bg-transparent'),

        link_nav_detail.forEach(item => item.classList.add('text-black')),
        link_nav_detail.forEach(item => item.classList.remove('text-white'))
    ) : (
        nav.classList.remove('bg-white', 'shadow-xl'),
        nav.classList.add('bg-transparent'),
            
        link_nav_detail.forEach(item => item.classList.add('text-white')),
        link_nav_detail.forEach(item => item.classList.remove('text-black'))
    )
});

const validateEmail = (email) => {
    var rules = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return rules.test(email);
}

const subs_error = (message) => {
    $('#subscribe_mail').removeClass('ring-indigo-400')
    $('#subscribe_mail').addClass('ring-red-500 border-2 border-red-700 placeholder-red-600 text-red-700')
    $('#error_mail_subs').text(message)
    
    setTimeout(() => {
        $('#error_mail_subs').text('')
        $('#subscribe_mail').addClass('ring-indigo-400')
        $('#subscribe_mail').removeClass('ring-red-500 border-2 border-red-700 placeholder-red-600 text-red-700')
    }, 3000)
}

$('#subs_button').on('click', () => {
    if ($('#subscribe_mail').val().length <= 0) {
        subs_error('This field is required!')
    } else if (available_email.includes($('#subscribe_mail').val())) {
        subs_error('Email is already registered!')
    } else if (!validateEmail($('#subscribe_mail').val())) {
        subs_error('Email is not valid!')
    } else {
        $('#alert').removeClass('hidden')
        setTimeout(() => {
            $('#alert').addClass('hidden')
            $('#subscribe_mail').val('')
        }, 5000)
    }
})

$('#close_alert').on('click', () => {
    $('#alert').addClass('hidden')
})