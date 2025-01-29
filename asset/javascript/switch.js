// Switch between dark and light mode
const switchModeButton = document.getElementById('switchMode');

switchModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});