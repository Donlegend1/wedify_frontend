import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleSignInDialog = () => {
    setSignInOpen(!signInOpen);
  };

  const toggleSignUpDialog = () => {
    setSignUpOpen(!signUpOpen);
  };

  const logout = () => {
    // Add your logout functionality here
  };

  return (
    <>
      <header className="bg-gray-800">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="-m-1.5 p-1.5">
              <img
                className="w-40"
                src="/logo2.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <div className="my-3 uppercase mx-3">
              <Link
                href="/services"
                className="text-white text-sm font-semibold">
                Services
              </Link>
              <Link
                href="/about"
                className="text-white text-sm font-semibold mx-3">
                About
              </Link>
              <Link
                href="/contact"
                className="text-white text-sm font-semibold mx-3">
                Contact
              </Link>
            </div>

            <button
              onClick={toggleSignInDialog}
              className="text-white text-sm font-semibold uppercase">
              Sign In
            </button>
            <button
              onClick={toggleSignUpDialog}
              className="text-white text-sm font-semibold uppercase">
              Sign Up
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/user.jpeg"
                  alt="Profile"
                />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg z-20">
                  <Link
                    href="/wedding-list"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                    Wedding List
                  </Link>
                  <Link
                    href="/ongoing-wedding"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                    Ongoing Wedding
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>
        </nav>
        <Dialog
          open={signInOpen}
          onClose={toggleSignInDialog}
          className="relative z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto w-96 rounded bg-white p-6">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Sign In
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-gray-600">
                Enter your credentials to sign in.
              </Dialog.Description>

              <form className="mt-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-2 text-right">
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign In
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">
                    Don't have an account?{" "}
                  </span>
                  <a
                    href="#"
                    onClick={toggleSignUpDialog}
                    className="text-sm text-indigo-600 hover:text-indigo-500">
                    Sign Up
                  </a>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Sign Up Dialog */}
        <Dialog
          open={signUpOpen}
          onClose={toggleSignUpDialog}
          className="relative z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto w-96 rounded bg-white p-6">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Sign Up
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-gray-600">
                Create a new account.
              </Dialog.Description>

              <form className="mt-4">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign Up
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">
                    Already have an account?{" "}
                  </span>
                  <a
                    href="#"
                    onClick={toggleSignInDialog}
                    className="text-sm text-indigo-600 hover:text-indigo-500">
                    Sign In
                  </a>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Mobile Menu Dialog */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="-m-1.5 p-1.5">
                <img
                  className="w-40 text-black font-semibold"
                  src="/logo2.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    Services
                  </Link>
                </div>
                <div className="py-6">
                  <button
                    onClick={toggleSignInDialog}
                    className="block w-full px-3 py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    Sign In
                  </button>
                  <button
                    onClick={toggleSignUpDialog}
                    className="block w-full px-3 py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
