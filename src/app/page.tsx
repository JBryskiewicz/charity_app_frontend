import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import statBg from "@/assets/images/stat-background-2x.png"

export default function Home() {
    return (
        <div>
            <main className="hero">
                <Header/>
                <Hero/>
            </main>
            <section className="flex flex-col justify-around items-center statistics">
                <div
                    className="flex statistics-background"
                    style={{backgroundImage: `url(${statBg.src})`}}
                >
                    <div className="statistics-container">
                        <h2 className="text-6xl text-font-color mb-6">10</h2>
                        <p className="text-2xl text-font-color mb-6">oddanych worków</p>
                        <p className="text-font-color stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="statistics-container">
                        <h2 className="text-6xl text-font-color mb-6">5</h2>
                        <p className="text-2xl text-font-color mb-6">wspartych organizacji</p>
                        <p className="text-font-color stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="statistics-container">
                        <h2 className="text-6xl text-font-color mb-6">7</h2>
                        <p className="text-2xl text-font-color mb-6">zorganizowanych zbiórek</p>
                        <p className="text-font-color stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
