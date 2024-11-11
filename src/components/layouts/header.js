import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import API from "../../services/api";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const user = API.getUser();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const toggleSignInDialog = () => setSignInOpen(!signInOpen);
  const toggleSignUpDialog = () => setSignUpOpen(!signUpOpen);

  const logout = async () => {
    const data = await API.logOut();
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signIn = async (e) => {
    e.preventDefault();
    const data = await API.login(loginData);
    if (data.message === "success") {
      window.location = "/";
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    const res = await API.register(registrationData);
    if (res.message === "success") {
      window.location = "/";
    }
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
            {!user && (
              <>
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
              </>
            )}
            {user && (
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
                <p className="text-white pl-20">Welcome {user.fullname}</p>
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
            )}
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
      </header>

      {/* Sign In Dialog */}
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
            <form
              className="mt-4"
              onSubmit={signIn}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  onChange={handleLoginInputChange}
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
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
                  onChange={handleLoginInputChange}
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
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
            <form
              className="mt-4"
              onSubmit={signUp}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  onChange={handleRegistrationInputChange}
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={registrationData.fullname}
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
                  onChange={handleRegistrationInputChange}
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
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
                  onChange={handleRegistrationInputChange}
                  type="password"
                  id="password"
                  name="password"
                  value={registrationData.password}
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
                  onChange={handleRegistrationInputChange}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={registrationData.confirmPassword}
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
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        className="relative z-50">
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Menu
            </Dialog.Title>
            <div className="mt-4 space-y-4">
              <Link
                href="/services"
                className="block text-base font-semibold text-gray-900">
                Services
              </Link>
              <Link
                href="/about"
                className="block text-base font-semibold text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="block text-base font-semibold text-gray-900">
                Contact
              </Link>
              {!user && (
                <>
                  <button
                    onClick={toggleSignInDialog}
                    className="block w-full text-left text-base font-semibold text-gray-900">
                    Sign In
                  </button>
                  <button
                    onClick={toggleSignUpDialog}
                    className="block w-full text-left text-base font-semibold text-gray-900">
                    Sign Up
                  </button>
                </>
              )}
              {user && (
                <div className="space-y-2">
                  <Link
                    href="/wedding-list"
                    className="block text-base font-semibold text-gray-900">
                    Wedding List
                  </Link>
                  <Link
                    href="/ongoing-wedding"
                    className="block text-base font-semibold text-gray-900">
                    Ongoing Wedding
                  </Link>
                  <Link
                    href="/profile"
                    className="block text-base font-semibold text-gray-900">
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left text-base font-semibold text-gray-900">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
