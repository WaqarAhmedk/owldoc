import React from "react";

function Footer() {
  return (
    <div className="bg-[#EAE2F3] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-2">
        {/* Left - Contact Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] font-semibold text-main">Contact Us</h3>
          <p className="text-[18px] text-main">
            Have questions? We'd love to hear from you! Reach out using the
            details below.
          </p>
          <div>
            <p className="font-semibold text-main">Address:</p>
            <p className="text-main">
              123 Telehealth Lane, Healthcare City, TX 75001
            </p>
          </div>
          <div>
            <p className="font-semibold text-main">Phone:</p>
            <p className="text-main">(123) 456-7890</p>
          </div>
          <div>
            <p className="font-semibold text-main">Email:</p>
            <p className="text-main">support@telehealth.com</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 text-black shadow-lg">
          <h3 className="text-[24px] font-semibold mb-4 text-main">
            Send us a Message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            ></textarea>
            <button
              type="submit"
              className="bg-main text-white py-3 rounded-full hover:bg-[#003bb5] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-white/30 pt-6">
        <p className="text-[16px] text-main">
          © 2024 owldoc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
