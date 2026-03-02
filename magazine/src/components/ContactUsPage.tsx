import React, { useState } from "react";
import Header from "../components/Header";
import { Facebook, XIcon, Linkedin } from "lucide-react";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call to submit contact form
    console.log("Form submitted (demo) – connect to backend");
  };

  return (
    <div className="min-h-screen bg-page-background bg-opacity-50 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px]">
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <h1 className="text-5xl md:text-6xl font-black text-center text-page-text mb-8">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent-mint transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent-rose transition"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="cartoon-button bg-accent-mint hover:bg-accent-mint-hover text-page-dark w-full py-4 text-xl font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-page-text mb-4">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-accent-rose"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  123 Example Street, City, Country
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-accent-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@example.com
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-accent-mint"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="/"
                className="cartoon-button bg-accent-mint p-4"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="cartoon-button bg-accent-gold p-4"
                aria-label="Twitter"
              >
                <XIcon className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="cartoon-button bg-accent-rose p-4"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUsPage;
