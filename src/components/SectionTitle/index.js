import React from "react";

const SectionTitle = ({ title, description }) => (
  <div>
    <p className="text-left px-5 md:pl-0 md:text-center uppercase text-3xl font-medium mb-2">
      {title}
    </p>

    {description && (
      <p className="text-left px-5 md:pl-0 md:text-center text-2xl font-thin">{description}</p>
    )}
  </div>
);

export default SectionTitle;
