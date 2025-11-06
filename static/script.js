// Simple scroll animations for the appendix website
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animations for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize animations
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animate metrics when they come into view
    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMetrics();
                metricsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const resultsSection = document.querySelector('.results-container');
    if (resultsSection) {
        metricsObserver.observe(resultsSection);
    }
});

// Animate metric values
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const finalValue = metric.textContent;
        const numericValue = parseFloat(finalValue);
        const unit = finalValue.replace(/[0-9.]/g, '');
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                metric.textContent = currentValue.toFixed(1) + unit;
            }, 30);
        }
    });
}

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Ensure all ancestor collapsibles are opened
            let node = target.parentElement;
            while (node) {
                if (node.matches && node.matches('details.collapsible')) {
                    node.open = true;
                }
                node = node.parentElement;
            }
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.method-item, .result-item, .ablation-item, .experiment-item, .implementation, .citation');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #1d4ed8);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress bar
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Make supplementary sections collapsible and add controls
document.addEventListener('DOMContentLoaded', () => {
    // Remove the main supplementary materials wrapper - just group subsections under their main sections
    const content = document.querySelector('.content');
    if (!content) return;

    const sections = Array.from(content.querySelectorAll(':scope > .section'));

    sections.forEach(section => {
        if (section.closest('details.collapsible') && !section.closest('.main-collapsible')) {
            // Already inside some collapsible grouping (nested), skip
        }
        if (section.querySelector(':scope > details.collapsible')) return;

        const heading = section.querySelector(':scope > h3, :scope > h4');
        if (!heading) return;
        
        // Skip the Acknowledgments section - keep it non-collapsible
        if (heading.id === 'acknowledgments') return;
        
        const isMain = heading.tagName.toLowerCase() === 'h3';
        if (!isMain) return;

        const details = document.createElement('details');
        details.className = 'collapsible';
        details.open = false; // Start collapsed by default

        const summary = document.createElement('summary');
        summary.className = 'collapsible-summary';
        summary.appendChild(heading);
        details.appendChild(summary);

        const body = document.createElement('div');
        body.className = 'collapsible-content';

        const ownNodes = Array.from(section.childNodes);
        ownNodes.forEach(node => {
            if (node !== details && node !== summary && node !== heading) {
                if (node.nodeType === Node.ELEMENT_NODE && (node.matches('h3') || node.matches('h4'))) return;
                body.appendChild(node);
            }
        });

        let next = section.nextElementSibling;
        while (next && next.classList.contains('section')) {
            const subHead = next.querySelector(':scope > h3, :scope > h4');
            if (!subHead || subHead.tagName.toLowerCase() !== 'h4') break;
            body.appendChild(next);
            next = section.nextElementSibling;
        }

        details.appendChild(body);
        section.innerHTML = '';
        section.appendChild(details);
    });

    // Controls removed per user request
}); 