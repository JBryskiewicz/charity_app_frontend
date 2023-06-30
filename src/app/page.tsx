import {Header} from "@/components/reusable/Header";
import {Hero} from "@/components/homepage/Hero";
import {Statistics} from "@/components/homepage/Statistics";
import {Steps} from "@/components/homepage/Steps";
import {About} from "@/components/homepage/About";
import {Foundations} from "@/components/homepage/Foundations";
import {Contact} from "@/components/homepage/Contact";

export default function Home() {
    return (
        <>
            <main className="hero" id="start">
                <Header isHome={true}/>
                <Hero/>
            </main>
            <Statistics/>
            <Steps/>
            <About/>
            <Foundations/>
            <Contact/>
        </>
    )
}
