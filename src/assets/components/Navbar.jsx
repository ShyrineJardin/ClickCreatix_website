import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { LINKS } from '../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            {/* Nav Bar */}
            <nav className='fixed right-0 top-0 z-50 p-4 bg-black'>
                <button onClick={toggleMenu} className='relative z-50 rounded-md p-2'>
                    {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                </button>
            </nav>

            {/* Full-Screen Menu */}
            {isOpen && (
                <div className='fixed inset-0 z-30 flex flex-col items-center justify-center bg-black text-white'>
                    <ul className='space-y-6 text-3xl '>
                        {LINKS.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} onClick={toggleMenu} className='text-5xl font-semibold font-oswa uppercase tracking-wide hover:text-pink lg:text-5xl'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
