import Image from "next/image";
import NavBar from "./components/navBar";
import Landing from "./components/landing";
import Loading from "./loading";
export default function Home() {
  return (
    <main >
      <NavBar />
      <Landing />
      <Loading />
    </main>
  );

}
