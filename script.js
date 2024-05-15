function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

document.getElementById('theme-toggle-checkbox').addEventListener('change', toggleTheme);

document.querySelector('.download-btn').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('Renat_Mukhametzianov_CV.pdf', '_blank');
});
