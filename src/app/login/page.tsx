import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { GoalIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto px-14 md:p-5 bg-white">
        <div className="flex flex-row justify-center items-center w-[11%] md:w-full gap-[3px]">
          <Image
            src="/videofat-logo.png"
            alt="clearbiticone"
            className="w-[48px] md:h-auto object-cover"
            width={48}
            height={48}
          />
          <h1 className="!text-gray-800 tracking-[-0.54px] ">
            <span className="text-gray-800">Video </span>
            <span className="text-indigo-600 font-bold italic">fast</span>
          </h1>
        </div>
        <div className="mt-[20px]">
          <p className="!text-gray-900 text-2xl font-bold tracking-[-0.48px]">
            Log in
          </p>
        </div>
        <p className="mt-[7px] text-sm text-gray-600">
          Let’s get started by creating your account
        </p>
        <div className="flex flex-col items-center justify-start w-[27%] md:w-full mt-[38px] mb-[5px] gap-3.5">
          <Button variant="outline" className="w-full">
            <Image
              src="/google.svg"
              alt="clearbiticone"
              width={25}
              height={25}
              className="mr-2"
            />
            Login with Google
          </Button>
          <div className="flex flex-row justify-between items-center w-full md:px-5 ">
            <div className="h-px w-[39%] bg-gray-200" />
            <h1 className="!text-gray-400 text-sm">OR</h1>
            <div className="h-px w-[39%] bg-gray-200" />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <p className="!text-gray-900">
                      <span className="text-gray-900">Enter name </span>
                      <span className="text-red-700">*</span>
                    </p>
                    <Input
                      type="email"
                      name="name"
                      placeholder="lets.join@audionotes.com"
                      className="w-full md:h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1">
                    <p className="!text-gray-900">
                      <span className="text-gray-900">Set password</span>
                      <span className="text-red-700">*</span>
                    </p>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      // prefix={<Img src="images/img_lock.svg" alt="lock" />}
                      className="w-full md:h-auto gap-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !text-indigo-600"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-row justify-center">
                    <p className="mt-0.5 text-md !text-indigo-600">
                      Forgot Password ?
                    </p>
                  </div>
                </div>
              </div>
              <Button className="px-[35px] w-full py-3.5 sm:px-5 bg-gradient text-shadow-ts rounded-md">
                <h2 className="!text-gray-50 tracking-[-0.32px]">Login</h2>
              </Button>
            </div>
            <p className="!text-gray-600">
              <span className="text-gray-600">Don’t have an account? </span>
              <span className="text-indigo-A400 font-bold">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
