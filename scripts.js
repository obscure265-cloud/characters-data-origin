document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    

    
    // Add CSS animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .mris-btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Add scroll effect for tabs
    window.addEventListener('scroll', function() {
        const tabContainer = document.querySelector('.tab-container');
        if (tabContainer) {
            const rect = tabContainer.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 200) {
                tabContainer.style.boxShadow = '0 0 50px rgba(0, 255, 115, 0.2)';
            } else {
                tabContainer.style.boxShadow = '0 0 40px rgba(0, 255, 115, 0.1)';
            }
        }
    });
});