import React, { useEffect } from "react";

const MainLayout = ({ children }) => {
  return (
    <main className=" flex p-10">
      <div className="flex flex-wrap justify-center gap-10">{children}</div>
    </main>
  );
};

export default MainLayout;
