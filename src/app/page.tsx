import {Header} from "@/components/Header";

export default function Home() {
    return (
        <div>
            <main className="hero">
                <Header/>
                <section className="flex flex-col items-end justify-center mx-32 hero-section">
                    <div className="flex flex-col items-center justify-center pr-64 pb-28">
                        <div className="flex flex-col items-center mb-6">
                            <h1 className="text-4xl">Zacznij pomagać!</h1>
                            <p className="text-4xl">Oddaj niechciane rzeczy w zaufane ręce</p>
                        </div>
                        <img
                            src="../public/images/decoration-2x.png"
                            alt="decoration-image"
                            className="mb-12"
                        />
                        <div className="flex gap-4">
                            <button className="btn btn-hero">ODDAJ RZECZY</button>
                            <button className="btn btn-hero">ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
