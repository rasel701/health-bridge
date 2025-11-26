export default async function getsixDoctoresInfo() {
  const res = await fetch("http://localhost:4000/doctors");
  return res.json();
}
