let i;
const setPrefix = "M";

  document.addEventListener("DOMContentLoaded", () => {
    const clover = document.getElementById("clover");

    const path = decodeURIComponent(window.location.pathname);
    console.log("Current path:", path);

    const match = path.match(/M\s*messages\/M\s*\((\d+)\)\.html/);

    i = match ? parseInt(match[1]) : 1;
    console.log("Current page:", i);

    if (i > 1) {
      const prevLink = document.createElement("a");
      prevLink.href = `M (${i - 1}).html`;

      const prevBtn = document.createElement("button");
      prevBtn.className = "button-previous";
      prevBtn.textContent = "Previous";

      prevLink.appendChild(prevBtn);
      clover.appendChild(prevLink);
    }

    if (i < 100) {
      const nextLink = document.createElement("a");
      nextLink.href = `M (${i + 1}).html`;

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