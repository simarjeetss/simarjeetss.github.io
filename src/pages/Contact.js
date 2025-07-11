import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just log it and show an alert
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="mt-15">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-8">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-text">Get in Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                interesting projects, or just want to say hello!
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-text">Email</h4>
                  <a href="mailto:simarjeetss529@gmail.com" className="text-accent font-medium hover:text-accent-hover">simarjeetss529@gmail.com</a>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-text">Location</h4>
                  <p className="text-text-secondary">Washington State, USA</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium text-text text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded bg-bg text-text font-poppins text-base transition-colors duration-200 focus:outline-none focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium text-text text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded bg-bg text-text font-poppins text-base transition-colors duration-200 focus:outline-none focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium text-text text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-3 py-3 border border-border rounded bg-bg text-text font-poppins text-base transition-colors duration-200 focus:outline-none focus:border-accent resize-y min-h-30"
                ></textarea>
              </div>
              
              <button type="submit" className="px-6 py-3 bg-accent text-white border-none rounded font-poppins text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-accent-hover active:translate-y-px">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact; 