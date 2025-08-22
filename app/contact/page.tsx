"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-light text-black tracking-wide">
          Get In Touch
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate and bring your creative vision to life. 
          I'd love to hear about your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light text-black">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-light text-black mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <a 
                    href="mailto:hello@nishadroch.com" 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    hello@nishadroch.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-black">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-black">Location</h3>
                  <p className="text-gray-600">
                    New York, NY<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-light text-black mb-4">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always excited to connect with fellow creatives and potential clients.
            </p>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-12 border-t border-gray-200">
        <h3 className="text-xl font-light text-black mb-4">Ready to Start Your Project?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can work together to create something amazing. 
          Every great project starts with a conversation.
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}