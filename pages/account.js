import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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
          <FaGithub className="2" /> Sign in with{" "}
          <span className="font-bold pl-1">GitHub</span>{" "}
        </button>
      </div>
    </>
  );
}
