import React from "react";

export default function ClinicReviews({ reviews = [], show = true }) {
  if (!show) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight">
            We’re Opening Soon!
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
            Our clinic is preparing to serve the community with compassionate,
            patient-focused care. Be among the first to experience our services
            and share your feedback.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md"
          >
            Notify or Contact Me
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          {reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 w-full">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-green-600 text-5xl leading-none">“</div>

                  <p className="text-gray-700 mt-4 text-base leading-relaxed">
                    {review.text}
                  </p>

                  <div className="mt-6 text-yellow-500">
                    {"★★★★★"}
                  </div>

                  <div className="mt-4 font-semibold text-gray-900">
                    {review.name}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 shadow-md border border-gray-100 text-center w-full max-w-md">
              <div className="text-7xl text-red-100 leading-none mb-4">
                “
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                Patient Reviews Coming Soon
              </h3>

              <p className="mt-4 text-gray-600">
                Once we open our doors, real patient experiences and
                testimonials will be shared here.
              </p>

              <div className="mt-6 text-sm text-gray-400">
                We look forward to serving you.
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}