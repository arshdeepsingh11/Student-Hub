// components/Navbar.js
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="school-logo.jpg" alt="School Logo" className="h-10 rounded-full" />
          <span className="text-white text-2xl font-semibold">New Generation High School</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#students" className="text-white hover:text-gray-200 transition duration-200">Students</Link>
          <Link href="#studentForm" className="text-white hover:text-gray-200 transition duration-200">Add Student</Link>
          <Link href="#settings" className="text-white hover:text-gray-200 transition duration-200">Settings</Link>
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar
