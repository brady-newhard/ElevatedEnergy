// @ts-nocheck
import { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:cmwalters7@yahoo.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat pt-24 pb-16 flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528459139293-34fa35338f99?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-accent/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <h1 className="text-secondary text-4xl font-extrabold mb-4 text-center font-serif">Get In Touch</h1>
            <p className="text-secondary/80 text-lg mb-8 text-center">
              Ready to explore new possibilities or have a few questions? I'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-secondary font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/70 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/70 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 bg-white/70 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 px-6 rounded-full font-semibold font-serif hover:bg-primary hover:text-secondary transition-all duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 flex flex-col justify-center items-center text-center">
                <div className="p-6">
                  <h2 className="text-secondary text-2xl font-extrabold mb-4 font-serif">Direct Contact</h2>
                  <h3 className="text-secondary text-lg font-semibold mb-4 font-serif">Casandra Newhard</h3>
                  <div className="space-y-4 text-lg">
                    <p className="text-secondary">
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href="tel:304-946-5943" className="hover:text-primary font-bold transition">
                        304-946-5943
                      </a>
                    </p>
                    <p className="text-secondary">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:cmwalters7@yahoo.com" className="hover:text-primary font-bold transition">
                        cmwalters7@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;