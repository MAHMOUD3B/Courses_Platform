import React from "react";
import { FaTimes } from "react-icons/fa";

const PdfPopup = ({ handlePdfVisibility }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-md flex-center z-50">
      <div className="relative w-full h-full">
        {/* Close Button */}
        <button
          onClick={() => handlePdfVisibility(false)}
          className="absolute top-4 right-4 bg-white p-2 rounded shadow text-red-500 text-xl transition-all duration-300 cursor-pointer"
          aria-label="Close PDF Viewer"
        >
          <FaTimes />
        </button>

        {/* PDF Viewer */}
        <iframe
          src="/file.pdf"
          className="w-full h-full border-none"
          title="PDF Viewer"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfPopup;
