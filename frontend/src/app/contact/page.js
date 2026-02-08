"use client";

import { useState } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
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
    else if (!/^[A-Za-z ]+$/.test(formData.name)) newErrors.name = "Name must contain letters only";



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
        "https://soulkadhi.anubhootee.com/phpserver/sendemail.php",
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
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Check your PHP URL or server.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="relative flex items-start justify-center  py-10">
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full ">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-black-300 max-w-xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.s
          Reiciendis dignissimos neque doloremque.
        </p>

        {/* Main Layout */}

        <div className="grid md:grid-cols-2 gap-10 items-start ">

          {/* LEFT INFO */}
          <div className="space-y-8 pt-20 pl-10" >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center ">
                🏠
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-black-300 text-sm">
                  Talewadi, Shirwal, Kankavli,<br />
                  Sindhudurga, Maharashtra - 416602
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                📞
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-black-300 text-sm">
                  +91 xxxxx xxxxx
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                ✉️
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-black-300 text-sm">
                  anubhootee.help@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black rounded-md shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">
              Send Message
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full  Name"
                    className={`w-full border-b border-gray-400 outline-none py-2 ${errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#c08a5a]"
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full border-b border-gray-400 outline-none py-2 ${errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#c08a5a]"
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="flex-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your Message..."
                    rows={3}
                    className={`w-full border-b border-gray-400 outline-none py-2 resize-none  scrollbar-ink-brown ${errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#c08a5a]"
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 font-semibold transition"
                    style={{ backgroundColor: "#7b4b2a" }}
                  > {loading ? "Submitting..." : "Submit"}

                  </button>
                </div>
              </form>) : (
              <div className="p-6 text-center bg-green-100 text-green-800 rounded-lg shadow-lg animate-fade-in">
                <h2 className="text-xl font-semibold">Thank you!</h2>
                <p className="mt-2">Your message has been sent successfully. 🎉</p>
              </div>
            )}
          </div>

        </div>
      </div >
    </section>

  );
}
