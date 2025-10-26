"use client";

import React from "react";

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      {/* Header */}
      <header className="text-center my-8">
        <h1 className="text-5xl font-bold text-pink-500 mb-2">
          Next.js 15 + CI/CD + Jenkins
        </h1>
        <p className="text-lg text-gray-700">
          Automate your deployments with Next.js 15, TypeScript, TailwindCSS, and Jenkins
        </p>
      </header>

      {/* Features Section */}
      <section className="my-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Next.js 15</h2>
          <p>Build modern React apps with the latest features and server components.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">TypeScript</h2>
          <p>Type-safe development to prevent bugs and improve maintainability.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">TailwindCSS</h2>
          <p>Rapidly style your apps with utility-first CSS framework.</p>
        </div>
      </section>

      {/* CI/CD Workflow */}
      <section className="my-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">CI/CD Workflow with Jenkins</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Commit code to GitHub repository.</li>
          <li>Jenkins automatically pulls the latest changes.</li>
          <li>Build your Next.js 15 project using TypeScript.</li>
          <li>Run tests and linting.</li>
          <li>Deploy to your server or cloud provider.</li>
        </ol>
      </section>

      {/* Contact */}
      <section className="my-12 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
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

      <footer className="text-gray-500 mt-12 mb-4">
        &copy; {new Date().getFullYear()} Your Name. Built with Next.js 15 + TailwindCSS.
      </footer>
    </main>
  );
};

export default HomePage;
