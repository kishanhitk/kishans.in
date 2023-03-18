import React from "react";

// Define the ParagraphProps type
type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

// Add the ParagraphProps type to the component
const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p
    className={`text-md font-normal leading-7 text-gray-700 dark:text-gray-200 ${className}}`}
  >
    {children}
  </p>
);

export default Paragraph;
