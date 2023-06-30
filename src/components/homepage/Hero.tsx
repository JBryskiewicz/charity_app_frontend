import background from "@/assets/images/hero-image.jpg";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import Image from "next/image";

export function Hero() {
    return (
        <section className="flex flex-col items-end justify-center mx-32 hero-section">
            <Image
                src={background}
                alt="background image"
                className="hero-background"
            />
            <div className="flex flex-col items-center justify-center pr-48 pb-28">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-4xl">Zacznij pomagać!</h1>
                    <p className="text-4xl">Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
                <DecorativeImage className={'mb-12 w-1/2'}/>
                <div className="flex gap-4">
                    <button className="btn btn-hero">ODDAJ RZECZY</button>
                    <button className="btn btn-hero">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </section>
    );
}