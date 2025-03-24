document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const typewriter = document.querySelector('.typewriter');
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    const typingSpeed = 100;

    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        }
    }
    type();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Modal pop-up
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.querySelector('.close');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Project showcase filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsContainer = document.querySelector('.projects');

    const projects = [
        { id: 1, category: 'web', name: 'Web Project 1' },
        { id: 2, category: 'app', name: 'App Project 1' },
        { id: 3, category: 'web', name: 'Web Project 2' },
        { id: 4, category: 'app', name: 'App Project 2' },
    ];

    function displayProjects(filter) {
        projectsContainer.innerHTML = '';
        const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.textContent = project.name;
            projectsContainer.appendChild(projectItem);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            displayProjects(filter);
        });
    });

    displayProjects('all');
});
