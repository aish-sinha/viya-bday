document.addEventListener('DOMContentLoaded', function() {
    // Sample friends data - replace with real data
    const friends = [
        {
            id: 'tapasya',
            name: "Tapasya",
            relation: "Best Friend",
            image: "assets/images/tapasya.jpg",
            letter: `My dearest friend,
            
            From the moment we met in kindergarten, I knew we'd be lifelong friends. Remember when we used to trade snacks at lunch? You always gave me your chocolate chip cookies, and I gave you my gummy bears. Some things never change - you're still giving me sweetness every day.
            
            What I love about you:
            • Your laugh that makes everyone else laugh too
            • The way you remember small details about people
            • Your courage to always stand up for what's right
            • How you make ordinary moments feel magical
            
            No matter where life takes us, I'll always be here - ready to share snacks, secrets, and endless love.
            
            Forever your friend,
            Tapasya`,
            audio: "assets/audio/tapasya-letter.mp3"
        },
        {
            id: 'aishwarya',
            name: "Aishwarya",
            relation: "Soul Sister",
            image: "assets/images/aishwarya.jpg",
            letter: `To my soul twin,
            
            They say friends are the family you choose, and choosing you was the best decision I ever made. Our late-night talks have gotten me through my darkest days, and your wisdom always lights my way.
            
            My favorite memories:
            • That rainy day we danced in the park
            • The time we got lost but found the best café
            • Every single inside joke we've created
            • How you knew I was sad before I did
            
            Thank you for seeing me - really seeing me - and loving me exactly as I am. I hope you know how deeply you're loved in return.
            
            With all my heart,
            Aishwarya`,
            audio: "assets/audio/aishwarya-letter.mp3"
        },
        // Add more friends here...
    ];

    const container = document.querySelector('.friends-grid');
    if (!container) return;
    
    friends.forEach(friend => {
        const card = document.createElement('div');
        card.className = 'friend-card';
        card.dataset.friendId = friend.id;
        
        card.innerHTML = `
            <img src="${friend.image}" alt="${friend.name}" class="friend-image">
            <div class="friend-info">
                <h3 class="friend-name">${friend.name}</h3>
                <p class="friend-relation">${friend.relation}</p>
                <button class="view-letter-btn">Read Letter</button>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Add click handlers to friend cards
    document.querySelectorAll('.friend-card').forEach(card => {
        card.addEventListener('click', function() {
            const friendId = this.dataset.friendId;
            const friend = friends.find(f => f.id === friendId);
            
            if (friend) {
                showFriendModal(friend);
            }
        });
    });
});

function showFriendModal(friend) {
    // Play click sound
    const clickSound = new Audio('assets/audio/click.mp3');
    clickSound.volume = 0.3;
    clickSound.play();
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'friend-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${friend.name}'s Letter</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="friend-letter">
                    ${friend.letter.replace(/\n/g, '<br>')}
                </div>
                ${friend.audio ? `
                <div class="audio-controls">
                    <button class="play-voice-btn" onclick="playFriendVoiceNote('${friend.audio}')">
                        <i class="fas fa-play"></i> Listen to ${friend.name}'s voice
                    </button>
                    <audio id="friendVoiceNote" src="${friend.audio}"></audio>
                </div>
                ` : ''}
                <p class="letter-signature">${friend.name}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
        document.querySelector('.modal-content').classList.add('active');
    }, 10);
    
    // Close modal handler
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            modal.classList.remove('active');
            document.querySelector('.modal-content').classList.remove('active');
            
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }
    
    // Close when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            modal.classList.remove('active');
            document.querySelector('.modal-content').classList.remove('active');
            
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// Play friend's voice note
function playFriendVoiceNote(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.volume = 0.5;
    audio.play();
    
    // Change button text while playing
    const button = document.querySelector('.play-voice-btn');
    if (button) {
        button.innerHTML = '<i class="fas fa-pause"></i> Playing...';
        
        audio.addEventListener('ended', () => {
            button.innerHTML = '<i class="fas fa-play"></i> Listen again';
        });
    }
}