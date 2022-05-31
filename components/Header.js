import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex xl:mx-40 lg:mx-8 md:mx-8 mx-5 h-16 items-center">
        <div className="flex-auto">
          <Image
            src="/headerLogo.svg"
            alt="Logo"
            width={226}
            height={35}
          />
        </div>
        <div className="flex-auto hidden md:hidden lg:block">
          <div className="flex justify-end">
            <Link href="/home">
              <span className="text-light font-bold mr-7 text-sm hover:cursor-pointer">HOME</span>
            </Link>
            <Link href="/about">
              <span className="text-light mr-7 text-sm hover:cursor-pointer">ABOUT</span>
            </Link>
            <Link href="/contact">
              <span className="text-light xl:mr-7 text-sm hover:cursor-pointer">CONTACT</span>
            </Link>
            <span className="text-light mr-7 md:hidden lg:hidden xl:block hidden">|</span>
            <span className="md:hidden lg:hidden xl:block hidden">
              <Link href="/contact">
                <span className="text-light font-bold text-sm hover:cursor-pointer">CALL NOW FOR A CONSULT <span className="text-primary">XXX.XXX.XXXX</span></span>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex-auto xs:block sm:block md:block lg:hidden hidden">
          <div className="flex justify-end">
            <Image
              src="/hamburger.svg"
              alt="Logo"
              width={20}
              height={12}
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:mx-40 lg:mx-8 md:mx-8 mx-5 mb-5 items-center md:hidden lg:flex xl:hidden hidden">
      <div className="flex-auto">
      <div className="flex justify-end">
        <span className="">
          <Link href="/contact">
            <span className="text-light font-bold text-sm hover:cursor-pointer">CALL NOW FOR A CONSULT <span className="text-primary">XXX.XXX.XXXX</span></span>
          </Link>
        </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header