import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">
            We provide a variety of healthcare services to ensure your
            well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🩺</div>
              <h3 className="font-bold text-xl mb-2">Online Appointment</h3>
              <p className="text-gray-600">
                Book a doctor appointment online anytime.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="font-bold text-xl mb-2">Medication Tracking</h3>
              <p className="text-gray-600">
                Keep track of your prescriptions and dosage easily.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="font-bold text-xl mb-2">Lab Tests</h3>
              <p className="text-gray-600">
                Schedule and manage your lab tests online.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-xl mb-2">Health Records</h3>
              <p className="text-gray-600">
                Maintain all your health records in one secure place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
