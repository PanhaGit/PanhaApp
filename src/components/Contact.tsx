import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_iftr8qb",
        "template_0qv9elj",
        form,
        "lEuEOdDYLZL5HaVq4"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          form.reset();
        },
        () => {
          toast.error("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-11/12 max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
          bg-white shadow-2xl rounded-2xl p-8 
          border border-gray-200 space-y-6
        "
      >
        {/* Full Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-3 text-gray-500 text-xl" />
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="
              w-full pl-12 p-3 rounded-lg
              bg-gray-50 text-gray-800 
              border border-gray-300
              outline-none
              focus:ring-2 focus:ring-blue-500
              transition-all
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-3 text-gray-500 text-xl" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="
              w-full pl-12 p-3 rounded-lg
              bg-gray-50 text-gray-800 
              border border-gray-300
              outline-none
              focus:ring-2 focus:ring-blue-500
              transition-all
            "
          />
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Write your message..."
            className="
              w-full p-3 rounded-lg
              bg-gray-50 text-gray-800 
              border border-gray-300
              outline-none
              focus:ring-2 focus:ring-blue-500
              transition-all
            "
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            flex items-center justify-center
            w-full py-3 
            bg-blue-600 text-white 
            rounded-lg font-semibold
            hover:bg-blue-700 
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            gap-3 text-lg
          "
        >
          <FaPaperPlane className={loading ? "animate-pulse" : ""} />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
