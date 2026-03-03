import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ClinicGallerySlider from "./GallerySection";

const InfoRow = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-green-600">{label}</div>
      <div className="text-gray-700 leading-snug">{children}</div>
    </div>
  </div>
);

const HoursRow = ({ day, time }) => (
  <div className="flex justify-between gap-6">
    <span className="font-medium">{day}</span>
    <span className="text-gray-600">{time}</span>
  </div>
);

export default function ComeForVisit() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP: Left info + Right form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600">
              Come For a Visit
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We’d love to get to know you! Fill out our form or give us a call
              and we can book an appointment to start a journey to a healthier
              future.
            </p>

            {/* Contact + Hours block (VERTICAL GROUP) */}
            <div className="mt-10 space-y-8 max-w-xl mx-auto lg:mx-0">
              <InfoRow icon={<FaPhoneAlt />} label="Phone">
                <a href="tel:5879556207" className="hover:underline">
                  587-955-6207
                </a>
              </InfoRow>

              <InfoRow icon={<FaMapMarkerAlt />} label="Address">
                4624 Varsity Drive NW Unit #10 <br />
                Calgary, AB T3A 2L9
              </InfoRow>

              <InfoRow icon={<FaEnvelope />} label="Email">
                <a href="mailto:info@staywellmedical.ca" className="hover:underline">
                  varsity@staywellmedical.ca
                </a>
              </InfoRow>

              {/* Hours */}
              <div className="pt-2">
                <h4 className="font-semibold text-gray-900 mb-3">Hours</h4>
                <div className="space-y-2 text-gray-700 max-w-sm mx-auto lg:mx-0">
                  <HoursRow day="Monday" time="9 a.m. – 9 p.m." />
                  <HoursRow day="Tuesday" time="9 a.m. – 9 p.m." />
                  <HoursRow day="Wednesday" time="9 a.m. – 9 p.m." />
                  <HoursRow day="Thursday" time="9 a.m. – 9 p.m." />
                  <HoursRow day="Friday" time="9 a.m. – 9 p.m." />
                  <HoursRow day="Saturday" time="9 a.m. – 5 p.m." />
                  <HoursRow day="Sunday" time="10 a.m. – 2 p.m." />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-bold text-gray-900">
                    Name <span className="text-red-600 text-sm">(Required)</span>
                  </label>

                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First"
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300"
                      />
                      <div className="mt-2 text-xs text-gray-500">First</div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Last"
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300"
                      />
                      <div className="mt-2 text-xs text-gray-500">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-bold text-gray-900">
                    Email <span className="text-red-600 text-sm">(Required)</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300"
                  />
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-lg font-bold text-gray-900">
                    Comments{" "}
                    <span className="text-red-600 text-sm">(Required)</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="How can we help?"
                    className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 shadow-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP (Full width under both columns) */}
        <div className="mt-14 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=4624%20Varsity%20Drive%20NW%20Unit%2010%20Calgary%20AB&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* GALLERY (Clinic images) */}
       <ClinicGallerySlider />
      </div>
    </section>
  );
}