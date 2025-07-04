import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Akmad Logistics Solutions</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Track Shipment</li>
          <li>Get a Quote</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Client Portal</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-4 bg-blue-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Reliable & Efficient Logistics Services
        </h2>
        <p className="max-w-xl text-lg mb-6">
          Empowering businesses with seamless supply chain and delivery solutions across regions.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700">
          Request a Quote
        </Button>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Freight Forwarding</h4>
            <p>End-to-end transport solutions for businesses of all sizes.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Last-Mile Delivery</h4>
            <p>Fast, reliable deliveries to your customer's door.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Warehousing</h4>
            <p>Secure, scalable storage for your goods and inventory.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-6">About Us</h3>
        <p className="max-w-4xl mx-auto text-center text-lg">
          Akmad Logistics Solutions is dedicated to providing fast, reliable, and cost-effective logistics services tailored to our clients' needs. With a focus on innovation and customer satisfaction, we ensure your goods move seamlessly from point A to point B.
        </p>
      </section>

      {/* Track Shipment */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Track Your Shipment</h3>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Enter Tracking Number" className="p-3 border border-gray-300 rounded" />
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Track</Button>
        </form>
      </section>

      {/* Get a Quote */}
      <section className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-6">Get a Quote</h3>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded" />
          <input type="text" placeholder="Pickup Location" className="p-3 border border-gray-300 rounded" />
          <input type="text" placeholder="Drop-off Location" className="p-3 border border-gray-300 rounded" />
          <textarea placeholder="Additional Info" className="p-3 border border-gray-300 rounded"></textarea>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Submit</Button>
        </form>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Careers</h3>
        <p className="max-w-4xl mx-auto text-center text-lg">
          Join our growing team! We're always looking for passionate individuals in logistics, operations, and customer support. Email your resume to careers@akmadlogistics.com.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded"></textarea>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
        </form>
        <div className="mt-8 w-full h-64">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190852695194!2d-122.41941558468177!3d37.774929779759566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3f8f6d77%3A0xb1d4f3c0f24be6a0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615327987653!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Client Portal */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Client Portal</h3>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Username" className="p-3 border border-gray-300 rounded" />
          <input type="password" placeholder="Password" className="p-3 border border-gray-300 rounded" />
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Login</Button>
        </form>
      </section>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18M9 21h6M4 7h16M4 11h16M4 15h16"
          />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 mt-12 text-center">
        <p>&copy; {new Date().getFullYear()} Akmad Logistics Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}