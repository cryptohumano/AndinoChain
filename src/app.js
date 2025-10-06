// Dynamic content reveal and interactions
class AndinoChainApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupInteractiveElements();
    this.setupDemoButton();
    this.setupProgressiveReveal();
    this.setupEventDelegation();
    this.animateCounters();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });

    // Observe cards and interactive elements
    document.querySelectorAll('.interactive-card, .bg-gradient-to-b').forEach(element => {
      element.classList.add('hidden');
      observer.observe(element);
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupInteractiveElements() {
    // Add interactive effects to cards
    document.querySelectorAll('.bg-gradient-to-b').forEach(card => {
      card.classList.add('interactive-card');
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add click effects to buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

      setupDemoButton() {
        const demoButton = document.getElementById('demo-btn');
        if (demoButton) {
          demoButton.addEventListener('click', () => {
            // Open YouTube video in new tab
            window.open('https://youtu.be/eOGxZ8nWW3w', '_blank');
          });
        }

        // Setup explore button
        const exploreButton = document.getElementById('explore-btn');
        if (exploreButton) {
          exploreButton.addEventListener('click', () => {
            // Scroll to wallet action section
            const walletActionSection = document.getElementById('wallet-action');
            if (walletActionSection) {
              walletActionSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            } else {
              console.error('Wallet action section not found');
            }
          });
        }

        // Logbook buttons now use inline onclick handlers for better reliability
      }

  setupProgressiveReveal() {
    // Staggered reveal for hero content
    setTimeout(() => {
      const heroTitle = document.querySelector('h1');
      if (heroTitle) {
        heroTitle.classList.add('typewriter');
      }
    }, 500);

    // Progressive reveal for feature cards
    const featureCards = document.querySelectorAll('.grid > div');
    featureCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('slide-in-bottom');
    });
  }

  setupEventDelegation() {
    // Simplified event delegation - most buttons now use inline onclick handlers
    console.log('Event delegation setup complete');
  }

  // Animate counters when they come into view
  animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-counter'));
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
          }, 16);
          
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }

}

// Screenshot Carousel functionality
class ScreenshotCarousel {
  constructor() {
    this.slides = [];
    this.dots = [];
    this.prevBtn = null;
    this.nextBtn = null;
    this.currentSlide = 0;
    this.autoPlayInterval = null;
    
    // Try to initialize immediately
    this.init();
    
    // Also try after a delay in case elements weren't ready
    setTimeout(() => {
      if (this.slides.length === 0) {
        console.log('Retrying carousel initialization...');
        this.slides = document.querySelectorAll('.screenshot-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.prevBtn = document.getElementById('prev-slide');
        this.nextBtn = document.getElementById('next-slide');
        this.init();
      }
    }, 500);
  }
  
  init() {
    console.log('ScreenshotCarousel init - slides found:', this.slides.length);
    console.log('ScreenshotCarousel init - dots found:', this.dots.length);
    console.log('ScreenshotCarousel init - prevBtn:', this.prevBtn);
    console.log('ScreenshotCarousel init - nextBtn:', this.nextBtn);
    
    if (this.slides.length === 0) {
      console.log('No slides found, carousel not initialized');
      return;
    }
    
    this.setupEventListeners();
    this.startAutoPlay();
    console.log('ScreenshotCarousel initialized successfully');
  }
  
  setupEventListeners() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }
    
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.showSlide(index));
    });
  }
  
  showSlide(index) {
    console.log('showSlide called with index:', index);
    // Hide all slides
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');
    
    this.currentSlide = index;
    console.log('Current slide set to:', this.currentSlide);
  }
  
  nextSlide() {
    console.log('nextSlide called, current:', this.currentSlide);
    const next = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(next);
  }
  
  prevSlide() {
    console.log('prevSlide called, current:', this.currentSlide);
    const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prev);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AndinoChainApp();
  
  // Delay carousel initialization to ensure all elements are loaded
  setTimeout(() => {
    new ScreenshotCarousel();
  }, 100);
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
