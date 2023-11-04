"use client";

import Image from "next/image";
import { Layout, Logo } from "./components";
import Link from "next/link";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <Layout mode="dark">
      <div className="loading-screen fixed top-0 left-0 w-full h-screen z-50 flex">
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>
        <div className="column h-screen w-full bg-white"></div>

        <div className="absolute loading-logo left-0 top-0 right-0 bottom-0 m-auto w-[34px] h-[41px] z-[60]">
          <Logo color="#090909"/>
        </div>
      </div>

      <Link href="mailto:jens@jery.be" className="lg:block hidden w-[456px] overflow-hidden top-8 right-20 fixed pt-10 pl-10 pr-10 pb-10 z-30 rounded-[10px] group">
        <div className="contact-content">
          <h6 className="leading-[140%]">
            While you're twiddling your thumbs, we're here and ready to chat. Got an exciting project or a brilliant idea? Don't be shy, reach out to us.
          </h6>

          <div className="flex items-center gap-4 mt-8">
            <Image src="/images/jens.webp" width={56} height={56} className="rounded-full" alt="Jery Creative Design Studio" />

            <div className="flex flex-col items-start font-extralight">
              <span>Jens Deryckere</span>
              <span className="text-grey-600 text-sm">Founder</span>
            </div>
          </div>

          <div className="w-10 h-10 bg-white rounded-full absolute right-[-20px] bottom-[-20px] flex justify-center items-center group-hover:scale-90 group-hover:rotate-[45deg] transition-all ease-in-out duration-500">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2125 13.3922L11.7285 13.3922L11.7285 11.4191L22.5808 11.4191L22.5808 22.2713H20.6077L20.6077 14.7874L12.1167 23.2784L10.7215 21.8832L19.2125 13.3922Z" fill="#090909"/>
            </svg>
          </div>
        </div>

        <div className="absolute w-full h-full top-[0px] right-0 rounded-[10px] -z-10 bg-white-gradient backdrop-blur-lg transition-all ease-in-out duration-300 contact-backdrop group-hover:opacity-70 group-hover:scale-[.98]"></div>
      </Link>

      <div className="h-screen w-screen relative c-container flex flex-col lg:justify-end justify-start lg:pb-20 pb-10 lg:pt-0 pt-36 overflow-hidden gap-20">
        <div className="relative z-20">
          <h1 className="lg:text-start text-center">
            Hang on tight, <br />
            launching soon
          </h1>

          <p className="leading lg:text-start text-center max-w-[590px]">
            Jery is an upcoming Creative Design Studio, based in Bruges,
            where we are dedicated to crafting unique experiences.
          </p>
        </div>

        <Link href="mailto:jens@jery.be" className="lg:hidden block w-full relative overflow-hidden pt-5 pl-5 pr-5 pb-14 z-30 rounded-[10px] group">
          <div className="contact-content mobile-content">
            <h6 className="leading-[140%]">
              While you're twiddling your thumbs, we're here and ready to chat. Got an exciting project or a brilliant idea? Don't be shy, reach out to us.
            </h6>

            <div className="flex items-center gap-4 mt-8">
              <Image src="/images/jens.webp" width={56} height={56} className="rounded-full" alt="Jery Creative Design Studio" />

              <div className="flex flex-col items-start font-extralight">
                <span>Jens Deryckere</span>
                <span className="text-grey-600 text-sm">Founder</span>
              </div>
            </div>

            <div className="w-10 h-10 bg-white rounded-full absolute right-[-10px] bottom-[-46px] flex justify-center items-center group-hover:scale-90 group-hover:rotate-[45deg] transition-all ease-in-out duration-500">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2125 13.3922L11.7285 13.3922L11.7285 11.4191L22.5808 11.4191L22.5808 22.2713H20.6077L20.6077 14.7874L12.1167 23.2784L10.7215 21.8832L19.2125 13.3922Z" fill="#090909"/>
              </svg>
            </div>
          </div>

          <div className="absolute w-full h-full bottom-[0px] right-0 rounded-[10px] -z-10 bg-white-gradient backdrop-blur-lg transition-all ease-in-out duration-300 contact-backdrop group-hover:opacity-70 group-hover:scale-[.98] mobile-backdrop"></div>
        </Link>

        <div className="lg:scale-150 absolute w-screen h-screen lg:right-[-40vw] lg:bottom-[-40vh] left-0 lg:left-auto right-0 lg:mx-0 mx-auto bottom-[-45vh] z-10 splash">
          <Spline scene="https://prod.spline.design/xoQcGWzzeAt1y0Ix/scene.splinecode"/>
        </div>

        <div className="z-[15] absolute left-0 top-0 w-screen h-screen lg:bg-black-gradient bg-black-mobile-gradient"></div>
      </div>
    </Layout>
  );
};
