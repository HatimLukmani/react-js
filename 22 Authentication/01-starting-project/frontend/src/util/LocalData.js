import { redirect } from "react-router-dom";
export default function tokenFetcher() {
  let token = localStorage.getItem("token");
  return token;
}
export function ValidityChecker() {
  let token = tokenFetcher();
  if (!token) {
    return redirect("/auth");
  }
}
