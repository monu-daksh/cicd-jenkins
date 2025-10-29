"use client";

import React, { useState } from "react";
import { Search } from "lucide-react"; // for a clean search icon

function HomePage() {
  const [search, setSearch] = useState("");


  // handle Search buttons
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You searched for: ${search}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-900">
      
  
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo / Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">
           
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
            <a href="#features" className="hover:text-pink-500 transition">Features</a>
            <a href="#workflow" className="hover:text-pink-500 transition">Workflow</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </nav>
        </div>
      </header>

    
      <div className="h-24" />

  
      <section className="w-full max-w-lg mt-8 px-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white shadow-lg rounded-full overflow-hidden border border-gray-200"
        >
          <input
            type="text"
            placeholder="Search tutorials, CI/CD topics, or tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-3 outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 flex items-center justify-center transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </section>

     
      <section className="text-center my-12 px-4">
        <h2 className="text-5xl font-bold text-pink-500 mb-2">
          Next.js 15 + CI/CD + Jenkins
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Automate your deployments with Next.js 15, TypeScript, TailwindCSS, and Jenkins.
        </p>
      </section>

    
      <section id="features" className="my-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Next.js 15",
            desc: "Build modern React apps with the latest features and server components.",
          },
          {
            title: "TypeScript",
            desc: "Type-safe development to prevent bugs and improve maintainability.",
          },
          {
            title: "TailwindCSS",
            desc: "Rapidly style your apps with a utility-first CSS framework.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-2 text-pink-500">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

   
      <section id="workflow" className="my-12 w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
          CI/CD Workflow with Jenkins
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Commit code to GitHub repository.</li>
          <li>Jenkins automatically pulls the latest changes.</li>
          <li>Build your Next.js 15 project using TypeScript.</li>
          <li>Run tests and linting.</li>
          <li>Deploy to your server or cloud provider.</li>
        </ol>
      </section>

    
      <section id="contact" className="my-12 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-600">Get in Touch</h2>
        <p className="mb-4 text-gray-700">
          Want to set up CI/CD with Jenkins for your Next.js projects? Reach out!
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
        >
          Contact Me
        </a>
      </section>

  
      <footer className="text-gray-500 mt-12 mb-6 text-sm">
        &copy; {new Date().getFullYear()} Your Name. Built with ❤️ using Next.js 15 + TailwindCSS.
      </footer>
    </main>
  );
}

export default HomePage;
