import React, { useState } from "react";
import MentalHealthImg from "../../assets/Clinic/Services/staywell-services-mental-health.webp";
import PeriodicHealthExamImg from "../../assets/Clinic/Services/staywell-services-anual-checkup.webp";
import WomensHealthImg from "../../assets/Clinic/Services/staywell-services-womens-health.webp";
import WorkInjuriesImg from "../../assets/Clinic/Services/staywell-services-wcb.webp";
import MinorProceduresImg from "../../assets/Clinic/Services/staywell-services-minor-proceedure.webp";
import ChronicDiseaseImg from "../../assets/Clinic/Services/staywell-services-chronic.webp";
import UnInsuredServicesImg from "../../assets/Clinic/Services/staywell-services-uninsured.webp";
import BotoxImg from "../../assets/Clinic/Services/staywell-services-botox.webp";
import DriversMedicalImg from "../../assets/Clinic/Services/staywell-services-driver.webp";
import MensHealthImg from "../../assets/Clinic/Services/staywell-services-mens-health.webp";
import PrEPImg from "../../assets/Clinic/Services/staywell-services-prep.webp";
import AstheticServicesImg from "../../assets/Clinic/Services/staywell-services-aesthetics.webp";
import InfusionClinicImg from "../../assets/Clinic/Services/staywell-services-infusion.webp";
import CounsellingImg from "../../assets/Clinic/Services/staywell-services-counselling.webp";
import AnimatedImage from "./AnimatedImage";


const services = [
  {
    title: "Mental Health",
    image: MentalHealthImg,
    description:
      "At Staywell Medical Clinic, we prioritize your mental well-being. Our compassionate healthcare providers offer personalized mental health services, including assessments, therapy options, and support for various conditions such as anxiety and depression. We’re here to listen and help you.",
  },
  {
    title: "Periodic Health Exams",
    image: PeriodicHealthExamImg,
    description:
      "Regular annual checkups are essential for maintaining your health. At Staywell Medical Clinic, our experienced team conducts thorough evaluations, including health screenings, immunizations, and lifestyle assessments. We work with you to create a personalized health plan that works for you.",
  },
  {
    title: "Women's Health",
    image: WomensHealthImg,
    description:
      "Staywell Medical Clinic is dedicated to addressing the unique health needs of women. Our comprehensive women’s health services include routine gynecological exams, family planning, menopause management, prenatal care, and endometrial biopsies. We also provide a range of contraceptive management options, including Nexplanon (implant) insertion, IUD insertion and removal, as well as oral contraceptive pills (OCPs). Our caring staff is committed to providing a comfortable and supportive environment for all your health concerns.",
  },
  { title: "Work Injuries", image: WorkInjuriesImg, description: "If you’ve experienced a work-related injury, Staywell Medical Clinic is here to support you. We offer assessments and treatment plans in accordance with Workers’ Compensation Board (WCB) guidelines. Our experienced team will help you navigate the process and get you back to work safely." },
  { title: "Minor Procedures", image: MinorProceduresImg, description: "Staywell Medical Clinic provides a range of minor procedures, including mole removals, ear flushing, blood pressure checks, prescription refills, stitching and stitches removal, and other skin treatments. Our skilled healthcare professionals ensure that these procedures are performed safely and effectively." },
  { title: "Chronic Disease Management", image: ChronicDiseaseImg, description: "Managing chronic conditions can be challenging, but you don’t have to do it alone. Our clinic offers comprehensive chronic disease management services, including personalized care plans, regular monitoring, and support for conditions such as diabetes, hypertension, and asthma." },
  {
    title: "Uninsured Services",
    image: UnInsuredServicesImg,
    sections: [
      {
        heading: "Office Visits",
        items: [
          { name: "Canadian Resident without Valid Health Care Card", fee: "$55" },
          { name: "Canadian Resident without Health Care Card plus Pap Smear", fee: "$80" },
          { name: "Canadian Resident without Health Care Card plus Complete Physical Exam", fee: "$160" },
          { name: "Out of Country Resident plus Complete Physical Exam", fee: "$120 - 175" },
          { name: "IFH Program (Refugees)", fee: "$55" },
        ],
      },
      {
        heading: "Medical Procedures",
        items: [
          { name: "Injection Fee", fee: "$20" },
          { name: "Wart Treatments", fee: "$40" },
          { name: "Driver's Medical Class 4 & below", fee: "$150" },
          { name: "Driver's Medical Class 5", fee: "$120" },
          { name: "Certificates of Fitness & Exam", fee: "$40 - 100" },
          { name: "Adoption/Foster Care Forms & Examination", fee: "$60 - 120" },
          { name: "Short & Long-Term Disability Forms", fee: "$40 - 100" },
        ],
      },
      {
        heading: "Forms, Certificates & Medical Records",
        items: [
          { name: "Alberta Blue Cross Form", fee: "$20" },
          { name: "Pregnancy Leave / EI Forms", fee: "$25 - 50" },
          { name: "Taxi Form and Handicap Parking", fee: "$20 - 40" },
          { name: "Insurance Medical Statement", fee: "$100 - 275" },
          { name: "Proof of Death Statement", fee: "$60" },
          { name: "AADAC", fee: "$100" },
          { name: "Senior's Residence Form", fee: "$60" },
          { name: "Fit-To-Work Forms", fee: "$30 - 60" },
          { name: "Insurance MVA - 1 page", fee: "$75" },
          { name: "Insurance MVA - 2 pages", fee: "$100" },
          { name: "Medical Report (Third Party)", fee: "$175" },
          { name: "Disability Tax Credit CRA Forms", fee: "$75 - 100" },
          { name: "CPP Forms", fee: "$60" },
          { name: "Sick / Massage / Return to Work Notes", fee: "$20" },
          { name: "Medical Certificates or Letters", fee: "$25 - 50" },
          { name: "Transfer of Records", fee: "$50" },
        ],
      },
    ],
  },
  { title: "Botox", image: BotoxImg, description: "At Staywell Medical Clinic, we offer Botox treatments to help you achieve a refreshed and youthful appearance. Our skilled healthcare providers use Botox to reduce the appearance of fine lines and wrinkles, providing a natural-looking result. We prioritize your safety and satisfaction, ensuring you receive personalized care tailored to your needs." },
  { title: "Driver's Medical Exams", image: DriversMedicalImg, description: "Staywell Medical Clinic provides comprehensive driver's medical exams to ensure you meet the necessary health requirements for driving. Our experienced healthcare providers conduct thorough evaluations, including vision tests, hearing assessments, and overall health screenings. We are committed to helping you maintain your driving privileges while prioritizing your safety on the road." },
  { title: "Men's Health", image: MensHealthImg, description: "At Staywell Medical Clinic, we are dedicated to addressing the unique health needs of men. Our comprehensive men's health services include routine physical exams, prostate screenings, testosterone level assessments, and lifestyle counseling. We provide personalized care to help you maintain optimal health and well-being." },
  { title: "PrEP (HIV Prevention)", image: PrEPImg, description: "Staywell Medical Clinic offers PrEP (Pre-Exposure Prophylaxis) services to help prevent HIV infection. Our knowledgeable healthcare providers will assess your risk factors and provide personalized guidance on PrEP usage, including medication management and regular monitoring. We are committed to supporting your sexual health and well-being." },
  { title: "Aesthetic Services", image: AstheticServicesImg, description: "At Staywell Medical Clinic, we offer a range of aesthetic services to help you look and feel your best. Our skilled healthcare providers provide treatments such as dermal fillers, chemical peels, and laser hair removal. We prioritize your safety and satisfaction, ensuring you receive personalized care tailored to your aesthetic goals." },
  { title: "Infusion Clinic", image: InfusionClinicImg, description: "Staywell Medical Clinic provides infusion therapy services for patients requiring intravenous treatments. Our experienced healthcare providers administer medications such as antibiotics, hydration therapy, and vitamin infusions in a comfortable and safe environment. We are committed to supporting your health and well-being through our infusion clinic services." },
  { title: "Counselling Services", image: CounsellingImg, description: "At Staywell Medical Clinic, we offer counseling services to support your mental and emotional well-being. Our compassionate counselors provide individual and group therapy sessions to help you navigate life's challenges, manage stress, and improve your overall mental health. We are here to listen and provide guidance in a safe and supportive environment." },
];

