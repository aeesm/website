const toggleButton = document.getElementById('theme-toggle');

function applyTheme(isLightMode) {
    if (isLightMode) {
        document.body.classList.add('light-mode');
        toggleButton.textContent = "Dark mode";
    } else {
        document.body.classList.remove('light-mode');
        toggleButton.textContent = "Light mode";
    }
}

let i;
const setPrefix = "J";

document.addEventListener('DOMContentLoaded', () => {
    const isLightMode = localStorage.getItem('lightMode') === 'true';
    applyTheme(isLightMode);

    const clover = document.getElementById("clover");
    const path = decodeURIComponent(window.location.pathname);
    console.log("Current path:", path);
    const match = path.match(/J\s*messages\/J\s*\((\d+)\)\.html/);
    i = match ? parseInt(match[1]) : 1;
    console.log("Current page:", i);

    if (i > 1) {
        const prevLink = document.createElement("a");
        prevLink.href = `J (${i - 1}).html`;
        const prevBtn = document.createElement("button");
        prevBtn.className = "button-previous";
        prevBtn.textContent = "Previous";
        prevLink.appendChild(prevBtn);
        clover.appendChild(prevLink);
    }

    if (i < 100) {
        const nextLink = document.createElement("a");
        nextLink.href = `J (${i + 1}).html`;
        const nextBtn = document.createElement("button");
        nextBtn.className = "button-next";
        nextBtn.textContent = "Next";
        nextLink.appendChild(nextBtn);
        clover.appendChild(nextLink);
    }

    const savedMessage = localStorage.getItem(setPrefix + '_savedMessage_' + i);
  const savedName = localStorage.getItem(setPrefix + '_savedName_' + i);

    if (savedMessage) {
      displayedMessage.textContent = savedMessage;
      displayedMessage.style.display = 'block';
      messageInput.style.display = 'none';
      submitBtn.style.display = 'none';
      editBtn.style.display = 'block';
    }
    if (savedName) {
      fromDisplay.textContent = 'From: ' + savedName;
      fromDisplay.style.display = 'block';
      nameInput.style.display = 'none';
    }
  });

toggleButton.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('lightMode', isLightMode);
    toggleButton.textContent = isLightMode ? "Dark mode" : "Light mode";
});

document.addEventListener('mousemove', e => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

document.addEventListener('touchmove', e => {
    e.preventDefault(); 
    const touch = e.touches[0];
    document.body.style.setProperty('--x', touch.clientX + 'px');
    document.body.style.setProperty('--y', touch.clientY + 'px');
});

document.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    document.body.style.setProperty('--x', touch.clientX + 'px');
    document.body.style.setProperty('--y', touch.clientY + 'px');
});

const messageInput = document.getElementById('messageInput');
const submitBtn = document.getElementById('submitBtn');
const displayedMessage = document.getElementById('displayedMessage');
const editBtn = document.getElementById('editBtn');
const nameInput = document.getElementById('nameInput');
const fromDisplay = document.getElementById('fromDisplay');

submitBtn.addEventListener('click', function() {
    const message = messageInput.value;
    const name = nameInput.value;
    displayedMessage.textContent = message;
    displayedMessage.style.display = 'block';
    messageInput.style.display = 'none';
    submitBtn.style.display = 'none';
    editBtn.style.display = 'block';
    fromDisplay.textContent = 'From: ' + name;
    fromDisplay.style.display = 'block';
    nameInput.style.display = 'none';
    localStorage.setItem('savedMessage_' + i, message);
    localStorage.setItem('savedName_' + i, name);
});

editBtn.addEventListener('click', function() {
    messageInput.style.display = 'block';
    submitBtn.style.display = 'block';
    displayedMessage.style.display = 'none';
    editBtn.style.display = 'none';
    nameInput.style.display = 'block';
    fromDisplay.style.display = 'none';
    messageInput.value = localStorage.getItem('savedMessage_' + i) || '';
    nameInput.value = localStorage.getItem('savedName_' + i) || '';
});
