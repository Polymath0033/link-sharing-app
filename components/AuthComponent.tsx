import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
export const AuthComponent: FC<{
  children?: React.ReactNode;
  title: string;
  submitHandler: (e: React.FormEvent) => void;
}> = ({ children, title, submitHandler }) => {
  return (
    <main className="bg-light-gray h-screen w-full flex flex-col justify-center items-center">
      <Link href={'/'} className="">

        <Image
          src={"/images/logo-devlinks-large.svg"}
          height={40}
          width={183}
          className=""
          alt="DevLink"
        />
        </Link>
        <form
          className="md:w-[400px] w-[calc(100%_-_20px)] sm:w-[calc(100%_-_300px)] sm:bg-white p-6 h-fit rounded-md mt-8"
          onSubmit={(e) => submitHandler(e)}
        >
          <h1 className="text-dark-gray font-bold text-3xl">{title}</h1>
          <span className="text-gray font-normal text-sm nb-8">
            Add your details below to get back into the app
          </span>
          <div className="grid gap-2 mt-3">{children}</div>
        </form>
      
    </main>
  );
};
