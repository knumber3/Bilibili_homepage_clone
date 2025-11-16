const dropDownButton = document.querySelector('.drop-down-select');
const dropDownBox = document.querySelector('.drop-down-options');
const allDropDownOption = document.querySelectorAll('.drop-down-option');
const areaCode = document.querySelector('.login-box-2 .form-info');

const codeLoginBox = document.querySelector('.login-box')
const SMSLoginBox = document.querySelector('.login-box-2')
const passwordLogin = document.querySelector('#password-login');
const SMSLogin = document.querySelector('#SMS-login');

const passwordInput = document.querySelector('#password-input');
const bottomLeftPicture1 = document.querySelector('.bottom-left-picture-1');
const bottomLeftPicture2 = document.querySelector('.bottom-left-picture-2');
const bottomRightPicture1 = document.querySelector('.bottom-right-picture-1');
const bottomRightPicture2 = document.querySelector('.bottom-right-picture-2');

const closeButton = document.querySelector('.login-modal-close-button')
const loginBox = document.querySelector('.modal-overlay')

const loginButtons = document.querySelectorAll('.login-button-tip-button')
const registerButton = document.querySelector('.register-button')
const membershipButton = document.querySelector('#membership-button')


//区号选择下拉框控制
dropDownButton.addEventListener('click', e => {
    e.stopPropagation();
    dropDownBox.style.display = 'flex'
});

document.addEventListener('click',e => {
    if(!dropDownButton.contains(e.target)){
    dropDownBox.style.display = 'none'
}
});

allDropDownOption.forEach(element => {
    element.addEventListener('click', e => {
    e.stopPropagation();
    const numberSpan = element.querySelector('.option-number');
    const numberText  = numberSpan.textContent;
    areaCode.textContent = numberText;
    dropDownBox.style.display = 'none';
    console.log(areaCode);
    });
});

//登录方式切换
passwordLogin.addEventListener('click', e => {
    passwordLogin.classList.add('active-login-tab');
    SMSLogin.classList.remove('active-login-tab');
    codeLoginBox.style.display = 'block';
    SMSLoginBox.style.display = 'none';
});

SMSLogin.addEventListener('click', e => {
    SMSLogin.classList.add('active-login-tab');
    passwordLogin.classList.remove('active-login-tab');
    codeLoginBox.style.display = 'none';
    SMSLoginBox.style.display = 'block';
});

//左右下角动画表情切换
passwordInput.addEventListener('focus', () => {
    bottomLeftPicture1.style.display = 'none';
    bottomLeftPicture2.style.display = 'block';
    bottomRightPicture1.style.display = 'none';
    bottomRightPicture2.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
    bottomLeftPicture1.style.display = 'block';
    bottomLeftPicture2.style.display = 'none';
    bottomRightPicture1.style.display = 'block';
    bottomRightPicture2.style.display = 'none';
});

//关闭按钮
closeButton.addEventListener('click', () => {
    loginBox.style.display = 'none';
})

//登录框开启方法
function showLoginBox() {
    loginBox.style.display = 'block';
}

loginButtons.forEach(button => {
    button.addEventListener('click', () => {
        showLoginBox()
    })
})

registerButton.addEventListener('click',() => {
    showLoginBox()
});

membershipButton.addEventListener('click',() => {
    showLoginBox()
});


//showLoginBox();
