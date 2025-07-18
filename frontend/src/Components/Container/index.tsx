// src/components/Container.tsx

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-100 px-4 sm:px-6 md:px-8 mx-auto bg-gray-200 rounded pt-6 pb-6 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[600px] sm:max-w-[450px] xs:w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
