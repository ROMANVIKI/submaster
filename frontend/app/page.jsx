'use client'
import Image from "next/image";
import Nav from "./components/Nav";
import LatestSub from "./components/LatestSub";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [subData, setSubData] = useState(null);

  useEffect(() => {
    const apiFunction = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/all-subtitles");
        setSubData(response.data);
      } catch (error) {
        alert(error);
      }
    };

    apiFunction();
  }, []);  // Empty dependency array ensures this effect runs only once

  // If you want to log the data after it's fetched
  useEffect(() => {
    if (subData) {
      console.log(subData);
    }
  }, [subData]);  // Dependency on subData ensures logging after the state is updated

  return (
    <main className="bg-[#0f0f23] font-mono text-['#009900'] h-full w-full p-2">
      <div className="border-b shadow-lg border-b-blue-200">
        <Nav />
      </div>
      <div>
        <LatestSub />
      </div>
    </main>
  );
}
