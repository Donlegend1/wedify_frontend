import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a href="/">
                {" "}
                <img
                  className=" w-40 text-black  mb-4"
                  src="/logo2.png"
                  alt=""
                />
              </a>

              <ul>
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-gray-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="/"
                    className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-gray-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-gray-400">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter to receive updates and news.
              </p>
              <form
                action="#"
                method="post">
                <input
                  type="email"
                  className="w-full p-2 mb-4 text-gray-800"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024
              <a
                href="https://legendosaconsultants.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                Legend OSA Consultants
              </a>{" "}
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
