// Currency Price Engine
const plans = {
    'US': { price: '$299', unit: '/month' },
    'UK': { price: '£249', unit: '/month' },
    'CH': { price: '₣279', unit: '/month' }
};

function setCurrency(region) {
    // Toggle active classes on styling buttons
    const buttons = document.querySelectorAll('.currency-toggle button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    // Smooth update of domestic pricing values
    const priceValue = document.getElementById('price-value');
    priceValue.innerHTML = `${plans[region].price}<span>${plans[region].unit}</span>`;
}

// Simulated Call Audio Sample Player
function playAudioDemo() {
    alert("📢 Sound sample simulation: 'Hi! Thank you for calling Dental Care Clinic. Let me check the schedule calendar... ' In production, this plays your Twilio/VAPI generated audio file.");
}

// Asynchronous Backend Submission Handler
document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseBox = document.getElementById('formResponse');
    
    try {
        const response = await fetch('/submit-lead', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if(result.status === 'success') {
            responseBox.className = "success-message";
            responseBox.style.color = "#38bdf8";
            responseBox.style.marginTop = "1rem";
            responseBox.innerText = result.message;
            this.reset();
        }
    } catch (error) {
        console.error("Submission failed", error);
    }
});
