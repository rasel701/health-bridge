export default async function SingleDoctorInfoDoctoresInfo(id) {
  const res = await fetch(`http://localhost:4000/doctors/${id}`);
  return res.json();
}
