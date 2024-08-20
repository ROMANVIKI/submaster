import Image from "next/image";
import Nav from "./components/Nav";
import LatestSub from "./components/LatestSub";

export default function Home() {
  return (
    <main className="bg-[#0f0f23] font-mono text-['#009900'] h-full w-full p-2">
      <div className= "border-b shadow-lg border-b-blue-200">
        <Nav />
      </div>
      <div>
        <LatestSub />
        
      </div>
    </main>
  );
}
