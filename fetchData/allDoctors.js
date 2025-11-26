export default async function getAllDoctorsInfo() {
  const res = await fetch(
    "https://health-bridge-server-three.vercel.app/all-doctors"
  );
  return res.json();
}
