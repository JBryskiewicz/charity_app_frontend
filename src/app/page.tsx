import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {Statistics} from "@/components/Statistics";
import {Steps} from "@/components/Steps";
import {About} from "@/components/About";
import {Foundations} from "@/components/Foundations";

export default function Home() {
    return (
        <>
            <main className="hero" id="start">
                <Header/>
                <Hero/>
            </main>
            <Statistics/>
            <Steps/>
            <About/>
            <Foundations/>
        </>
    )
}
