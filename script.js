/* ==========================================================================
   KENTERTON SHOPPING CENTER - JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }

    // 2. Sticky Header Scroll Effect
    const mainHeader = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // 3. Tab and Filter Logic for Deals Grid
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dealCards = document.querySelectorAll('.deal-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            dealCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Reset card transition state before hiding/showing
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // 4. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            // Toggle active class on item
            faqItem.classList.toggle('active');

            if (faqItem.classList.contains('active')) {
                // Set max-height to scrollHeight to animate opening
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            } else {
                // Set max-height to 0 to close
                faqAnswer.style.maxHeight = '0px';
            }

            // Close other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = '0px';
                }
            });
        });
    });

    // 5. WhatsApp Live Chat Simulator in Phone Mockup
    const chatBody = document.querySelector('.whatsapp-chat-body');
    const typingIndicator = document.getElementById('chatTyping');

    if (chatBody && typingIndicator) {
        // Simulate a new incoming message from "Kenterton Hub" after 4 seconds
        setTimeout(() => {
            // Hide typing indicator
            typingIndicator.style.display = 'none';

            // Create new message element
            const newMsg = document.createElement('div');
            newMsg.className = 'chat-msg chat-msg-received';
            
            // Current Time formatted
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            newMsg.innerHTML = `
                <p>Perfect! We have scheduled your delivery. Let us know if you need anything else from the Hardware or Pharmacy. Ngiyabonga! 🙏</p>
                <span class="chat-time">${timeStr}</span>
            `;

            // Append message
            chatBody.appendChild(newMsg);

            // Scroll mockup screen to bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 4000);
    }
});
