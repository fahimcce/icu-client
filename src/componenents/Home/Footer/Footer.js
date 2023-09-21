import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-4 rounded-xl ">
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className='link link-hover' to=''>
                        ICU
                    </Link>
                    <Link className='link link-hover' to=''>
                        Doctors search
                    </Link>
                    <Link className='link link-hover' to=''>
                        medicine
                    </Link>
                    <Link className='link link-hover' to=''>
                        lab Tests
                    </Link>
                    <Link className='link link-hover' to=''>
                        Blood Donar
                    </Link>
                    <Link className='link link-hover' to=''>
                        Ambulance
                    </Link>

                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">
                        About us
                    </Link> <Link className="link link-hover">
                        Contact
                    </Link> <Link className="link link-hover">
                        Jobs
                    </Link> <Link className="link link-hover">
                        Press kit
                    </Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">
                        Terms of use
                    </Link>
                    <Link className="link link-hover">
                        Privacy policy
                    </Link>
                    <Link className="link link-hover">
                        Cookie policy
                    </Link>
                </nav>

            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded-xl">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ICUBD</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;