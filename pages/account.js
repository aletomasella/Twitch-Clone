import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="pt-[100px] flex flex-col max-w-[400px] w-full p-4">
          <h2 className="text-2xl font-bold">Welcome {session.user.name}</h2>
          <p className="p-4">Signed in as {session.user.email}</p>
          <div className="pb-4 m-auto">
            <Image
              className="rounded-full"
              src={session.user.image}
              alt="User Photo"
              width={100}
              height={100}
            />
          </div>
          <button
            className="flex items-center justify-center p-3 bg-gray-600 border-gray-600 rounded-sm"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full m-auto p-4">
        <h2 className="text-3xl font-bold">Login</h2>
        <p className="p-4">Choose the account you want to sign in with</p>
        <button
          onClick={() => signIn()}
          className="flex items-center justify-center p-3 bg-gray-600 border-gray-600 my-2"
        >
          <FaGithub className="2 mx-2" /> Sign in with{" "}
          <span className="font-bold pl-1">GitHub</span>{" "}
        </button>
        <button
          onClick={() => signIn()}
          className="flex items-center justify-center p-3 bg-blue-600 border-blue-600 my-2"
        >
          <FaGoogle className="2 mx-2" /> Sign in with{" "}
          <span className="font-bold pl-1">Google</span>{" "}
        </button>
      </div>
    </>
  );
}
