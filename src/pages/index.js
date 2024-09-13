import localFont from "next/font/local";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';




export default function Home() {

  const [querys, setQuery] = useState('');
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(querys); 
      router.push(`/search?query=${querys}`)
    }
  };


  return (
    <header className="flex flex-col items-center py-6 shadow-lg homecss">
      {/* Logo and Navigation */}
      <div className="flex w-full  navbarcss">
        {/* Logo */}
        <div className="flex items-center align-center mb-4">
          <Image
            src="/images/logoM.svg"
            alt="Logo"
            width={159}
            height={45}
          />

        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-semibold mt-3 ">
          <Link href="/search" passHref
            className="text-blue-600 border-b-2 border-blue-600 mb-6">SEARCH
          </Link>
          <a href="http://girmantech.com" className="text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 mb-6">WEBSITE</a>
          <a href="https://www.linkedin.com/company/girmantech/" className="text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 mb-6">LINKEDIN</a>
          <a
            href="mailto:contact@girmantech.com"
            className="text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 mb-6"
          >
            CONTACT
          </a>
        </nav>
      </div>

      {/* Search Box */}
      <div className="mt-10">
        <div className="pb-3">
          <Image
            src="/images/bg4.png"
            alt="Logo"
            width={500}
            height={48}
          />
        </div>
      </div>
      <div className="relative max-w-lg mx-auto">

        <input
          type="text"
          placeholder="Search"
          value={querys}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full py-2 pl-12 pr-40 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-4 top-2.5 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

    </header >
  );
}


