'use client'
import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import localfont from "next/font/local";
import "../app/globals.css";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Register from "@/components/onboarding";
import Footer from "@/components/footer";
import AboutUs from "@/components/about";
import Script from "next/script";
import { useEffect } from "react";
import FAQPage from "@/components/faq";
import Timeline from "@/components/timeline";
import Organisations from "@/components/organisations";
import Sponsors from "@/components/sponsors";
import Partners from "@/components/partners";
import Carousel from "@/components/carousel";

import asset1 from '../public/platinum.svg'
import asset2 from '../public/gold.svg'
import asset3 from '../public/silver.svg'
import asset4 from '../public/bronze.svg'
 
const inter = Inter({ subsets: ["latin"] });
const chakra = Chakra_Petch({
  subsets: ["latin"] , 
  weight: "400",
  variable: "--font-chakra"
});

const kleemax = localfont({
  src : [{
    path: "../public/fonts/kleemaxdemo.ttf",
    weight : "400"
    }],
    variable: "--font-kleemax"
})

export default function Structure({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    
    const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
    // Function to set the font size based on the parent's width and the number in the class name
    const setFontSizeForTextScaleElements = (): void => {
        // Select all elements whose class contains "text-scale-number"
        const elements = document.querySelectorAll<HTMLElement>('[class*="text-scale"]');

        // Iterate over each selected element
        elements.forEach(element => {
            // Get the parent element's width
            const parentElement = element.parentElement;

            // Ensure parentElement exists before proceeding
            if (parentElement) {
                const parentWidth = parentElement.clientWidth;

                // Extract the multiplier number from the class name
                const className = Array.from(element.classList).find(cls => cls.startsWith('text-scale'));
                const scaleNumberMatch = className?.match(/text-scale-(\d+(\.\d+)?)/);
                
                if (scaleNumberMatch) {
                    const scaleNumber = parseFloat(scaleNumberMatch[1]);

                    // Set the font size to parent's width multiplied by the extracted number
                    element.style.fontSize = `${parentWidth * scaleNumber/1000}px`;
                }
            }
        });
    };
    // Set the initial font size for all matching elements
    setFontSizeForTextScaleElements();

    // Adjust the font size when the window is resized
    window.addEventListener('resize', setFontSizeForTextScaleElements);
    window.addEventListener('click', setFontSizeForTextScaleElements);
    window.addEventListener('load', setFontSizeForTextScaleElements);
    
    const timeout = setTimeout(() => {
      setFontSizeForTextScaleElements();
      console.log('interval')
    }, 400);

    // Clean up event listener on unmount
    return () => {
      document.body.removeChild(script);
        window.removeEventListener('resize', setFontSizeForTextScaleElements);
        window.removeEventListener('click', setFontSizeForTextScaleElements);
        window.addEventListener('load', setFontSizeForTextScaleElements);
        clearTimeout(timeout);
    };
}, []);
  return (
      <body className={`${kleemax.variable} ${chakra.variable} bg-black`}>
        
        <Navbar/>
        <Register/>
        <AboutUs/>
        <Timeline/>
        <Organisations/>
        <Sponsors/>
        <FAQPage/>
        <Partners/>
        {children}
        <Footer/>
        <Script defer async src="https://apply.devfolio.co/v2/sdk.js"></Script>
      </body>
  );
}
