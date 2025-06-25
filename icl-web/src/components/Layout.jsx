import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col">
      {/* 顶部导航栏 */}
      <nav className="flex justify-center space-x-6 py-4 bg-white shadow">
        <Link to="/" className="font-medium hover:underline">Home</Link>
        <Link to="/methods" className="font-medium hover:underline">ICL Methods</Link>
        <Link to="/team" className="font-medium hover:underline">Team</Link>
      </nav>

      {/* 页面内容区域，确保撑满剩余空间并居中 */}
      <main className="flex-grow flex items-center justify-center p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;