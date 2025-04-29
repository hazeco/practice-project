document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    
    // Clear form
    this.reset();
    
    // Show beautiful success message with SweetAlert2
    Swal.fire({
        title: 'ส่งข้อความสำเร็จ!',
        text: 'ขอบคุณสำหรับข้อความ เราจะรีบติดต่อคุณให้เร็วที่สุด',
        icon: 'success',
        iconColor: '#8764fb',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#8764fb',
        timer: 5000,
        timerProgressBar: false
    });
});

// Add animation for form inputs
document.querySelectorAll('.form-group input, .form-group textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    element.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});
const loader = document.querySelector(".loader");
const preloader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none"
    loader.style.display = "none"
})