// Cambia entre las diferentes competiciones y muestra la tabla correspondiente
const compLinks = document.querySelectorAll('.comp-link');
const compContents = {
    champions: document.getElementById('comp-champions'),
    laliga: document.getElementById('comp-laliga'),
    mls: document.getElementById('comp-mls'),
    libertadores: document.getElementById('comp-libertadores'),
    ligamx: document.getElementById('comp-ligamx')
};

compLinks.forEach(link => {
    link.addEventListener('click', () => {
        compLinks.forEach(l => l.classList.remove('active'));
        Object.values(compContents).forEach(c => c.classList.add('hidden'));
        link.classList.add('active');
        compContents[link.dataset.comp].classList.remove('hidden');
    });
});
