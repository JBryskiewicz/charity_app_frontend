import shirt from "@/assets/images/Icon_shirt@2x.png";
import bag from "@/assets/images/Icon_bag@2x.png";
import glass from "@/assets/images/Icon_glass@2x.png";
import circle from "@/assets/images/Icon_circle@2x.png";
import {DecorativeImage} from "@/components/DecorativeImage";
export function Steps() {
    return (
        <section className="flex flex-col justify-center items-center mt-14">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl mb-6">Wystarczają 4 proste kroki</h2>
                <DecorativeImage/>
            </div>
            <div className="flex justify-around w-full h-96 steps">
                <div className="steps-container">
                    <img
                        src={shirt.src}
                        alt="shirt image"
                        className="steps-image"
                    />
                    <p className="steps-feature">Wybierz rzeczy</p>
                    <p className="steps-description">ubrania, zabawki, sprzet i inne</p>
                </div>
                <div className="steps-container">
                    <img
                        src={bag.src}
                        alt="shopping bag image"
                        className="steps-image"
                    />
                    <p className="steps-feature">Spakuj je</p>
                    <p className="steps-description">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps-container">
                    <img
                        src={glass.src}
                        alt="magnifying glass image"
                        className="steps-image"
                    />
                    <p className="steps-feature">Zdecyyduj komu chcesz pomóc</p>
                    <p className="steps-description">wybierz zaufane miejsce</p>
                </div>
                <div className="steps-container">
                    <img
                        src={circle.src}
                        alt="circling arrows image"
                        className="steps-image"
                    />
                    <p className="steps-feature">Zamów kuriera</p>
                    <p className="steps-description">kurier przyjdzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="mb-20">
                <button className="btn btn-hero">ODDAJ RZECZY</button>
            </div>
        </section>
    );
}