// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements based on page
    if (document.body.classList.contains('welcome-page')) {
        createFloatingElements();
        setupWelcomePage();
    }
    
    // Initialize music toggle
    initMusicToggle();
    
    // Initialize page transitions
    initPageTransitions();
    
    // Initialize bad day button if it exists
    if (document.querySelector('.bad-day-btn')) {
        initBadDayButton();
    }
    
    // Initialize current year in footer
    initCurrentYear();
});

// Create floating hearts/flowers/butterflies
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;
    
    const types = ['🌸', '✨', '💖', '🌷', '🦋', '🎀', '🫧'];
    const animationDurations = ['10s', '15s', '20s', '25s', '30s'];
    
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        element.innerHTML = types[Math.floor(Math.random() * types.length)];
        
        // Random positioning and animation
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.fontSize = (Math.random() * 20 + 10) + 'px';
        element.style.animationDuration = animationDurations[Math.floor(Math.random() * animationDurations.length)];
        element.style.animationDelay = (Math.random() * 10) + 's';
        
        container.appendChild(element);
    }
}

// Welcome page setup
function setupWelcomePage() {
    const enterBtn = document.querySelector('.enter-button');
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            // Add transition effect before changing page
            document.body.classList.add('fade-out');
            
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            setTimeout(() => {
                window.location.href = 'wishes.html';
            }, 1000);
        });
    }
}

// Music toggle functionality
function initMusicToggle() {
    const music = document.getElementById('backgroundMusic');
    if (!music) return;
    
    const musicToggle = document.getElementById('musicToggle');
    if (!musicToggle) return;
    
    // Check if music was playing before
    const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
    
    if (wasPlaying) {
        music.play().catch(e => console.log("Autoplay prevented:", e));
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.pause();
        musicToggle.innerHTML = '<i class="fas fa-music-slash"></i>';
    }
    
    musicToggle.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            localStorage.setItem('musicPlaying', 'true');
        } else {
            music.pause();
            musicToggle.innerHTML = '<i class="fas fa-music-slash"></i>';
            localStorage.setItem('musicPlaying', 'false');
        }
    });
    
    // Start music muted by default to respect autoplay policies
    music.volume = 0.3;
    music.muted = true;
    
    // Unmute on first interaction
    function unmuteOnInteraction() {
        if (music.muted) {
            music.muted = false;
            document.removeEventListener('click', unmuteOnInteraction);
            document.removeEventListener('touchstart', unmuteOnInteraction);
            
            // If music was playing before, resume playback
            if (localStorage.getItem('musicPlaying') === 'true') {
                music.play().catch(e => console.log("Playback prevented:", e));
            }
        }
    }
    
    document.addEventListener('click', unmuteOnInteraction);
    document.addEventListener('touchstart', unmuteOnInteraction);
}

// Smooth page transitions
function initPageTransitions() {
    // Add fade-in class to body when page loads
    document.body.classList.add('fade-in');
    
    // Intercept all internal links for smooth transitions
    document.querySelectorAll('a[href^=""]').forEach(link => {
        if (link.hash || link.target === '_blank') return;
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't intercept external links or anchor links
            if (href.startsWith('http') || href.startsWith('#')) return;
            
            e.preventDefault();
            
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
}

// Bad day button functionality
function initBadDayButton() {
    const badDayBtn = document.querySelector('.bad-day-btn');
    if (!badDayBtn) return;
    
    badDayBtn.addEventListener('click', function() {
        // Play comforting sound
        const comfortSound = new Audio('assets/audio/comfort.mp3');
        comfortSound.volume = 0.3;
        comfortSound.play();
        
        // Create confetti effect
        createConfetti();
        
        // Redirect to bad day page after a delay
        setTimeout(() => {
            window.location.href = 'bad-day.html';
        }, 1500);
    });
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ffb7c5', '#d8c4e6', '#e0bfb8', '#f3e5d8', '#ffd6e0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Utility function to create sparkles
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Position sparkles around the element
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.width = (Math.random() * 20 + 10) + 'px';
        sparkle.style.height = sparkle.style.width;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Initialize current year in footer
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Create virtual hug animation
function createHugAnimation() {
    const hugElements = ['💖', '🤗', '🫂', '💝', '💗', '💓', '💞', '💕'];
    const container = document.querySelector('.hug-animation');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.classList.add('hug-element');
        element.innerHTML = hugElements[Math.floor(Math.random() * hugElements.length)];
        
        // Random properties
        element.style.left = Math.random() * 100 + 'vw';
        element.style.fontSize = (Math.random() * 20 + 20) + 'px';
        element.style.animationDuration = (Math.random() * 3 + 2) + 's';
        element.style.animationDelay = (Math.random() * 2) + 's';
        
        container.appendChild(element);
    }
}

// Export functions for use in other modules
window.utils = {
    createSparkles,
    createConfetti,
    createHugAnimation
};