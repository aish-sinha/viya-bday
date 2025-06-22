document.addEventListener('DOMContentLoaded', function() {
    // Sample affirmations - replace with real data
    const affirmations = [
        "You are more than enough.",
        "Your softness is a strength, not a weakness.",
        "You make people feel like spring.",
        "Even on your quiet days, you shine.",
        "The world is better because you're in it.",
        "You are loved exactly as you are.",
        "Your feelings are valid and important.",
        "You don't have to be perfect to be worthy.",
        "Your kindness changes lives.",
        "You are allowed to take up space.",
        "Your presence is a gift.",
        "You are stronger than you think.",
        "Your heart is your superpower.",
        "You inspire people without even trying.",
        "You are enough, just as you are."
    ];

    const affirmationDisplay = document.querySelector('.current-affirmation');
    const shuffleBtn = document.querySelector('.shuffle-btn');
    const addForm = document.querySelector('.add-affirmation-form');
    const affirmationInput = document.getElementById('affirmation-text');
    
    if (!affirmationDisplay) return;
    
    // Display random affirmation initially
    displayRandomAffirmation();
    
    // Shuffle button functionality
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function() {
            // Play click sound
            const clickSound = new Audio('assets/audio/click.mp3');
            clickSound.volume = 0.3;
            clickSound.play();
            
            displayRandomAffirmation();
            window.utils.createSparkles(affirmationDisplay);
        });
    }
    
    // Add affirmation form functionality
    if (addForm) {
        addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newAffirmation = affirmationInput.value.trim();
            if (newAffirmation) {
                // Play success sound
                const successSound = new Audio('assets/audio/success.mp3');
                successSound.volume = 0.3;
                successSound.play();
                
                affirmations.push(newAffirmation);
                affirmationInput.value = '';
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'success-msg';
                successMsg.textContent = 'Affirmation added!';
                addForm.appendChild(successMsg);
                
                setTimeout(() => {
                    successMsg.remove();
                }, 2000);
            }
        });
    }
    
    function displayRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationDisplay.textContent = affirmations[randomIndex];
        
        // Add animation
        affirmationDisplay.classList.remove('fade-in-up');
        void affirmationDisplay.offsetWidth; // Trigger reflow
        affirmationDisplay.classList.add('fade-in-up');
    }
    
    // Initialize mirror effect
    initMirrorEffect();
});

function initMirrorEffect() {
    const mirror = document.querySelector('.mirror-effect');
    if (!mirror) return;
    
    const mirrorText = document.querySelector('.mirror-text');
    if (!mirrorText) return;
    
    // Update mirror text with affirmations
    const affirmations = [
        "You are beautiful",
        "You are loved",
        "You are enough",
        "You shine bright",
        "You matter"
    ];
    
    let currentIndex = 0;
    
    function updateMirrorText() {
        mirrorText.textContent = affirmations[currentIndex];
        currentIndex = (currentIndex + 1) % affirmations.length;
        
        // Add animation
        mirrorText.classList.remove('scale-in');
        void mirrorText.offsetWidth; // Trigger reflow
        mirrorText.classList.add('scale-in');
    }
    
    // Update initially
    updateMirrorText();
    
    // Update every 5 seconds
    setInterval(updateMirrorText, 5000);
}