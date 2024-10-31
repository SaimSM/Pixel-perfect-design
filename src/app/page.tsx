import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-[#1C2331] min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-4">
        {/* Left Side - BrandName */}
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-bold">BrandName</h1>
        </div>

        {/* Center Links */}
        <nav className="flex gap-6 text-white">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Product</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Right Side - Login and Join Us */}
        <div className="flex items-center gap-4">
          <button className="hover:underline">Login</button>
          <button className="bg-[#007bff] px-4 py-1 rounded text-white font-semibold">Join Us</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center mt-16">
        <p className="text-blue-400 p-3">Welcome</p>
        <h2 className="text-4xl font-bold my-4">
          Selling on the<br />
          internet like a pro
        </h2>
        <p className="text-white-900 mb-8 p-3">
          We know how large objects will act, but things on a<br />
          small scale just do not act that way.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#007bff] px-6 py-2 rounded text-white font-semibold">Get Quote Now</button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded">Learn More</button>
        </div>
      </main>

      {/* Courses Section */}
      <section className="flex justify-center gap-6 mt-16 px-12">
        <div className="bg-white text-black p-6 rounded-lg w-64 shadow-md">
          <div className="bg-red-200 w-12 h-12 rounded mb-4"></div>
          <h3 className="font-bold">Training Courses</h3>
          <div className="w-8 h-1 bg-red-500 my-2"></div>
          <p className="text-gray-500">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>
        
        <div className="bg-white text-black p-6 rounded-lg w-64 shadow-md">
          <div className="bg-green-200 w-12 h-12 rounded mb-4"></div>
          <h3 className="font-bold">2,795 Online Courses</h3>
          <div className="w-8 h-1 bg-red-500 my-2"></div>
          <p className="text-gray-500">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>
        
        <div className="bg-blue-500 text-white p-6 rounded-lg w-64 shadow-md">
          <div className="bg-white w-12 h-12 rounded mb-4"></div>
          <h3 className="font-bold">Training Courses</h3>
          <div className="w-8 h-1 bg-white my-2"></div>
          <p className="text-white">
            The gradual accumulation of information about atomic and small-scale behavior...
          </p>
        </div>
      </section>
    </div>
  );
}
