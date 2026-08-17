// ggit.ai - Premium Medical Interactive & Carousel Logic

// ==========================================================================
// 💰 Currency Price Engine
// ==========================================================================
const plans = {
    'US': { price: '$299', unit: '/month' },
    'UK': { price: '£249', unit: '/month' },
    'CH': { price: 'CHF 279', unit: '/month' }
};

function setCurrency(region, event) {
    // Toggle active classes on styling buttons
    const buttons = document.querySelectorAll('.currency-toggle button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    } else if (window.event && window.event.srcElement) {
        window.event.srcElement.classList.add('active');
    }
    
    // Smooth update of domestic pricing values
    const priceValue = document.getElementById('price-value');
    if (priceValue && plans[region]) {
        priceValue.innerHTML = `${plans[region].price}<span>${plans[region].unit}</span>`;
    }
}

// ==========================================================================
// 🔊 Simulated Call Audio Sample Player
// ==========================================================================
function playAudioDemo() {
    alert("📢 Sound sample simulation: 'Hi! Thank you for calling Dental Care Clinic. Let me check the schedule calendar... ' In production, this plays your Twilio/VAPI generated audio file.");
}

// ==========================================================================
// 📩 Asynchronous Backend Submission Handler
// ==========================================================================
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const responseBox = document.getElementById('formResponse');
        
        if (responseBox) {
            responseBox.className = "success-message";
            responseBox.style.color = "var(--medical-teal)";
            responseBox.style.marginTop = "1rem";
            responseBox.innerText = "Processing your request... 🕒";
            responseBox.classList.remove('hidden');
        }
        
        try {
            // First attempt to submit to our FastAPI backend
            const response = await fetch('/submit-lead', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.status === 'success') {
                if (responseBox) {
                    responseBox.innerText = result.message;
                    responseBox.style.color = "#10b981"; // Healthy green
                }
                this.reset();
            } else {
                throw new Error("Local backend submission failed");
            }
        } catch (error) {
            console.warn("FastAPI submission direct handling fallback: sending via Formspree", error);
            
            // Fallback submission to Formspree if local endpoint is not processing it fully
            try {
                const formspreeAction = this.getAttribute('action') || 'https://formspree.io/f/maqgleny';
                const response = await fetch(formspreeAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    if (responseBox) {
                        responseBox.innerText = "Demo booked! Our team will contact you shortly.";
                        responseBox.style.color = "#10b981";
                    }
                    this.reset();
                } else {
                    if (responseBox) {
                        responseBox.innerText = "There was an issue submitting. Please call us live! 📞";
                        responseBox.style.color = "#ef4444";
                    }
                }
            } catch (formspreeErr) {
                if (responseBox) {
                    responseBox.innerText = "Submission error. Please try again or call +1 (803) 982-3119.";
                    responseBox.style.color = "#ef4444";
                }
            }
        }
    });
}

