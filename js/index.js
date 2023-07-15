const card = document.getElementById('card')
function reloadbtoh() {
    location.reload()
}
var file = ""
const isMobile = navigator.userAgentData.mobile
if (isMobile) {
    card.innerHTML = ' <p class="big">w3bkn0t</p> <p>This websote is only compatible with mobile,</p> <p> go on your mobile device and try again.</p> '
}
const fileInput = document.getElementById('ipain');
fileInput.addEventListener('change', (event) => {
    file = event.target.files;
    console.log(file[0]);
  });

function showcredits() {
    card.innerHTML = '<p class="big">Credits</p> <p> home-gihub: the creator </p> <p> Odyssey-Team: Insparation for the ui, more specifically Taurine </p> <button class="button" onclick="reloadbtoh();"> <p>Back to home</p> </button>'
}

function exploit() {
    console.log('the exploit should run now but there is not anything here')
}

function run() {
    card.innerHTML = '<p class="big">Working.</p>'
    if (file) {
        card.innerHTML = '<p class="big">Running Exploit.</p>'
        exploit()
    } else {
        card.innerHTML = '<p class="big"> ERROR: No File Seclected. </p> <br> <button class="button" onclick="reloadbtoh();"> <p>Back to home</p> </button>'
    }
}
