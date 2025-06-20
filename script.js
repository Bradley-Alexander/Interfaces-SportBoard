// Cambia entre las vistas de estadísticas
const tabs = document.querySelectorAll('.stats-tab');
const contents = {
    general: document.getElementById('stats-general'),
    equipos: document.getElementById('stats-equipos'),
    atletas: document.getElementById('stats-atletas')
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Quitar clase activa de todos los tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Ocultar todos los contenidos
        Object.values(contents).forEach(c => c.classList.add('hidden'));
        // Activar el tab y mostrar el contenido correspondiente
        tab.classList.add('active');
        contents[tab.dataset.tab].classList.remove('hidden');
    });
});

// Pie chart para equipos
function drawPieChart(canvasId, data, colors) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const total = data.reduce((a, b) => a + b, 0);
    let startAngle = -0.5 * Math.PI;
    data.forEach((value, i) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 120, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        startAngle += sliceAngle;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    drawPieChart('pie-equipos', [30, 20, 25, 25], ['#b05a19', '#e6b07a', '#f8f4f1', '#444']);
    drawPieChart('pie-atletas', [40, 30, 15, 15], ['#b05a19', '#e6b07a', '#f8f4f1', '#444']);
});

// Redirigir a perfil.html al hacer clic en el botón de perfil
const profileBtn = document.querySelector('.profile-btn');
if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        window.location.href = 'perfil.html';
    });
}

// Redirigir a competiciones.html al hacer clic en el botón de competiciones
const compBtn = Array.from(document.querySelectorAll('.nav-link')).find(link => link.textContent.trim() === 'Competiciones');
if (compBtn) {
    compBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'competiciones.html';
    });
}

// Redirigir a partidos.html al hacer clic en el botón de Partidos
const partidosBtn = Array.from(document.querySelectorAll('.nav-link')).find(link => link.textContent.trim() === 'Partidos');
if (partidosBtn) {
    partidosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'partidos.html';
    });
}
// Redirigir a equipos.html al hacer clic en el botón de Equipos
const equiposBtn = Array.from(document.querySelectorAll('.nav-link')).find(link => link.textContent.trim() === 'Equipos');
if (equiposBtn) {
    equiposBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'equipos.html';
    });
}
// Redirigir a atletas.html al hacer clic en el botón de Atletas
const atletasBtn = Array.from(document.querySelectorAll('.nav-link')).find(link => link.textContent.trim() === 'Atletas');
if (atletasBtn) {
    atletasBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'atletas.html';
    });
}

// Alternar modo escala de grises para accesibilidad
const toggleGrayscale = document.getElementById('toggleGrayscale');
if (toggleGrayscale) {
    toggleGrayscale.addEventListener('click', function() {
        document.body.classList.toggle('grayscale-mode');
        toggleGrayscale.classList.toggle('active');
    });
}
