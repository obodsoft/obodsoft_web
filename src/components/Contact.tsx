"use client";

import { useEffect, useState } from "react";
import { contactContent, companyInfo } from "@/content/siteContent";
import TechElements from "./TechElements";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'company':
        return value.trim().length < 2 ? 'Company name must be at least 2 characters' : '';
      case 'projectType':
        return !value ? 'Please select a project type' : '';
      case 'timeline':
        return !value ? 'Please select a timeline' : '';
      case 'budget':
        return !value ? 'Please select a budget range' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClass = (fieldName: string): string => {
    if (errors[fieldName]) return 'error';
    if (formData[fieldName as keyof FormData] && !errors[fieldName]) return 'success';
    return '';
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>{contactContent.hero.title}</h2>
          <p>{contactContent.hero.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </p>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </p>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit Us</h3>
              <p>
                {companyInfo.address.street}<br />
                {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}<br />
                {companyInfo.address.country}
              </p>
            </div>

            <div className="response-commitment">
              <h3>{contactContent.response.title}</h3>
              <p>{contactContent.response.description}</p>
            </div>
          </div>

          <div className="contact-form animate-on-scroll">
            <h3>{contactContent.consultation.title}</h3>
            <p>{contactContent.consultation.description}</p>

            {submitStatus === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Thank you for your message! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                <i className="fas fa-exclamation-triangle"></i>
                <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={getFieldClass('name')}
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={getFieldClass('email')}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={getFieldClass('company')}
                  required
                />
                {errors.company && <span className="error-text">{errors.company}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={getFieldClass('projectType')}
                    required
                  >
                    <option value="">Project Type *</option>
                    <option value="web-application">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="cloud-solutions">Cloud & DevOps</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <span className="error-text">{errors.projectType}</span>}
              </div>
              <div className="form-group">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={getFieldClass('timeline')}
                    required
                  >
                    <option value="">Timeline *</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-12-months">6-12 Months</option>
                    <option value="12-months">12+ Months</option>
                  </select>
                  {errors.timeline && <span className="error-text">{errors.timeline}</span>}
                </div>
              </div>

              <div className="form-group">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={getFieldClass('budget')}
                  required
                >
                  <option value="">Budget Range *</option>
                  <option value="under-10k">Under $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k-plus">$100k+</option>
                </select>
                {errors.budget && <span className="error-text">{errors.budget}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project and goals... *"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={getFieldClass('message')}
                  required
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Start Partnership'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
