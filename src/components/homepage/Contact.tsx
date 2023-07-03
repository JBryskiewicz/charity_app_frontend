import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import bgContact from "@/assets/images/background_contact.png";
import {Footer} from "@/components/reusable/Footer";
import React from "react";
import Image from "next/image";
import {ContactForm} from "@/components/homepage/ContactForm";

export function Contact() {
    return (
        <section className="flex justify-end items-center contact" id="contact">
            <Image
                src={bgContact}
                alt="background image - contact section"
                className="contact-background"
            />
            <div className="h-full w-1/2 flex flex-col justify-center items-center gap-8 mx-32 pl-64 contact-box">
                <h5 className="text-4xl">Skontaktuj się z nami</h5>
                <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                <ContactForm/>
            </div>
            <Footer/>
        </section>
    );
}