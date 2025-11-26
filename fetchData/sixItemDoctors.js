export default async function getsixDoctoresInfo() {
  const res = await fetch(
    "https://health-bridge-server-three.vercel.app/doctors"
  );
  return res.json();
}
