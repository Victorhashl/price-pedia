import Image from "next/image";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Main className="flex min-h-screen flex-col items-center justify-between p-24" />
      
    </div>
    
  );
}
