export default async function updateUserChoice(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("There s some error");
  }
  const responseData = await response.json();

  return responseData.message;
}
export async function getUserChoice() {
  const response = await fetch("http://localhost:3000/user-places");
  const reponseData = await response.json();
  if (!response.ok) {
    throw new Error("hey there is error in fetching user choice");
  }
  return reponseData.places;
}
