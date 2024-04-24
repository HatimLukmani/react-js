import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function RootElement() {
  let navigation = useNavigation();
  return (
    <>
      {navigation.state == "loading" && <p>loadiing</p>}
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
}
