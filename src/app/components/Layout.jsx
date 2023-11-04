"use client";

import Link from "next/link";
import { Logo } from ".";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Layout({ children, mode = "light" }) {
    const [ hideBanner, setHideBanner ] = useState(false); 
    const [ cookieApproved, setCookieApproved ] = useState(false);

    useEffect(() => {
        const gaCookie = localStorage.getItem("ga_approved") ?? false;

        if (!gaCookie) {
            setHideBanner(false);
        } else {
            setHideBanner(true);
            setCookieApproved(true);
        };
    });

    const changeCookie = (bool) => {
        setHideBanner(true);
        setCookieApproved(bool);
        localStorage.setItem("ga_approved", bool);

        if (bool) {
            setCookieApproved(true);
        };
    };

    return (
        <div className={`${mode}-mode`}>
            <Head>
                <meta property="og:image" content="/images/opengraph.png" />
                <meta property="og:image:alt" content="Jery Creative Design Studio" />
            </Head>
            {
                cookieApproved ? (
                    <>
                        <Script
                            strategy="lazyOnload"
                            src={`https://www.googletagmanager.com/gtag/js?id=G-ZC0LD13QFT`}
                        />
                    
                        <Script strategy="lazyOnload">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-ZC0LD13QFT');
                            `}
                        </Script>
                    </>
                ) : ""
            }
            <div className="min-h-screen relative">
                <header className="w-screen c-container py-8 fixed top-0 left-0 z-20 flex lg:justify-start justify-center">
                    <Link href="/" className="inline-block">
                        <Logo color={mode === "dark" ? "#FFFFFF" : "#090909"} />
                    </Link>
                </header>

                {children}

                <div className={`${ !hideBanner ? "bottom-10 opacity-100" : "-bottom-20 opacity-0"} fixed lg:right-20 mx-auto right-0 lg:left-auto left-0 z-40 transition-all ease-in-out duration-[1000ms] bg-white-gradient rounded-md px-5 lg:w-[640px] w-[320px] py-4 flex lg:flex-row flex-col items-center justify-between backdrop-blur-lg gap-4`}>
                    <div className="font-extralight lg:text-start text-center">
                        We use cookies. You can read our <Link href="/cookie-policy" className="underline hover:opacity-70">Cookie Policy</Link> for more info.
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="font-normal hover:opacity-70 cursor-pointer" onClick={() => changeCookie(true)}>Accept</div>
                        <div className="font-normal text-grey-700 hover:opacity-70 cursor-pointer" onClick={() => changeCookie(false)}>Decline</div>
                    </div>
                </div>
            </div>

            <footer className="c-container py-8 border-t border-solid border-grey-800 flex lg:flex-row flex-col gap-6 items-center justify-between">
                <span className="font-extralight text-sm text-grey-700 leading-[100%]">
                    © Copyright Jery, 2023
                </span>

                <nav className="flex items-center gap-8">
                    <Link className="font-extralight text-sm text-grey-700 leading-[100%] underline" href="/privacy-policy">
                        Privacy Policy
                    </Link>

                    <Link className="font-extralight text-sm text-grey-700 leading-[100%] underline" href="/cookie-policy">
                        Cookie Policy
                    </Link>
                </nav>
            </footer>
        </div>
    );
};

