document.addEventListener('DOMContentLoaded', function() {
    // Create hug animation
    window.utils.createHugAnimation();
    
    // Play comforting music
    const comfortMusic = new Audio('assets/audio/comfort-music.mp3');
    comfortMusic.volume = 0.3;
    comfortMusic.loop = true;
    
    // Try to play music (may be blocked by browser autoplay policies)
    const playPromise = comfortMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented:", error);
            // Show play button
            const musicBtn = document.createElement('button');
            musicBtn.className = 'music-btn';
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Comfort Music';
            musicBtn.style.margin = '1rem auto';
            musicBtn.style.display = 'block';
            
            musicBtn.addEventListener('click', function() {
                comfortMusic.play();
                musicBtn.remove();
            });
            
            document.querySelector('.bad-day-content').appendChild(musicBtn);
        });
    }
    
    // Comfort items functionality
    const comfortItems = document.querySelectorAll('.comfort-item');
    comfortItems.forEach(item => {
        item.addEventListener('click', function() {
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            // Create sparkles
            window.utils.createSparkles(this);
            
            // Special actions for certain items
            const itemType = this.querySelector('.comfort-title').textContent;
            
            switch(itemType) {
                case 'Virtual Hug':
                    window.utils.createHugAnimation();
                    break;
                case 'Affirmations':
                    window.location.href = 'affirmations.html';
                    break;
                case 'Happy Memories':
                    window.location.href = 'memories.html';
                    break;
                case 'Letters':
                    window.location.href = 'letters.html';
                    break;
            }
        });
    });
    
    // Home button functionality
    const homeBtn = document.querySelector('.home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
        });
    }
});