import Link from 'next/link';

export const Navbar = () => {
  return (
        
    <nav className="bg-orange-500 text-white p-4 flex grip gap-x-20 justify-between">

      {/* Logo and Heading */}

      <div className="flex items-center text-white ">
        <h1 className="text-6xl font-extrabold">Fired Up Pizza</h1>
      </div>

      {/* Navigation Links */}

      <ul className="flex items-center space-x-4 grip gap-x-20">
      <li>
            <Link href="/" className="text-lg hover:text-blue-800">Menu</Link>
        </li>
        <li>
            <Link href="/" className="text-lg hover:text-blue-800">About Us</Link>
        </li>
        <li>
            <Link href="/" className="text-lg hover:text-blue-800">Categories</Link>
        </li>
        <li>
        <Link href="/" className="text-lg hover:text-blue-800">Our Services</Link>
        </li>
        <li>
        <Link href="/" className="text-lg hover:text-blue-800">Contact</Link>
        </li>
       
      </ul>
      </nav>
      
  );
}

export default Navbar;