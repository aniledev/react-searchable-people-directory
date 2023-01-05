export async function fetchList() {
  // For the sake of the example, hardcoded 100 profiles
  const data = await fetch("https://randomuser.me/api/?results=100");
  return await data.json();
}
