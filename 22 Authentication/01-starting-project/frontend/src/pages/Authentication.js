import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
export async function action({ request, params }) {
  let SearchParams = new URL(request.url).searchParams;
  const FormData = await request.formData();
  const data = {
    email: FormData.get("email"),
    password: FormData.get("password"),
  };
  let mode = SearchParams.get("mode");
  console.log(mode);
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "unsupported type" }, { status: 422 });
  }
  let url = "http://localhost:8080/" + mode;
  console.log(url);
  let response = await fetch(url, {
    method: "POST",
    headers: {
      // Corrected spelling here
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(response);
  console.log("before json");
  let resData = await response.json();
  console.log("after json");
  let token = resData.token;
  console.log(resData);
  localStorage.setItem("token", token);
  return redirect("/");
}
