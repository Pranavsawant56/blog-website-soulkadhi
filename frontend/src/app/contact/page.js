"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    else if (!/^[A-Za-z]+$/.test(formData.name)) newErrors.name = "Name must contain letters only";

    if (!formData.surname) newErrors.surname = "Surname is required";
    else if (!/^[A-Za-z]+$/.test(formData.surname)) newErrors.surname = "Surname must contain letters only";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://soulkadhi.anubhootee.com/phpserver/save_contact.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Something went wrong");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", surname: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Check your PHP URL or server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start sm:items-center py-6 px-4 sm:px-6 lg:px-8">
      
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white rounded-lg shadow-lg h-auto">
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Surname */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex-1">
                <label className="block font-medium text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#c08a5a]"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="flex-1">
                <label className="block font-medium text-sm mb-1">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 ${
                    errors.surname
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#c08a5a]"
                  }`}
                />
                {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#c08a5a]"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#c08a5a]"
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto py-2 px-6 rounded-md text-white transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#7b4b2a" }}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center bg-green-100 text-green-800 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-xl font-semibold">Thank you!</h2>
            <p className="mt-2">Your message has been sent successfully. 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
