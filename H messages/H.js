  let i;
const setPrefix = "H";

  document.addEventListener("DOMContentLoaded", () => {
    const navButtons1 = document.getElementById("nav-buttons-1");
    const navButtons2 = document.getElementById("nav-buttons-2");

    const path = decodeURIComponent(window.location.pathname);
    const match = path.match(/H\s*\((\d+)\)\.html/);
    const i = match ? parseInt(match[1]) : 1;

    const createNavButtons = (container) => {
      if (i > 1) {
        const prevLink = document.createElement("a");
        prevLink.href = `H (${i - 1}).html`;
        const prevBtn = document.createElement("button");
        prevBtn.className = "nav-btn";
        prevBtn.textContent = "Prev";
        prevLink.appendChild(prevBtn);
        container.appendChild(prevLink);
      }
      if (i < 100) {
        const nextLink = document.createElement("a");
        nextLink.href = `H (${i + 1}).html`;
        const nextBtn = document.createElement("button");
        nextBtn.className = "nav-btn";
        nextBtn.textContent = "Next";
        nextLink.appendChild(nextBtn);
        container.appendChild(nextLink);
      }
    };

    createNavButtons(navButtons1);
    createNavButtons(navButtons2);

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

  document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "cursor";
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 800);
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
    const path = decodeURIComponent(window.location.pathname);
    const match = path.match(/H\s*\((\d+)\)\.html/);
    const i = match ? parseInt(match[1]) : 1;
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
    const path = decodeURIComponent(window.location.pathname);
    const match = path.match(/H\s*\((\d+)\)\.html/);
    const i = match ? parseInt(match[1]) : 1;
    messageInput.style.display = 'block';
    submitBtn.style.display = 'block';
    displayedMessage.style.display = 'none';
    editBtn.style.display = 'none';
    nameInput.style.display = 'block';
    fromDisplay.style.display = 'none';
    messageInput.value = localStorage.getItem('savedMessage_' + i) || '';
    nameInput.value = localStorage.getItem('savedName_' + i) || '';
  });