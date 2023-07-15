const card = document.getElementById('card')
var file = ""
const fileInput = document.getElementById('ipain');
fileInput.addEventListener('change', (event) => {
    file = event.target.files;
    console.log(file[0]);
  });

function run() {
    card.innerHTML = '<p class="big">Working.</p>'
    if (file) {
        card.innerHTML = '<p class="big">Running Exploit.</p>'
    } else {
        card.innerHTML = '<p class="big"> ERROR: No File Seclected. </p>'
    }
}
