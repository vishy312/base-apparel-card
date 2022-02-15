const mail = document.querySelector('.warn-states');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.error');
const msg = document.querySelector('.dont-show');




mail.addEventListener('invalid', function(){
    mail.classList.add('err');
    icon.classList.add('show-error-icon');
    msg.classList.add('show');
});


mail.addEventListener('valid', function(){
    mail.classList.remove('err');
    icon.classList.remove('show-error-icon');
    msg.classList.remove('show');
});