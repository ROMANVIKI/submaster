import React, { useContext } from "react";
import Image from "next/image";
import { SubContext } from "../page";
import { FaDownload } from "react-icons/fa";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const LatestSub = () => {
  const subData = useContext(SubContext) || [];

  

  return (
    <div className="p-12"> {/* Add padding around the entire component */}
      <div className="border-b border-green-600 px-6 py-3">
        <p className="text-lg font-bold text-green-300">Latest Subtitles</p>
      </div>
      <div className="flex px-4 py-2 text-green-300 border-b border-green-600">
        <div className="w-2/6 text-xs font-semibold text-center">Title</div>
        <div className="w-1/12 text-xs font-semibold text-center">FPS</div>
        <div className="w-1/12 text-xs font-semibold text-center">Language</div>
        <div className="w-1/12 text-xs font-semibold text-center">Contributor</div>
        <div className="w-1/12 text-xs font-semibold text-center">Downloads</div>
        <div className="w-1/12 text-xs font-semibold text-center">Rating</div>
        <div className="w-1/12 text-xs font-semibold text-center">Uploaded</div>
      </div>
      <div className="space-y-2">
        {subData.length > 0 ? (
          subData.map((sub, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 border-b border-green-600"
            >
              {/* Title and Description */}
              <div className="flex items-start w-2/6 space-x-3">
                <a
                  href={sub.file}
                  download
                  className="text-green-300 hover:text-green-100 mt-2"
                  aria-label={`Download ${sub.title}`}
                >
                  <FaDownload className="w-4 h-4 " />
                </a>
                <Image
                  src={sub.thumbnail}
                  alt={sub.title}
                  width={32}
                  height={32}
                  className="object-cover rounded"
                />
                <div className="text-xs text-green-300 flex flex-col justify-center w-full">
                  <div className="font-medium">{sub.title}</div>
                  {sub.description && (
                    <div className="text-xs text-gray-400 mt-1">{sub.description}</div>
                  )}
                </div>
              </div>
              {/* FPS */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {sub.fps}
              </div>
              {/* Language */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {sub.language}
              </div>
              {/* Contributor */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {sub.contributor}
              </div>
              {/* Downloads */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {sub.number_of_downloads}
              </div>
              {/* Rating */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {sub.rating}
              </div>
              {/* Uploaded */}
              <div className="w-1/12 text-xs text-green-300 text-center">
                {formatDate(sub.uploaded_at)}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-green-300 py-2 text-xs">
            No Subtitles Available.
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestSub;
