import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import twitchLogo from "../public/assets/twitchLogo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => setIsOpen(!isOpen);

  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z10">
        {/* Left Size */}
        <div className="flex grow items-center justify-start">
          <Link href={"/"}>
            <a className="flex">
              <Image
                src={twitchLogo}
                alt="Twitch Logo"
                height={"35px"}
                width="35px"
                className="cursor-pointer z-10"
              />
            </a>
          </Link>
          <p className="p-4">Browse</p>
          <div className="p-4">
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <BsThreeDotsVertical size={20} />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-500 text-gray-100"
                              : "text-gray-200",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {/* Midldle */}
        <div className="hidden md:flex grow-[2] items-center justify-center">
          <div className="bg-gray-600 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
            <div>
              <input
                type="text"
                className="inline bg-transparent border-none text-white focus:outline-none"
                placeholder="Search"
              />
            </div>
            <div>
              <BsSearch />
            </div>
          </div>
        </div>
        {/* Right Size */}
        <div className="hidden md:flex grow items-center justify-end">
          {session ? (
            <div className="flex items-center">
              <Link href={"/account"}>
                <div>
                  <p className="pr-4 cursor-pointer">
                    Welcome, {session.user.name}
                  </p>
                </div>
              </Link>
              <Menu as="div" className="relative text-left">
                <div className="flex">
                  <Menu.Button>
                    <BsThreeDotsVertical size={20} />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/account"
                            className={classNames(
                              active
                                ? "bg-gray-500 text-gray-100"
                                : "text-gray-200",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-500 text-gray-100"
                                : "text-gray-200",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-500 text-gray-100"
                                : "text-gray-200",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center">
              <Link href={"/account"}>
                <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
                  Account
                </button>
              </Link>
              <BsPerson size={30} />
            </div>
          )}
        </div>
        {/* Hambuger Menu */}
        <div
          className="block md:hidden z-10 cursor-pointer"
          onClick={handleNavbar}
        >
          {!isOpen ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>
        {/* Mobile Menu */}

        <div
          className={
            isOpen
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
              : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
          }
        >
          <ul className="text-center">
            <li className="p-4 text-3xl font-bold">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-4 text-3xl font-bold">
              <Link href={"/"}>Live</Link>
            </li>
            <li className="p-4 text-3xl font-bold">
              <Link href={"/"}>Top</Link>
            </li>
            <li className="p-4 text-3xl font-bold">
              <Link href={"/account"}>Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