export default function ClinicServices() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="relative text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227]">
                Our Most Popular Services
              </span>
            </h2>
        </div>

        {/* Cards Grid */}
        <style>{`
  @keyframes staywellDance {
    0%, 100% { transform: rotate(0deg) scale(1); }
    15% { transform: rotate(0.35deg) scale(1.01); }
    30% { transform: rotate(-0.35deg) scale(1.01); }
    45% { transform: rotate(0.25deg) scale(1.01); }
    60% { transform: rotate(-0.25deg) scale(1.01); }
    75% { transform: rotate(0.15deg) scale(1.01); }
  }
`}</style>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:animate-[staywellDance_0.6s_ease-in-out_2] origin-center will-change-transform"
            >
              <AnimatedImage
                src={service.image}
                alt={service.title}
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-extrabold text-black">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close X */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
            >
              ×
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#DC2227] mb-6">
              {selectedService.title}
            </h3>

            {/* ========== TABLE SERVICES (Uninsured) ========== */}
            {selectedService.sections ? (
              <div className="space-y-8">
                {selectedService.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {section.heading}
                    </h4>

                    <div className="border rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody>
                          {section.items.map((item, i) => (
                            <tr
                              key={i}
                              className="border-b last:border-none hover:bg-gray-50"
                            >
                              <td className="p-3 text-gray-700">
                                {item.name}
                              </td>
                              <td className="p-3 text-right font-semibold text-[#DC2227]">
                                {item.fee}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* ========== NORMAL DESCRIPTION SERVICES ========== */
              <p className="text-gray-600 leading-relaxed">
                {selectedService.description}
              </p>
            )}

            {/* Close Button 
            <div className="mt-8 text-right">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2 bg-[#DC2227] text-white rounded-lg hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>*/}
          </div>
        </div>
      )}
      {/* ================= END MODAL ================= */}
    </section>
  );
}