'use client'
import Image from "next/image";
import Nav from "./components/Nav";
import LatestSub from "./components/LatestSub";
import LastMonth from "./components/LastMonth";
import MostDownloaded from "./components/MostDownloaded";
import MostRated from "./components/MostRated";
import MostCommented from "./components/MostCommented";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const SubContext = createContext(null)

export default function Home() {

  const [subData, setSubData] = useState(null);

  useEffect(() => {
    const apiFunction = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/all-subtitles");
        setSubData(response.data['results']);
      } catch (error) {
        alert(error);
      }
    };

    apiFunction();
  }, []);  


  return (
    <SubContext.Provider value={subData}>

    <main className="bg-[#0f0f23] font-mono text-['#009900'] h-full w-full p-2">
      <div className="border-b shadow-lg border-b-blue-200">
        <Nav />
      </div>
      <div className="mt-12 p-12">
        <LatestSub />
        <LastMonth />
        <MostDownloaded />
        <MostRated />
        <MostCommented />
      </div>
    </main>
    </SubContext.Provider>
  );
}

