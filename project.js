// Project Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.classList.add('pop-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('pop-in');
                }
            });
        });
    });
    
    // Initialize all projects visible
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Project Modal (Optional)
const projectModals = document.querySelectorAll('.project-modal');
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
document.body.appendChild(modalOverlay);

projectModals.forEach(modal => {
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modalOverlay.addEventListener('click', () => {
    projectModals.forEach(modal => {
        modal.classList.remove('active');
    });
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Add modal styles if needed
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .modal-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .project-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        width: 90%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        z-index: 1001;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .project-modal.active {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        visibility: visible;
    }
    
    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 30px;
        height: 30px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        .project-modal {
            width: 95%;
            padding: 1rem;
        }
    }
`;
document.head.appendChild(modalStyle);
