//Single Click
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.querySelector('.forgot-password');

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();  
        this.style.color = '#ff69b4'; 
        setTimeout(() => {
            this.style.color = 'purple'; 
        },2000) ;
        
        alert("Password reset instructions will be sent to your email.");
    });
});


//Doubleclick
document.getElementById('fashionTitle').addEventListener('dblclick', function() {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 500);
});

//Hover Effect On Login Button
const fashionCollage = document.querySelector('.fashion-collage');

fashionCollage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '#96AE8D ';
});

fashionCollage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
});

function showResetForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resetForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('resetForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function resetPassword() {
    let email = document.getElementById('resetEmail').value;
    if(email) {
        alert('A password reset link has been sent to ' + email);
        showLoginForm();
    } else {
        alert('Please enter a valid email address.');}
    }


    document.addEventListener("DOMContentLoaded", function() {
        const loginForm = document.getElementById("loginForm");
        const resetForm = document.getElementById("resetForm");
        const registerForm = document.getElementById("registerForm");
    
        window.showResetForm = function() {
            loginForm.style.display = "none";
            registerForm.style.display = "none";
            resetForm.style.display = "block";
        };
    
        window.showLoginForm = function() {
            loginForm.style.display = "block";
            resetForm.style.display = "none";
            registerForm.style.display = "none";
        };
    
        window.showRegisterForm = function() {
            loginForm.style.display = "none";
            resetForm.style.display = "none";
            registerForm.style.display = "block";
        };
    
        window.login = function() {
            alert("Login function triggered!");
        };
    
        window.resetPassword = function() {
            alert("Reset password function triggered!");
        };
    
        window.register = function() {
            alert("Register function triggered!");
        };
    
        window.sendOTP = function() {
            alert("OTP sent to your email!");
        };
    });
    