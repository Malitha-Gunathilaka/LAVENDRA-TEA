import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully! ✨");
          form.current.reset();
          setLoading(false);
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("Failed to send message. Please try again. 😟");
          setLoading(false);
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section className="py-16 text-white bg-gradient-to-b from-black to-[#1a1a1a] border-t border-green-500" id="contact">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Get In <span className="text-green-500">Touch</span></h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-green-500"></div>
          <p className="text-gray-400">We'd love to hear from you</p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="bg-[#2a2a2a] p-8 rounded-2xl shadow-xl">
            <h3 className="mb-6 text-2xl font-semibold text-green-400">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-green-500/10 group-hover:bg-green-500/20">
                  <i className="text-green-400 fas fa-envelope"></i>
                </div>
                <a href="mailto:Sandeepa@lavendratea.com" 
                   className="text-gray-300 transition-colors hover:text-green-500">
                  Sandeepa@lavendratea.com
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-green-500/10 group-hover:bg-green-500/20">
                  <i className="text-green-400 fas fa-phone"></i>
                </div>
                <a href="tel:+94766987618" 
                   className="text-gray-300 transition-colors hover:text-green-500">
                  +94 766 987 618
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-green-500/10 group-hover:bg-green-500/20">
                  <i className="text-green-400 fas fa-map-marker-alt"></i>
                </div>
                <address className="not-italic text-gray-300">
                  Lavendra Tea,<br />
                  F39, Aalupotha Ussapitiya,<br />
                  Mawanelle, Sri Lanka
                </address>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-[#2a2a2a] p-8 rounded-2xl shadow-xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full h-32 px-4 py-3 bg-[#333] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <i className="mr-2 fas fa-spinner fa-spin"></i>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {status && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      status.includes("Failed") ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center">
          <h4 className="mb-8 text-2xl font-semibold">Connect With Us</h4>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/share/16AXLXre26/?mibextid=qi2Omg"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center transition-colors rounded-full w-14 h-14 bg-green-500/10 group-hover:bg-green-500/20">
                <i className="text-2xl text-green-400 fab fa-facebook"></i>
              </div>
            </a>
            <a
              href="#"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center transition-colors rounded-full w-14 h-14 bg-green-500/10 group-hover:bg-green-500/20">
                <i className="text-2xl text-green-400 fab fa-instagram"></i>
              </div>
            </a>
            <a
              href="#"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center transition-colors rounded-full w-14 h-14 bg-green-500/10 group-hover:bg-green-500/20">
                <i className="text-2xl text-green-400 fab fa-tiktok"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;