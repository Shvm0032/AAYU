"use client";

import SidebarNav from './SidebarNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SidebarNav />
      <main className="px-20 lg:px-32 py-12 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}