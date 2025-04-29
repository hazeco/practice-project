// Remove the initial hide
// document.querySelector('.container').style.display = 'none';
// document.querySelector('.music').style.display = 'none';

// Simplify the window load event
window.addEventListener('load', function() {
    // Just show the container and music controls immediately
    const container = document.querySelector('.container');
    const music = document.querySelector('.music');
    
    container.style.display = 'block';
    music.style.display = 'flex';

    // Initialize game
    initializeGame();
});

function initializeGame() {
    // ตั้งค่าเสียงเริ่มต้น
    const mySong = document.getElementById("mySong");
    const icon = document.getElementById("icon");
    const volumeSlider = document.getElementById("volumeSlider");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");
    const gameOverSound = document.getElementById("gameOverSound");

    // ตั้งค่าสถานะเริ่มต้น
    let isAudioInitialized = false;

    // เริ่มต้นเสียงเมื่อผู้ใช้มีการโต้ตอบครั้งแรก
    function initializeAudio() {
        if (!isAudioInitialized) {
            mySong.volume = volumeSlider.value;
            correctSound.volume = volumeSlider.value;
            wrongSound.volume = volumeSlider.value;
            gameOverSound.volume = volumeSlider.value;
            isAudioInitialized = true;
        }
    }

    // ควบคุมการเล่น/หยุดเพลง
    icon.addEventListener("click", function() {
        initializeAudio();
        if (mySong.paused) {
            mySong.play().then(() => {
                icon.src = "/img/pause.png";
            }).catch(error => {
                console.error("การเล่นเพลงล้มเหลว:", error);
            });
        } else {
            mySong.pause();
            icon.src = "/img/play.png";
        }
    });

    // ควบคุมระดับเสียง
    volumeSlider.addEventListener("input", function() {
        const volume = parseFloat(this.value);
        [mySong, correctSound, wrongSound, gameOverSound].forEach(audio => {
            if (audio) audio.volume = volume;
        });
    });

    // เริ่มต้นการทำงานของเกม
    const input = document.querySelector(".input");
    const checkButton = document.querySelector(".check-word");

    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkButton.click();
            }
        });
    }

    // เริ่มเกม
    window.gameStarted = true;
    initGame();
}