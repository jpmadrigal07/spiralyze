import React from 'react'
import Image from 'next/image'

const Second = () => {

  return (
    <div className="flex flex-col w-full">
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 items-center mb-14 gap-10 xs:hidden sm:hidden md:hidden lg:flex">
            <div className="flex-auto h-[180px] w-[371px] relative">
                <Image
                    src="/image_1.png"
                    alt="Logo"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-[8px]"
                />
            </div>
            <div className="flex-auto h-[180px] w-[371px] relative">
                <Image
                    src="/image_2.png"
                    alt="Logo"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-[8px]"
                />
            </div>
            <div className="flex-auto h-[180px] w-[371px] relative">
                <Image
                    src="/image_3.png"
                    alt="Logo"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-[8px]"
                />
            </div>
        </div>
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 items-center mb-7 gap-10">
            <div className="shrink">
                <h2 className="text-dark text-4xl font-bold text-stroke"><span className="text-white stroke-dark">WE</span> UNDERSTAND</h2>
            </div>
            <div className="flex-1">
                <hr className="text-light" />
            </div>
        </div>
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10">
            <div className="flex-1 hidden lg:hidden xl:block">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="flex-1 hidden lg:hidden xl:block">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="flex-1 hidden lg:hidden xl:block">
                <p className="text-dark mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <button className="bg-white border-2 border-primary rounded w-full text-primary font-bold py-3">
                    {`92% Success Rate `}
                    <Image
                        src="/arrowRight.svg"
                        alt="Arrow"
                        width={17}
                        height={13}
                    />
                </button>
            </div>
            <div className="flex-1 xs:hidden sm:hidden md:hidden lg:block xl:hidden">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className="flex-1 xs:hidden sm:hidden md:hidden lg:block xl:hidden">
                <p className="text-dark mb-2">quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <button className="bg-white border-2 border-primary rounded w-full text-primary font-bold py-3">
                    {`92% Success Rate `}
                    <Image
                        src="/arrowRight.svg"
                        alt="Arrow"
                        width={17}
                        height={13}
                    />
                </button>
            </div>
        </div>
        <div className="hidden flex-col xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-5 xs:flex sm:flex md:flex lg:hidden">
            <div>
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div>
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div>
                <p className="text-dark mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <button className="bg-white border-2 border-primary rounded w-full text-primary font-bold py-3">
                    {`92% Success Rate `}
                    <Image
                        src="/arrowRight.svg"
                        alt="Arrow"
                        width={17}
                        height={13}
                    />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Second