// src/components/varsitypharmacy/LeaveReviewSection.jsx
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const BRAND_GREEN = "#79BD43";
const BORDER_TEAL = "#0FA6A6";
const TEXT_GRAY = "#5C5656";

export default function LeaveReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews"); // 🔹 your backend endpoint
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // ✅ Do NOT render anything while loading
  if (loading) return null;

  // ✅ If no reviews, do NOT render section
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Reviews Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl px-8 pt-14 pb-8 text-center border"
              style={{ borderColor: BORDER_TEAL }}
            >
              {/* Google Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow">
                <FcGoogle size={40} />
              </div>

              <h4 className="mt-2 text-lg font-bold text-gray-800">
                {r.author_name}
              </h4>

              <div className="flex justify-center mt-2 gap-1 text-yellow-400">
                {Array.from({ length: r.rating || 5 }).map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              <p
                className="mt-5 text-[15px] leading-7"
                style={{ color: TEXT_GRAY }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Leave Review Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-white text-sm tracking-wide transition hover:opacity-90"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            LEAVE A REVIEW
          </a>
        </div>

      </div>
    </section>
  );
}