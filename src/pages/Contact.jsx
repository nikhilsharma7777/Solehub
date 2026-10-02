import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-8 md:px-12 lg:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-yellow-400 uppercase tracking-[4px] text-sm">
          Get In Touch
        </p>

       

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have a question about our shoes or your order? Send us a message and
          we'll get back to you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Whether you need help choosing the right pair, have a question about
            your order, or just want to say hello, we're here to help.
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-yellow-400 font-semibold">Email</p>
              <p className="text-gray-300">nikhilsharma2203@gmail.com</p>
            </div>

            <div>
              <p className="text-yellow-400 font-semibold">Phone</p>
              <p className="text-gray-300">+91 78076 37890</p>
            </div>

            <div>
              <p className="text-yellow-400 font-semibold">Location</p>
              <p className="text-gray-300">Himachal Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-yellow-400 transition"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-300 active:scale-95 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
