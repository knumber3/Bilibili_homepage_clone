const passwordInput = document.getElementById('password-input');
const toggleBtn = document.getElementById('password-toggle');
const closeEve = document.getElementById('close-eye-icon');
const openEve = document.getElementById('open-eye-icon'); 

function showOpenEve() {
    closeEve.style.display = 'none';
    openEve.style.display = 'inline';
}

function showCloseEve() {
    closeEve.style.display = 'inline';
    openEve.style.display = 'none';
}

toggleBtn.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  if(isHidden){
        showCloseEve();
  } else{
        showOpenEve();
  };
});
