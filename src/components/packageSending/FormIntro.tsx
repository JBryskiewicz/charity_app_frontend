import Image from "next/image";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import background from "@/assets/images/header-form-background.png";

export function FormIntro() {
    return (
        <section className="flex flex-col items-end justify-center mx-32 hero-section">
            <Image
                src={background}
                alt="background image"
                className="form-intro-background"
            />
            <div className="flex flex-col items-center justify-center pr-48 pb-28">
                <div className="flex flex-col items-center mb-6">
                    <p className="text-4xl">Oddaj rzeczy, których już nie chcesz</p>
                    <h1 className="text-4xl">POTRZEBUJĄCYM</h1>
                </div>
                <DecorativeImage className={'mb-12 w-1/2'}/>
                <div className="flex flex-col gap-24">
                    <h2 className="text-4xl text-font-color self-center">Wystarczą 4 proste kroki:</h2>
                    <div className="flex gap-16">
                        <div className="intro-step-container">
                            <h4>1</h4>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="intro-step-container">
                            <h4>2</h4>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="intro-step-container">
                            <h4>3</h4>
                            <p>Wybierz fundacje</p>
                        </div>
                        <div className="intro-step-container">
                            <h4>4</h4>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}