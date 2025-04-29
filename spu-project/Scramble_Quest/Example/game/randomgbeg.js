document.addEventListener('DOMContentLoaded', () => {
    // Game elements (องค์ประกอบของเกม)
    const scrambledWordElement = document.getElementById('scrambledWord');
    const hintElement = document.getElementById('hint');
    const timerElement = document.getElementById('timer');
    const userGuessInput = document.getElementById('userGuess');
    const checkBtn = document.getElementById('checkBtn');
    const skipBtn = document.getElementById('skipBtn');
    const backBtn = document.getElementById('backBtn');
    const streakCountElement = document.getElementById('streakCount');
    const wordCountElement = document.getElementById('wordCount');
    const hearts = document.querySelectorAll('.heart');
    
    // Results elements (องค์ประกอบของผลลัพธ์)
    const resultsContainer = document.getElementById('resultsContainer');
    const finalScoreElement = document.getElementById('finalScore');
    const highestStreakElement = document.getElementById('highestStreak');
    const heartsRemainingElement = document.getElementById('heartsRemaining');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const backToMenuBtn = document.getElementById('backToMenuBtn');

    // Game variables (ตัวแปรของเกม)
    let gameWords = [];
    let currentWord = '';
    let scrambledWord = '';
    let availableWords = [];
    let usedWords = [];
    let timer;
    let timeLeft = 30;
    let heartCount = 3;
    let correctCount = 0;
    let currentStreak = 0;
    let highestStreak = 0;
    let gameActive = true;
    let totalWords = wordList.length; // Set totalWords to the actual number of words in word.js (กำหนด totalWords เป็นจำนวนคำจริงใน word.js)
    let totalAnsweredWords = 0;

    // Initialize game (เริ่มต้นเกม)
    function initGame() {
        // Reset game variables (รีเซ็ตตัวแปรของเกม)
        gameActive = true;
        heartCount = 3;
        correctCount = 0;
        currentStreak = 0;
        highestStreak = 0;
        timeLeft = 30;
        usedWords = [];
        totalAnsweredWords = 0;
        
        // Reset UI (รีเซ็ต UI)
        updateHearts();
        streakCountElement.textContent = '0';
        wordCountElement.textContent = `0/${totalWords}`;
        timerElement.textContent = '30';
        
        // Hide results container (ซ่อน container ผลลัพธ์)
        resultsContainer.style.display = 'none';
        
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
        
        // If there are no more words, end the game (หากไม่มีคำเหลือแล้ว จบเกม)
        if (availableWords.length === 0 || totalAnsweredWords >= totalWords) {
            endGame(true);
            return;
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
        
        // Decrease heart count (ลดจำนวนหัวใจ)
        heartCount--;
        updateHearts();
        
        // Reset streak (รีเซ็ต streak)
        currentStreak = 0;
        streakCountElement.textContent = currentStreak;
        
        // Show timeout alert (แสดงการแจ้งเตือนหมดเวลา)
        Swal.fire({
            icon: 'คำเติอน',
            title: 'หมดเวลา!',
            text: 'คุณหมดเวลาแล้ว!',
            timer: 5000,
            showConfirmButton: false
        }).then(() => {
            // Move current word to used words (ย้ายคำปัจจุบันไปคำที่ใช้แล้ว)
            moveWordToUsed();
            
            // Increment total answered words (เพิ่มจำนวนคำที่ตอบแล้ว)
            totalAnsweredWords++;
            
            // Check if game should end (no hearts left) (ตรวจสอบว่าควรจบเกมไหม (ไม่มีหัวใจเหลือแล้ว))
            if (heartCount <= 0) {
                endGame(false);
                return;
            }
            
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
            // Correct answer (คำตอบถูกต้อง)
            correctCount++;
            wordCountElement.textContent = `${correctCount}/${totalWords}`;
            
            // Increment streak (เพิ่ม streak)
            currentStreak++;
            streakCountElement.textContent = currentStreak;
            
            // Update highest streak (อัปเดต streak สูงสุด)
            if (currentStreak > highestStreak) {
                highestStreak = currentStreak;
            }
            
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
            heartCount--;
            updateHearts();
            
            // Reset streak (รีเซ็ต streak)
            currentStreak = 0;
            streakCountElement.textContent = currentStreak;
            
            // Show error alert (แสดงการแจ้งเตือนข้อผิดพลาด)
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
                
                // Check if game should end (no hearts left) (ตรวจสอบว่าควรจบเกมไหม (ไม่มีหัวใจเหลือแล้ว))
                if (heartCount <= 0) {
                    endGame(false);
                    return;
                }
                
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
        
        // Reset streak (รีเซ็ต streak)
        currentStreak = 0;
        streakCountElement.textContent = currentStreak;
        
        // Move current word back to available words (at the end) (ย้ายคำปัจจุบันกลับไปที่คำที่ใช้ได้ (ไว้ท้ายสุด))
        // We don't move it to used words because we want it to potentially appear again (เราไม่ย้ายไปที่คำที่ใช้แล้วเพราะเราต้องการให้มันมีโอกาสปรากฏอีกครั้ง)
        
        // Go to next word (ไปคำถัดไป)
        nextWord();
    }

    // Update hearts display (อัปเดตการแสดงหัวใจ)
    function updateHearts() {
        hearts.forEach((heart, index) => {
            if (index < heartCount) {
                heart.textContent = '❤️';
            } else {
                heart.textContent = '🖤';
            }
        });
    }

    // End the game (จบเกม)
    function endGame(completed) {
        if (!gameActive) return;
        
        gameActive = false;
        clearInterval(timer);
        
        // If the game ended because the player lost all hearts (ถ้าจบเกมเพราะผู้เล่นเสียหัวใจหมด)
        if (!completed && heartCount <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'จบเกม!',
                text: 'หัวใจของคุณหมดแล้ว!',
                timer: 5000,
                showConfirmButton: false
            }).then(() => {
                showResults();
            });
        } else {
            showResults();
        }
    }

    // Show game results (แสดงผลลัพธ์ของเกม)
    function showResults() {
        finalScoreElement.textContent = `${correctCount}/${totalWords}`;
        highestStreakElement.textContent = highestStreak;
        heartsRemainingElement.textContent = heartCount;
        
        resultsContainer.style.display = 'flex';
    }

    // Event listeners (ตัวดักจับเหตุการณ์)
    checkBtn.addEventListener('click', checkAnswer);
    
    skipBtn.addEventListener('click', skipWord);
    
    playAgainBtn.addEventListener('click', initGame);
    
    backToMenuBtn.addEventListener('click', () => {
        // In a real app, this would navigate back to the menu (ในแอปจริง นี่จะนำทางกลับไปยังเมนู)
        // For now, just reload the page (ตอนนี้ แค่โหลดหน้าซ้ำ)
        location.reload();
    });
    
    backBtn.addEventListener('click', () => {
        // In a real app, this would navigate back to the menu (ในแอปจริง นี่จะนำทางกลับไปยังเมนู)
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
