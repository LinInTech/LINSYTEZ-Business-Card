  // Business Card Flip Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const businessCard = document.querySelector('.business-card');
            const flipInstruction = document.querySelector('.flip-instruction');
            
            // Add click event listener for flip functionality
            businessCard.addEventListener('click', function() {
                this.classList.toggle('flipped');
                
                // Update instruction text based on card state
                if (this.classList.contains('flipped')) {
                    flipInstruction.textContent = 'Click to flip back';
                } else {
                    flipInstruction.textContent = 'Click to flip';
                }
            });
            
            // Optional: Add keyboard accessibility (space or enter key)
            businessCard.addEventListener('keydown', function(event) {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.click();
                }
            });
            
            // Make the card focusable for keyboard navigation
            businessCard.setAttribute('tabindex', '0');
            businessCard.setAttribute('role', 'button');
            businessCard.setAttribute('aria-label', 'Flip business card to see QR code');
            
            // Optional: Add smooth scroll to center card when clicked on mobile
            businessCard.addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    setTimeout(() => {
                        this.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }, 100);
                }
            });
        });