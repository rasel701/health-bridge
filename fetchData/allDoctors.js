export default async function getAllDoctorsInfo() {
  const res = await fetch("http://localhost:4000/doctors");
  return res.json();
}
