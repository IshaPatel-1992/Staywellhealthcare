import React, { useEffect, useState } from "react";
import gallery1 from "@/assets/Varsity1/staywellwebp/staywell-medical-clinic-pharmacy-varsity-calgary-exterior.webp";
import gallery2 from "@/assets/Varsity1/staywellwebp/staywell-varsity-clinic-pharamcy-waiting-area.webp";
import gallery3 from "@/assets/Varsity1/staywellwebp/staywell-clinic-personalised-unit1.webp";
import gallery4 from "@/assets/Varsity1/staywellwebp/staywell-clinic-personalised-unit2.webp";
import gallery5 from "@/assets/Varsity1/staywellwebp/staywell-clinic-personalised-unit3.webp";
import gallery6 from "@/assets/Varsity1/staywellwebp/staywell-exterior-pickup-clinic.png";
import gallery7 from "@/assets/Varsity1/staywellwebp/staywell-medical-clinic-pharmacy-varsity-calgary-exterior.webp";



const galleryImages = [
    gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7
];

export default function ClinicGallerySlider() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + 4 >= galleryImages.length ? 0 : prev + 4
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = galleryImages.slice(
    startIndex,
    startIndex + 4
  );

  return (
    <div className="mt-14">
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700">
        {visibleImages.map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100"
          >
            <img
              src={src}
              alt={`Clinic gallery ${i + 1}`}
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}