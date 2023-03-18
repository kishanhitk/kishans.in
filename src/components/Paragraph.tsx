import React from "react";

// Define the ParagraphProps type
type ParagraphProps = {
  children: React.ReactNode;
};

// Add the ParagraphProps type to the component
const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="text-md leading-7">{children}</p>
);

export default Paragraph;
