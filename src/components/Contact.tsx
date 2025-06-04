"use client";

import { FormEvent } from "react";
import { useInView } from "@/utils/animations";

export default function Contact() {
  // Create refs for each animated section
  const headerRef = useInView();
  const subtitleRef = useInView();
  const infoRef = useInView();
  const formRef = useInView();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form elements
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const subjectInput = form.elements.namedItem('subject') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;
    
    if (!nameInput || !emailInput || !subjectInput || !messageInput) {
      alert('Form elements not found');
      return;
    }
    
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;
    
    // Simple form validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // For GitHub Pages, we'll use a mailto link as a fallback
    // In a real implementation, you would use a backend service or email API
    const mailtoLink = `mailto:alex@obodsoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open shortly.');
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div ref={headerRef.ref} className="animate-on-scroll">
            <h2>Contact Us</h2>
          </div>
          <div ref={subtitleRef.ref} className="animate-on-scroll">
            <p>Get in touch with our team</p>
          </div>
        </div>
        <div className="contact-content">
          <div ref={infoRef.ref} className="contact-info animate-on-scroll">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:alex@obodsoft.com">alex@obodsoft.com</a></p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>Silicon Valley, California</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div ref={formRef.ref} className="contact-form animate-on-scroll">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
