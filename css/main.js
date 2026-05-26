// Navbar toggle
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.nav-toggle');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

// Category label map
const catLabels = {
  alkali: 'Metal Alcalino',
  alkaline: 'Metal Alcalinoterroso',
  transition: 'Metal de Transição',
  'post-transition': 'Metal de Pós-Transição',
  metalloid: 'Metaloide',
  'reactive-nonmetal': 'Não Metal Reativo',
  noble: 'Gás Nobre',
  lanthanide: 'Lantanídeo',
  actinide: 'Actinídeo',
  unknown: 'Propriedades Desconhecidas'
};

// Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const elements = document.querySelectorAll('.el[data-cat]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    elements.forEach(el => {
      if (filter === 'all' || el.dataset.cat === filter) {
        el.classList.remove('dimmed');
      } else {
        el.classList.add('dimmed');
      }
    });
  });
});

// Tooltip
const tooltip = document.getElementById('tooltip');
let hideTimer;

elements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer);
    const num = el.dataset.num;
    const sym = el.dataset.sym;
    const name = el.dataset.name;
    const cat = catLabels[el.dataset.cat] || '';
    tooltip.querySelector('.tt-num').textContent = `#${num}`;
    tooltip.querySelector('.tt-sym').textContent = sym;
    tooltip.querySelector('.tt-name').textContent = name;
    tooltip.querySelector('.tt-cat').textContent = cat;
    tooltip.classList.add('visible');
  });
  // Tooltip
const tooltip = document.getElementById('tooltip');
let hideTimer;

elements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer);
    
    // Obter dados
    const num = el.dataset.num;
    const sym = el.dataset.sym;
    const name = el.dataset.name;
    const catKey = el.dataset.cat; // ex: 'transition'
    const catLabel = catLabels[catKey] || '';
    
    // Atualizar conteúdo
    tooltip.querySelector('.tt-num').textContent = `#${num}`;
    tooltip.querySelector('.tt-sym').textContent = sym;
    tooltip.querySelector('.tt-name').textContent = name;
    tooltip.querySelector('.tt-cat').textContent = catLabel;
    
    // Mudar a cor:
    // Resetar classes e adicionar a categoria atual
    tooltip.className = 'tooltip visible ' + catKey;
  });
  
  el.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => {
        tooltip.classList.remove('visible');
        // Opcional: remover a classe de cor quando esconde
        tooltip.className = 'tooltip';
    }, 300);
  });
});
});
