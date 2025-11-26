export default async function SingleDoctorInfoDoctoresInfo(id) {
  const res = await fetch(
    `https://health-bridge-server-three.vercel.app/doctors/${id}`
  );
  return res.json();
}
