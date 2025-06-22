document.addEventListener('DOMContentLoaded', function() {
    const emotions = [
        {
            id: 'sadness',
            icon: '😔',
            title: "When you're sad",
            subtitle: "for the days when you cry and feel down",
            author: "Tapsya",
            letter: `Hi Viya I suppose you’ve found this when you’re upset or feeling low. I don’t know what is weighing on your heart right now, but I just wanted to remind you of something really important, you don’t have to carry it all alone. Even on days when everything feels heavier than usual, I hope you know that you’re surrounded by people who love you deeply. I hope you know I’m one of them.
You are not a burden. Your feelings are valid. And even when the world feels a little dim, you are still a light. Sometimes, even the brightest stars hide behind clouds, but that never means they’ve stopped shining. You’re still glowing even if you can’t see it right now.
Take your time. Breathe. Rest. Cry if you need to. Laugh if you can. And remember, we’ll always be here with hugs, with love, with snacks, or just to sit beside you in silence.
You matter. You’re loved. And you’ve got this, even if today it doesn’t feel like it. Better days are coming, and I’ll be right here when they do.
YOU’VE GOT THIS!!!!!!! 🙌🏻🙌🏻🙌🏻
Lots and lots of love 
🫶🏻✨💕🙌🏻
Tapsya`,
            audio: "assets/audio/tapasya.mp3"
        },
        {
            id: 'lonely',
            icon: '🤍',
            title: "When you feel lonely",
            subtitle: "for when you feel left out, invisible, or not enough",
            author: "Aishwarya",
            letter: `if you’re reading this right now, i want you to know one thing first: you are NEVER alone. even on the days when the world feels heavy, and it seems like no one sees you or gets you, please remember that I SEE YOU. i see your beautiful heart, your kindness, your strength, and every little thing that makes you you.

it’s okay to feel lonely sometimes. it’s okay to feel like you don’t belong. those feelings don’t define you, and they don’t change how deeply loved you are. you matter SO much more than you even realize. and even if it feels quiet around you, my love for you is loud and steady and i hope it makes up for all the moments you felt lonely.

pls text me anytime you want, and even if i don’t respond right away, my love will always be with you. i’m here for you always. in every smile, every tear, every moment in between. never NEVER hesitate to contact me if you ever feel lonely, even if i am not the best at consoling others, i will definitely understand u, because i know what it's like to feel this way.

so breathe, take your time, and REMEMBER, you are never ever alone. i’m just a thought away, sending you the biggest hug wrapped in all my love ♡ and I LOVE U WAY MORE OKAY

forever yours,
aish`,
            audio: "assets/audio/aishwarya.mp3"
        },
        {
            id: 'fear',
            icon: '😨',
            title: "When you're afraid",
            subtitle: "for the nights when everything feels uncertain and shaky",
            author: "Nishka",
            letter: `Dear Viyaa,

I know you’re feeling scared right now, and that’s okay. Being afraid doesn’t make you weak—it just means something matters deeply to you. And that’s a beautiful thing.

But I want you to remember one very important thing: YOU ARE NOT ALONE.I’m right here with you.. just msg me or call me anytime ok.. not just me all of us are here for you. I know how strong and brave my baby is.. You’ve faced so much already with a smile, and I believe in you with all my heart.

Whenever fear tries to whisper lies in your ear, shut it out with the truth: you are capable, loved, and more important always remember you have a lot of support around you ... So don't ever think that they we may tink ur weak or anything just be approach us anytime ok.. and by us we don't just mean us anyone you are comfortable with. And even if things seem dark for a moment, the light always finds its way back—you just have to hold on a little longer and don't worry with us on ur side we'll make sure it won't be that hard.🙃

Take a deep breath. Feel your heartbeat. That’s your courage, beating steady and strong.

And if the fear feels too big, remember you’ve got your “mom” here to hold your hand through it. Always. 😘🥰♥️

Love you lots,
Nishka (your always-proud mama 🌼)`,
            audio: "assets/audio/nishka.mp3"
        },
        {
            id: 'envy',
            icon: '💚',
            title: "When you feel envy",
            subtitle: "for when you compare, and forget your own light",
            author: "Laxmi",
            letter: `🌿 If ur ever feeling envious...
first of all is okay. You're human. But bro don’t ever let someone else’s achievement or wtever make you forget how you shine or how unique u r on your own ✨
u hv your own thing ur voice(angeliccc it is),  your charcterr the way you make ppl feel not left out. Like girll… ur the moment, trust me. Just because some1 else is doing something amazing doesnt mean ur behind  ur just on ur own  little pace hehe
so if envy hits, take a breath, play a favv TWICE song, dance it out  maybe even sing like you always do, and remind urself how far u hv come. No one else has your story bro . Use it as inspo, not comparison. uve got this. Always. 💗 we r with uu alwaysss 🥰🥰`,
            audio: "assets/audio/laxmi.mp3"
        },
        {
            id: 'disappointment',
            icon: '😞',
            title: "When you're disappointed",
            subtitle: "for the moments when plans fall apart and your chest sinks",
            author: "Shania",
            letter: `My dear,
            
            Disappointment is the gap between expectation and reality, but remember - some of life's best moments come from unexpected detours. What feels like an ending might be a new beginning in disguise.
            
            It's okay to grieve what you hoped for. Be sad. Be angry. Then, when you're ready, lift your head and look around - there might be beauty you hadn't noticed before.
            
            For disappointed days:
            • Let yourself feel it fully, then let it go
            • Look at our "Memories" - see how things worked out?
            • Make a list of things that DID go right
            • Listen to my silly voice message to make you smile
            
            This isn't the end of your story, just a plot twist. And plot twists make the best tales.
            
            With hope,
            Shania`,
            audio: "assets/audio/shania.mp3"
        },
        {
            id: 'anger',
            icon: '💢',
            title: "When you're angry",
            subtitle: "for when the world doesn't treat you right and your heart is on fire",
            author: "Vernika",
            letter: `Fireheart,
            
            Your anger is valid. It's a signal that something isn't right, that a boundary was crossed. Don't let anyone tell you to shrink your fire - but let's channel it wisely.
            
            You have every right to feel what you feel. Now, let's use that energy productively. What needs to change? How can we make it right? Your anger can be the fuel for transformation.
            
            When the fire burns hot:
            • Scream into a pillow or dance it out
            • Write an angry letter (then tear it up)
            • Punch a pillow or go for a run
            • Listen to my empowering playlist below
            
            Your fire is part of what makes you amazing. The world needs women who care enough to get angry - just don't let it burn you up inside.
            
            In solidarity,
            Vernika`,
            audio: "assets/audio/vernika.mp3"
        },
        {
            id: 'insecure',
            icon: '☹️',
            title: "When you're insecure",
            subtitle: "for when you feel too small",
            author: "Fathima",
            letter: `Viya, you jaw droppingly gorgeous human being whom we all love and cherish so much. You are absolutely amazing, your skin is always glowing like it’s a reflection of the inner you, your light that attracts us all to it like moths to a flame. You’ve probably heard this so many times before but for a reason- you have the voice of an angel baddie and look like one too and I wholeheartedly believe one day you’ll one of the idols we look up to. And your face- oh my gosh, saurrrrr pretty, so lovely it looks like Aphrodite herself birthed you. Like girl I’d wife you up in a heartbeat. Your outfits ALWAYS eat no matter the occasion (let me steal your wardrobe pls). Like, hello, please teach me your ways, my queen. And you are more than enough, anyone who says otherwise is definitely getting dropkicked by me and biting the curb- I don’t make the rules, oops. You deserve all the happiness in the world and more.`,
            audio: "assets/audio/vernika.mp3"
        },
    ];

    const container = document.querySelector('.emotion-buttons');
    if (!container) return;
    
    emotions.forEach(emotion => {
        const button = document.createElement('button');
        button.className = 'emotion-btn pulse';
        button.dataset.emotion = emotion.id;
        
        button.innerHTML = `
            <span class="emotion-icon">${emotion.icon}</span>
            <div class="emotion-text">
                <span class="emotion-title">${emotion.title}</span>
                <span class="emotion-subtitle">${emotion.subtitle}</span>
            </div>
        `;
        
        button.addEventListener('click', () => showLetter(emotion));
        container.appendChild(button);
    });
});

