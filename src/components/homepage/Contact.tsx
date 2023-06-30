'use client'
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import bgContact from "@/assets/images/background_contact.png";
import {Footer} from "@/components/reusable/Footer";
import React, {useState} from "react";

const TEXTAREA_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [msg, setMsg] = useState<string>('');

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        setName('');
        setEmail('');
        setMsg('');
    }

    return (
        <section className="flex justify-end items-center contact" id="contact">
            <img
                src={bgContact.src}
                alt="background image - contact section"
                className="contact-background"
            />
            <div className="h-full w-1/2 flex flex-col justify-center items-center gap-8 mx-32 pl-64 contact-box">
                <h5 className="text-4xl">Skontaktuj się z nami</h5>
                <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex justify-between mb-8">
                        <div className="flex flex-col input-box">
                            <label
                                htmlFor="name"
                                className="text-bold"
                            >
                                Wpisz swoje imię:
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Krzysztof"
                                className="contact-form-input"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="flex flex-col input-box">
                            <label
                                htmlFor="email"
                                className="text-bold"
                            >
                                Wpisz swój email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="abc@xyz.pl"
                                className="contact-form-input"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-10">
                        <label
                            htmlFor="email"
                            className="text-bold"
                        >
                            Wpisz swoją wiadomość:
                        </label>
                        <textarea
                            name="msg"
                            id="msg"
                            cols={65}
                            rows={4}
                            placeholder={TEXTAREA_PLACEHOLDER}
                            className="contact-form-input"
                            value={msg}
                            onChange={(event) => setMsg(event.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="btn btn-form"
                        >
                            Wyślij
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </section>
    );
}