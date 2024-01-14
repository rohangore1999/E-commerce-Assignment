import React from "react";

const SectionTitle = ({ title, description }) => (
  <div className="md:my-5">
    <p className="text-xl font-bold text-left px-5 md:pl-0 md:text-center uppercase md:text-3xl md:font-medium">
      {title}
    </p>

    {description && (
      <p className="hidden md:block text-left px-5 md:pl-0 md:text-center text-2xl font-normal text-gray-500 mt-2 tracking-widest">
        {description}
      </p>
    )}
  </div>
);

export default SectionTitle;
