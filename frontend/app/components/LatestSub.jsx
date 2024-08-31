import React, { useEffect } from "react";
import { useContext } from "react";
import Image from 'next/image'; // Import the Image component
import { SubContext } from '../page';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const LatestSub = () => {
  const subData = useContext(SubContext) || [];

  useEffect(() => {
    console.log(`printing the ${subData} from the page.jsx`);
  }, [subData]);

  return (
    <>
      <div className="border-b border-gray-700 px-6">
        <div className="p-4 text-[#009900]">
          <p className="text-xl">Latest Subtitles</p>
        </div>
      </div>
      <div className="text-[#009900] px-8 py-4">
        <div className="flex justify-between p-2 font-bold text-sm border-b border-gray-600">
          <div className="w-1/4">Title</div>
          <div className="w-1/6">FPS</div>
          <div className="w-1/6">#CDs</div>
          <div className="w-1/6">Language</div>
          <div className="w-1/6">Contributor</div>
          <div className="w-1/6">Rating</div>
          <div className="w-1/6">Uploaded</div>
        </div>
        {subData.length > 0 ? (
          subData.map((sub, index) => {
            console.log('Image URL:', sub.thumbnail); // Debugging URL
            return (
              <div key={index} className="flex items-center justify-between p-2 border-b border-gray-600 text-sm">
                <div className="w-1/4 flex items-center space-x-2">
                  <Image
                    src={sub.thumbnail} // Ensure this is a valid URL
                    alt={sub.title}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <span className="truncate">{sub.title}</span>
                </div>
                <div className="w-1/6">{sub.fps}</div>
                <div className="w-1/6">{sub.cds}</div>
                <div className="w-1/6">{sub.language}</div>
                <div className="w-1/6">{sub.contributor}</div>
                <div className="w-1/6">{sub.rating}</div>
                <div className="w-1/6">{formatDate(sub.uploaded_at)}</div>
              </div>
            );
          })
        ) : (
          <div className="p-4">No subtitles available</div>
        )}
      </div>
    </>
  );
};

export default LatestSub;
