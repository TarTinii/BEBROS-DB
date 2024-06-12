document.addEventListener("DOMContentLoaded", function() {
    const units = [
        {
            id: 1,
            name: "Monkey D. Luffy",
            image: "./images/luffy1.jpg", 
            description: "Guerrier blanc se déchainant."
        },
        {
            id: 2,
            name: "Yamato",
            image: "images/yamato.jpg",
            description: "Décision amenant à un futur similaire."
        },
        
    ];

    const unitList = document.getElementById('unit-list');

    units.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `
            <a href="units/${unit.id}.html">
                <img src="${unit.image}" alt="${unit.name}"> <!-- Assurez-vous que le chemin est correct -->
            </a>
            <h2>${unit.name}</h2>
            <p>${unit.description}</p>
        `;
        unitList.appendChild(unitCard);
    });
});

function searchCharacter() {
    var input = document.getElementById('search-input').value.toLowerCase(); 
    var cards = document.querySelectorAll('.unit-card'); 

    cards.forEach(card => {
        var name = card.querySelector('h2').textContent.toLowerCase(); 
        if (name.includes(input)) { 
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('dark-mode-button');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const showLimitBreakButton = document.getElementById('show-limit-break');
    const showLimitBreakExpansionButton = document.getElementById('show-limit-break-expansion');
    const limitBreakRow = document.querySelector('.limit-break');
    const limitBreakExpansionRow = document.querySelector('.limit-break-expansion');

    });
    document.addEventListener("DOMContentLoaded", function() {
        const supportIcon = document.querySelector('.support-icon');
        const supportPopup = supportIcon.querySelector('.support-popup');
        supportPopup.innerHTML = '<ul>' + supportLevels.map(level => `<li>${level}</li>`).join('') + '</ul>';
    });

    document.addEventListener("DOMContentLoaded", function() {
    const showLimitBreakButton = document.getElementById('show-limit-break');
    const showLimitBreakExpansionButton = document.getElementById('show-limit-break-expansion');

    function updateStats(type) {
        const hp1 = document.querySelector('.hp-1');
        const atk1 = document.querySelector('.atk-1');
        const rcv1 = document.querySelector('.rcv-1');
        const hp99 = document.querySelector('.hp-99');
        const atk99 = document.querySelector('.atk-99');
        const rcv99 = document.querySelector('.rcv-99');
        const hp150 = document.querySelector('.hp-150');
        const atk150 = document.querySelector('.atk-150');
        const rcv150 = document.querySelector('.rcv-150');
        
        hp1.textContent = hp1.getAttribute('data-' + type);
        atk1.textContent = atk1.getAttribute('data-' + type);
        rcv1.textContent = rcv1.getAttribute('data-' + type);
        hp99.textContent = hp99.getAttribute('data-' + type);
        atk99.textContent = atk99.getAttribute('data-' + type);
        rcv99.textContent = rcv99.getAttribute('data-' + type);
        hp150.textContent = hp150.getAttribute('data-' + type);
        atk150.textContent = atk150.getAttribute('data-' + type);
        rcv150.textContent = rcv150.getAttribute('data-' + type);
    }

    showLimitBreakButton.addEventListener('click', function() {
        if (this.textContent === 'Voir Stats LB') {
            updateStats('limit-break');
            this.textContent = 'Cacher Stats LB';
            showLimitBreakExpansionButton.textContent = 'Voir Stats LB';
        } else {
            updateStats('original');
            this.textContent = 'Voir Stats LB';
        }
    });

    showLimitBreakExpansionButton.addEventListener('click', function() {
        if (this.textContent === 'Voir Stats LB+') {
            updateStats('limit-break-expansion');
            this.textContent = 'Cacher Stats LB+';
            showLimitBreakButton.textContent = 'Voir Stats LB';
        } else {
            updateStats('original');
            this.textContent = 'Voir Stats LB+';
        }

    });
});