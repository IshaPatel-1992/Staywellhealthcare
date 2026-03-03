import React, { useState } from "react";

export default function ClinicFeedback() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // TODO: Connect to backend / API here
    console.log("Anonymous Feedback:", message);

    setSubmitted(true);
    setMessage("");
  };

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 leading-tight">
            Send Us Your <br /> Anonymous Feedback
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We are always looking for how we can help you better.
            If you have feedback, we would love to hear it.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            Fill out the form to anonymously tell us about your experience.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-lg">
          <form onSubmit={handleSubmit}>
            <label className="block font-extrabold text-gray-800 mb-3">
              Let Us Know How We Can Improve{" "}
              <span className="text-red-500 text-sm">(Required)</span>
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
              className="
                w-full
                border border-gray-300
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
                transition
              "
              placeholder="Share your thoughts here..."
            />

            <button
              type="submit"
              className="
                mt-6
                bg-red-600
                hover:bg-red-700
                text-white
                font-semibold
                px-8
                py-3
                rounded-xl
                transition
              "
            >
              Submit
            </button>

            {submitted && (
              <p className="mt-4 text-green-600 font-medium">
                Thank you for your feedback!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}