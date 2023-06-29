import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {Statistics} from "@/components/Statistics";
import {Steps} from "@/components/Steps";
import {About} from "@/components/About";

export default function Home() {
    return (
        <>
            <main className="hero">
                <Header/>
                <Hero/>
            </main>
            <Statistics/>
            <Steps/>
            <About/>
        </>
    )
}