function showLetter(emotion) {
    const display = document.getElementById('letterDisplay');
    if (!display) return;
    
    // Play click sound
    const clickSound = new Audio('assets/audio/click.mp3');
    clickSound.volume = 0.3;
    clickSound.play();
    
    display.innerHTML = `
        <div class="letter-envelope">
            <div class="envelope-flap"></div>
            <div class="envelope-body"></div>
        </div>
        <div class="letter-content letter-appear">
            <div class="letter-header">
                <h3>For ${emotion.title}</h3>
                <p class="letter-author">A letter from ${emotion.author}</p>
            </div>
            <div class="letter-text">
                ${emotion.letter.replace(/\n/g, '<br>')}
            </div>
            ${emotion.audio ? `
            <div class="audio-controls">
                <button class="play-voice-btn" onclick="playVoiceNote('${emotion.audio}')">
                    <i class="fas fa-play"></i> Listen to ${emotion.author}'s voice
                </button>
                <audio id="voiceNote" src="${emotion.audio}"></audio>
            </div>
            ` : ''}
        </div>
    `;
    
    // Play envelope opening sound
    const paperSound = new Audio('assets/audio/paper.mp3');
    paperSound.volume = 0.3;
    paperSound.play();
    
    // Animate envelope opening
    const envelope = document.querySelector('.letter-envelope');
    setTimeout(() => {
        envelope.classList.add('envelope-open');
    }, 300);
    
    // Create sparkles
    window.utils.createSparkles(display);
}

// Play voice note
function playVoiceNote(audioSrc) {
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