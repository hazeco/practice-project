document.addEventListener('DOMContentLoaded', () => {
    // Game elements (องค์ประกอบของเกม)
    const scrambledWordElement = document.getElementById('scrambledWord');
    const backBtn = document.getElementById('backBtn');
    const hintElement = document.getElementById('hint');
    const timerElement = document.getElementById('timer');
    const userGuessInput = document.getElementById('userGuess');
    const checkBtn = document.getElementById('checkBtn');
    const skipBtn = document.getElementById('skipBtn');

    // Game variables (ตัวแปรของเกม)
    let gameWords = [];
    let currentWord = '';
    let scrambledWord = '';
    let availableWords = [];
    let timer;
    let usedWords = [];
    let totalAnsweredWords = 0;
    let timeLeft = 30;
    let gameActive = true;


    // Initialize game (เริ่มต้นเกม)
    function initGame() {
        // Reset game variables (รีเซ็ตตัวแปรของเกม)
        gameActive = true;
        usedWords = [];
        totalAnsweredWords = 0;
        timeLeft = 30;

        // Reset UI (รีเซ็ต UI)
        timerElement.textContent = '30';

        // Select random words for the game (เลือกคำแบบสุ่มสำหรับเกม)
        selectGameWords();

        // Start the first word (เริ่มคำแรก)
        nextWord();
    }

    // Select random words for the game (เลือกคำแบบสุ่มสำหรับเกม)
    function selectGameWords() {
        // Shuffle the word list (สลับลำดับรายการคำ)
        const shuffledWords = [...wordList].sort(() => Math.random() - 0.5);

        // Use all words from word.js (ใช้ทุกคำจาก word.js)
        gameWords = shuffledWords;

        // Initialize available words (เริ่มต้นคำที่ใช้ได้)
        availableWords = [...gameWords];
    }

    // Generate the next word (สร้างคำถัดไป)
    function nextWord() {
        if (!gameActive) return;

        // If there are no more words, reshuffle and continue (ถ้าไม่มีคำเหลือ ให้สลับคำใหม่แล้วไปต่อ)
         if (availableWords.length === 0) {
            availableWords = [...gameWords].filter(wordObj => !usedWords.some(usedObj => usedObj.word === wordObj.word)); // Filter out already used words.
             usedWords = [];
            if(availableWords.length === 0){
                availableWords = [...gameWords];
            }
            availableWords.sort(() => Math.random() - 0.5);
        }

        // Select a random word from available words (เลือกคำแบบสุ่มจากคำที่ใช้ได้)
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const wordData = availableWords[randomIndex];

        currentWord = wordData.word;
        scrambledWord = scrambleWord(currentWord);

        // Update UI (อัปเดต UI)
        displayScrambledWord(scrambledWord);
        hintElement.textContent = wordData.hint;

        // Reset timer (รีเซ็ตตัวจับเวลา)
        resetTimer();

        // Clear input (เคลียร์ช่อง input)
        userGuessInput.value = '';
        userGuessInput.focus();
    }

    // Scramble the word (เรียงสลับตัวอักษรของคำ)
    function scrambleWord(word) {
        const wordArray = word.split('');
        let scrambled = wordArray.sort(() => Math.random() - 0.5).join('');

        // If the scrambled word is the same as the original word, scramble again (หากคำที่เรียงสลับเหมือนกับคำเดิม ให้สลับอีกครั้ง)
        return scrambled === word ? scrambleWord(word) : scrambled;
    }

    // Display the scrambled word (แสดงคำที่เรียงสลับ)
    function displayScrambledWord(word) {
        scrambledWordElement.innerHTML = '';

        word.split('').forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.className = 'letter';
            letterElement.textContent = letter;
            scrambledWordElement.appendChild(letterElement);
        });
    }

    // Reset the timer (รีเซ็ตตัวจับเวลา)
    function resetTimer() {
        clearInterval(timer);
        timeLeft = 30;
        timerElement.textContent = timeLeft;

        // Start countdown (เริ่มนับถอยหลัง)
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeOut();
            }
        }, 1000);
    }

    // Time out function (ฟังก์ชันหมดเวลา)
    function timeOut() {
        if (!gameActive) return;

        Swal.fire({
            icon: 'warning',
            title: 'หมดเวลา!',
            text: 'คุณหมดเวลาแล้ว!',
            timer: 5000,
            showConfirmButton: false
        }).then(() => {
            // Move current word to used words (ย้ายคำปัจจุบันไปคำที่ใช้แล้ว)
            moveWordToUsed();

            // Increment total answered words (เพิ่มจำนวนคำที่ตอบแล้ว)
            totalAnsweredWords++;

            // Go to next word (ไปคำถัดไป)
            nextWord();
        });
    }

    // Move current word to used words (ย้ายคำปัจจุบันไปคำที่ใช้แล้ว)
    function moveWordToUsed() {
        const wordIndex = availableWords.findIndex(item => item.word === currentWord);
        if (wordIndex !== -1) {
            usedWords.push(availableWords[wordIndex]);
            availableWords.splice(wordIndex, 1);
        }
    }

    // Check the user's guess (ตรวจสอบคำตอบของผู้ใช้)
    function checkAnswer() {
        if (!gameActive) return;

        const userGuess = userGuessInput.value.trim().toUpperCase();

        // If input is empty, do nothing (หากช่อง input ว่างเปล่า ไม่ทำอะไร)
        if (userGuess === '') return;

        // Check if the answer is correct (ตรวจสอบว่าคำตอบถูกต้องไหม)
        if (userGuess === currentWord) {
            // Show success alert (แสดงการแจ้งเตือนสำเร็จ)
            Swal.fire({
                icon: 'success',
                title: 'ถูกต้อง!',
                text: 'เยี่ยมมาก!',
                timer: 5000,
                showConfirmButton: false
            }).then(() => {
                // Move current word to used words (ย้ายคำปัจจุบันไปคำที่ใช้แล้ว)
                
                moveWordToUsed();

                // Increment total answered words (เพิ่มจำนวนคำที่ตอบแล้ว)
                totalAnsweredWords++;

                // Go to next word (ไปคำถัดไป)
                nextWord();
            });
        } else {
            // Wrong answer (คำตอบผิด)
            Swal.fire({
                icon: 'error',
                title: 'ผิด!',
                text: `คำที่ถูกต้องคือ: ${currentWord}`,
                timer: 5000,
                showConfirmButton: false
            }).then(() => {
                // Move current word to used words (ย้ายคำปัจจุบันไปคำที่ใช้แล้ว)
                moveWordToUsed();

                // Increment total answered words (เพิ่มจำนวนคำที่ตอบแล้ว)
                totalAnsweredWords++;

                // Go to next word (ไปคำถัดไป)
                nextWord();
            });
        }
    }

    // Skip the current word (ข้ามคำปัจจุบัน)
    function skipWord() {
        if (!gameActive) return;

        // If there's only one word left, don't allow skipping (ถ้าเหลือคำเดียว ห้ามข้าม)
          if (availableWords.length <= 1) {
            return;
        }

        // Go to next word (ไปคำถัดไป)
        nextWord();
    }

    // Event listeners (ตัวดักจับเหตุการณ์)
    checkBtn.addEventListener('click', checkAnswer);

    skipBtn.addEventListener('click', skipWord);

    backBtn.addEventListener('click', () => {
        // In a real app, this would navigate back to the menu (ในแอปจริง นี่จะนำทางกลับไปยังเมนู)
        clearInterval(timer);
        gameActive = false;
        // For now, just reload the page (ตอนนี้ แค่โหลดหน้าซ้ำ)
        location.reload();
    });

    // Allow Enter key to submit guess (อนุญาตให้กด Enter เพื่อส่งคำตอบ)
    userGuessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    // Start the game when page loads (เริ่มเกมเมื่อโหลดหน้าเสร็จ)
    initGame();
});