// ==========================================================================
// 🖼️ Interactive Image Carousel Logic
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return; // Prevent errors on pages without carousel
    
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button--right');
    const prevButton = document.querySelector('.carousel-button--left');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = dotsNav ? Array.from(dotsNav.children) : [];
    
    // Arrange slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = 100 * index + '%';
    };
    slides.forEach(setSlidePosition);
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };
    
    const updateDots = (currentDot, targetDot) => {
        if (!currentDot || !targetDot) return;
        currentDot.classList.remove('current-indicator');
        targetDot.classList.add('current-indicator');
    };
    
    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (!prevButton || !nextButton) return;
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    };
    
    // When I click left, move slides to the left
    if (prevButton) {
        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide ? currentSlide.previousElementSibling : null;
            const currentDot = dotsNav ? dotsNav.querySelector('.current-indicator') : null;
            const prevDot = currentDot ? currentDot.previousElementSibling : null;
            
            if (currentSlide && prevSlide) {
                const prevIndex = slides.indexOf(prevSlide);
                moveToSlide(track, currentSlide, prevSlide);
                updateDots(currentDot, prevDot);
                hideShowArrows(slides, prevButton, nextButton, prevIndex);
            }
        });
    }
    
    // When I click right, move slides to the right
    if (nextButton) {
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide ? currentSlide.nextElementSibling : null;
            const currentDot = dotsNav ? dotsNav.querySelector('.current-indicator') : null;
            const nextDot = currentDot ? currentDot.nextElementSibling : null;
            
            if (currentSlide && nextSlide) {
                const nextIndex = slides.indexOf(nextSlide);
                moveToSlide(track, currentSlide, nextSlide);
                updateDots(currentDot, nextDot);
                hideShowArrows(slides, prevButton, nextButton, nextIndex);
            }
        });
    }
    
    // When I click the indicators, move to that slide
    if (dotsNav) {
        dotsNav.addEventListener('click', e => {
            const targetDot = e.target.closest('button');
            if (!targetDot) return;
            
            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-indicator');
            const targetIndex = dots.indexOf(targetDot);
            const targetSlide = slides[targetIndex];
            
            if (currentSlide && targetSlide) {
                moveToSlide(track, currentSlide, targetSlide);
                updateDots(currentDot, targetDot);
                hideShowArrows(slides, prevButton, nextButton, targetIndex);
            }
        });
    }
    
    // Helper function for auto-slide interval action
    const autoSlideAction = () => {
        const currentSlide = track.querySelector('.current-slide');
        if (!currentSlide) return;
        
        let nextSlide = currentSlide.nextElementSibling;
        let currentDot = dotsNav ? dotsNav.querySelector('.current-indicator') : null;
        let nextDot = currentDot ? currentDot.nextElementSibling : null;
        let nextIndex = nextSlide ? slides.indexOf(nextSlide) : 0;
        
        if (!nextSlide) {
            // Loop back to start
            nextSlide = slides[0];
            nextDot = dots[0] || null;
            nextIndex = 0;
        }
        
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    };
    
    // Auto-slide functionality (every 5 seconds)
    let autoSlideInterval = setInterval(autoSlideAction, 5000);
    
    // Pause auto-sliding on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(autoSlideAction, 5000);
        });
    }

    // ==========================================================================
    // 🧮 Dynamic Lost Revenue Calculator
    // ==========================================================================
    const missedCallsInput = document.getElementById('missedCallsInput');
    const lostPatientsDisplay = document.getElementById('lostPatientsDisplay');
    const lostRevenueDisplay = document.getElementById('lostRevenueDisplay');
    
    if (missedCallsInput) {
        const calculateRevenueLoss = () => {
            const missedCalls = parseFloat(missedCallsInput.value) || 0;
            const bookingRate = 0.20; // 20% estimated booking rate for missed calls
            const averageValue = 500;  // Average patient value $500
            
            const lostPatients = Math.round(missedCalls * bookingRate);
            const lostRevenue = lostPatients * averageValue;
            
            if (lostPatientsDisplay) {
                lostPatientsDisplay.innerText = lostPatients.toLocaleString();
            }
            if (lostRevenueDisplay) {
                lostRevenueDisplay.innerText = '$' + lostRevenue.toLocaleString();
            }
        };
        
        missedCallsInput.addEventListener('input', calculateRevenueLoss);
        calculateRevenueLoss(); // Initial call
    }

    // ==========================================================================
    // 🎬 Hero Background Carousel Rotation
    // ==========================================================================
    const bgSlides = document.querySelectorAll('.hero-bg-slide');
    if (bgSlides.length > 0) {
        let currentBgIdx = 0;
        setInterval(() => {
            bgSlides[currentBgIdx].classList.remove('active');
            currentBgIdx = (currentBgIdx + 1) % bgSlides.length;
            bgSlides[currentBgIdx].classList.add('active');
        }, 5000);
    }
});
