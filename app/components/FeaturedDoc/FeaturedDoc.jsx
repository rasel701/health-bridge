import getsixDoctoresInfo from "@/fetchData/sixItemDoctors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// export const doctors = [
//   {
//     id: 1,
//     name: "Dr. John Smith",
//     email: "john.smith@example.com",
//     image:
//       "https://nctopdocs.com/wp-content/uploads/2021/04/Screenshot-2021-03-24-084141.jpg",
//     specialization: "Cardiologist",
//     address: "123 Heart Street, Dhaka, Bangladesh",
//     contact: "+880 1711 234567",
//     description:
//       "Dr. John Smith is an experienced cardiologist with over 15 years of practice. He specializes in heart disease, hypertension, and preventive cardiology.",
//   },
//   {
//     id: 2,
//     name: "Dr. Emily Johnson",
//     email: "emily.johnson@example.com",
//     image:
//       "https://animedvetline.com/wp-content/uploads/2017/08/Dr.-Emily-Johnson.webp",
//     specialization: "Dermatologist",
//     address: "45 Skin Care Ave, Dhaka, Bangladesh",
//     contact: "+880 1712 345678",
//     description:
//       "Dr. Emily Johnson is a skilled dermatologist known for her expertise in treating skin disorders, cosmetic dermatology, and allergy-related skin issues.",
//   },
//   {
//     id: 3,
//     name: "Dr. Michael Lee",
//     email: "michael.lee@example.com",
//     image:
//       "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
//     specialization: "Neurologist",
//     address: "78 Brain Lane, Dhaka, Bangladesh",
//     contact: "+880 1713 456789",
//     description:
//       "Dr. Michael Lee specializes in neurological disorders including stroke, epilepsy, and migraine management. He has 12 years of clinical experience.",
//   },
//   {
//     id: 4,
//     name: "Dr. Sarah Williams",
//     email: "sarah.williams@example.com",
//     image:
//       "https://t3.ftcdn.net/jpg/06/48/69/42/360_F_648694278_haC94bdL26EedqLMIbMpLACqzxwuvq4f.jpg",
//     specialization: "Pediatrician",
//     address: "12 Kids Street, Dhaka, Bangladesh",
//     contact: "+880 1714 567890",
//     description:
//       "Dr. Sarah Williams is a compassionate pediatrician providing care for newborns, infants, and children. She focuses on preventive care and child development.",
//   },
//   {
//     id: 5,
//     name: "Dr. David Brown",
//     email: "david.brown@example.com",
//     image:
//       "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
//     specialization: "Orthopedic",
//     address: "90 Bone Road, Dhaka, Bangladesh",
//     contact: "+880 1715 678901",
//     description:
//       "Dr. David Brown is an orthopedic specialist treating bone, joint, and muscle disorders. He is experienced in both surgical and non-surgical treatments.",
//   },
//   {
//     id: 6,
//     name: "Dr. Laura Thompson",
//     email: "laura.thompson@example.com",
//     image:
//       "https://c8.alamy.com/comp/2C8REB3/confident-indian-female-doctor-wear-white-coat-looking-at-camera-at-workplace-2C8REB3.jpg",
//     specialization: "Gynecologist",
//     address: "33 Women Care Lane, Dhaka, Bangladesh",
//     contact: "+880 1716 789012",
//     description:
//       "Dr. Laura Thompson is an expert gynecologist providing care in women's health, prenatal and postnatal care, and reproductive health services.",
//   },
// ];

const FeaturedDoc = ({ doctors }) => {
  return (
    <div>
      {/* {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h2>{doctor.name}</h2>
        </div>
      ))} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {doctors?.map((doctor) => (
          <div key={doctor.id} className="card bg-base-100 shadow-xl">
            {/* <Image
              src={doctor.image}
              alt={doctor.name}
              width={400}
              height={250}
              className="rounded-t-lg"
            /> */}
            <img
              className="w-[250px] h-[250px] object-cover mx-auto rounded-lg"
              src={doctor.image}
              alt=""
            />

            <div className="card-body">
              <h2 className="card-title">{doctor.name}</h2>
              <p className="font-semibold">{doctor.specialization}</p>
              <p>{doctor.address}</p>
              {/* <p>{doctor.contact}</p> */}
              {/* <p className="text-sm text-gray-600 mt-2">{doctor.description}</p> */}
              <div className="card-actions justify-end mt-2">
                <Link
                  href={`/doctors/${doctor._id}`}
                  className="btn btn-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDoc;
