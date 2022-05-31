import React from 'react'
import Image from 'next/image'
import Tooltip from './Tooltip'
import Slide from './Slide'

const Third = () => {

  return (
    <div className="flex flex-col w-full">
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 items-center mb-14 gap-10">
            <Slide/>
        </div>
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 items-center mb-7 gap-10">
            <div className="shrink sm:hidden md:block">
                <h2 className="text-dark text-3xl lg:text-4xl font-bold text-stroke"><span className="text-white stroke-dark">WE</span> CAN ORGANIZE EVERYTHING</h2>
            </div>
            <div className="flex-1">
                <hr className="text-light" />
            </div>
        </div>
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 gap-10 sm:flex-col md:flex-col lg:flex-row">
            <div className="flex-1">
                <p className="text-dark italic"><span className="font-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="flex-1 xl:block hidden">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="flex-1 xl:block hidden">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
        </div>
        <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 gap-10 xl:hidden sm:flex-col lg:flex md:flex-col lg:flex-row">
            <div className="flex-1">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="flex-1">
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
        </div>
        {/* large */}
        <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 lg:hidden xl:flex">
            <div className="flex-1 relative group">
                <button className="relative g-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Needs Assessment `}
                    <div className="absolute right-[58px] 2xl:right-[136px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-3 group hover:text-primary">
                    Treatment Planning &<br/>Placement{' '}
                    <div className="absolute right-[92px] 2xl:right-[170px] top-9 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Transportation & Logistics `}
                    <div className="absolute right-[28px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
        <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 lg:hidden xl:flex">
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Insurance Advocacy `}
                    <div className="absolute right-[53px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Employment Advocacy `}
                    <div className="absolute right-[40px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                        <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                        <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button data-tooltip-target="tooltip-default" className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Aftercare Planning `}
                    <div className="absolute right-[57px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[20px] 2xl:left-[100px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
        {/* medium */}
        <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 md:hidden lg:flex xl:hidden">
            <div className="flex-1 relative group">
                <button className="relative g-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Needs Assessment `}
                    <div className="absolute right-[50px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-3 group hover:text-primary">
                    Treatment Planning &<br/>Placement{' '}
                    <div className="absolute right-[84px] top-9 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
        <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 md:hidden lg:flex xl:hidden">
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Transportation & Logistics `}
                    <div className="absolute right-[22px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Insurance Advocacy `}
                    <div className="absolute right-[47px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
        <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-10 mb-7 md:hidden lg:flex xl:hidden">
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Employment Advocacy `}
                    <div className="absolute right-[34px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                        <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                        <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button data-tooltip-target="tooltip-default" className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Aftercare Planning `}
                    <div className="absolute right-[51px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[12px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
        {/* small */}
        <div className="hidden flex-col xl:mx-40 lg:mx-8 md:mx-8 mx-5 gap-5 sm:flex md:flex lg:hidden">
            <div className="flex-1 relative group">
                <button className="relative g-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Needs Assessment `}
                    <div className="absolute right-[40px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-3 group hover:text-primary">
                    Treatment Planning &<br/>Placement{' '}
                    <div className="absolute right-[75px] top-9 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Transportation & Logistics `}
                    <div className="absolute right-[8px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Insurance Advocacy `}
                    <div className="absolute right-[33px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Employment Advocacy `}
                    <div className="absolute right-[22px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                        <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                        <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
            <div className="flex-1 relative group">
                <button data-tooltip-target="tooltip-default" className="relative bg-white border-2 border-primary rounded w-full text-dark font-bold py-6 group hover:text-primary">
                    {`Aftercare Planning `}
                    <div className="absolute right-[40px] top-6 invisible group-hover:visible">
                        <Image
                            src="/info.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                        />
                    </div>
                </button>
                <div className="absolute left-[5px] flex flex-col items-center mb-6 invisible group-hover:visible">
                    <div className="w-3 h-3 rotate-45 bg-primary-dark"></div>
                    <span className="relative -mt-2 z-10 p-2 text-[13px] w-[300px] leading-none text-white whitespace-no-wrap bg-primary-dark shadow-lg rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third