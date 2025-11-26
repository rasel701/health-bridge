import React from "react";

const TestimonialSection = () => {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-center mb-6">
            What Our Patients Say
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Hear from our patients who trusted HealthBridge for their health.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="card p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700">
                "Excellent service! Very helpful doctors. I felt cared for and
                supported throughout my treatment."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">— Jane Doe</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="card p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700">
                "Booking appointments online is so convenient. The doctors are
                professional and friendly."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">— John Smith</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="card p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700">
                "I highly recommend HealthBridge. The platform is easy to use
                and the doctors are excellent."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">— Emily Johnson</h4>
            </div>

            {/* Testimonial 4 */}
            <div className="card p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700">
                "The healthcare service is top-notch. Fast, reliable, and the
                staff are very supportive."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">— Michael Lee</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
