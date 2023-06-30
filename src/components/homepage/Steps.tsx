import shirt from "@/assets/images/Icon_shirt@2x.png";
import bag from "@/assets/images/Icon_bag@2x.png";
import glass from "@/assets/images/Icon_glass@2x.png";
import circle from "@/assets/images/Icon_circle@2x.png";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import {StepsImage} from "@/components/reusable/StepsImage";
import Link from "next/link";

export function Steps() {
    return (
        <section className="flex flex-col justify-center items-center mt-14">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl mb-6">Wystarczają 4 proste kroki</h2>
                <DecorativeImage className={'mb-12 w-1/2'}/>
            </div>
            <div className="flex justify-around w-full h-80 steps">
                <div className="steps-container">
                    <StepsImage picture={shirt} iconName="shirt"/>
                    <p className="steps-feature">Wybierz rzeczy</p>
                    <p className="steps-description">ubrania, zabawki, sprzet i inne</p>
                </div>
                <div className="steps-container">
                    <StepsImage picture={bag} iconName="bag"/>
                    <p className="steps-feature">Spakuj je</p>
                    <p className="steps-description">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps-container">
                    <StepsImage picture={glass} iconName="glass"/>
                    <p className="steps-feature">Zdecyyduj komu chcesz pomóc</p>
                    <p className="steps-description">wybierz zaufane miejsce</p>
                </div>
                <div className="steps-container">
                    <StepsImage picture={circle} iconName="circle"/>
                    <p className="steps-feature">Zamów kuriera</p>
                    <p className="steps-description">kurier przyjdzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="mb-20">
                <Link href="/login"><button className="btn btn-hero">ODDAJ RZECZY</button></Link>
            </div>
        </section>
    );
}