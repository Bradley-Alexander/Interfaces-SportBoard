// Cambia entre las pestañas de Siguiendo y Favoritos en perfil
const perfilTabs = document.querySelectorAll('.perfil-tab');
const perfilContents = {
    siguiendo: document.getElementById('perfil-siguiendo'),
    favoritos: document.getElementById('perfil-favoritos')
};

perfilTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        perfilTabs.forEach(t => t.classList.remove('active'));
        Object.values(perfilContents).forEach(c => c.classList.add('hidden'));
        tab.classList.add('active');
        perfilContents[tab.dataset.tab].classList.remove('hidden');
    });
});
