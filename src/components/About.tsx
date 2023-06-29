import {DecorativeImage} from "@/components/DecorativeImage";
import signature from "@/assets/images/Signature2x.png";
import people from "@/assets/images/people2x.png";

export function About() {
    return (
        <section className="flex about" id="about">
            <div className="flex flex-col justify-center items-center about-container">
                <h3>O nas</h3>
                <DecorativeImage className={'about-decoration'}/>
                <p className="text-center px-40 about-paragraph">Nori grape silver beet broccoli kombu beet greens
                    fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                    greens parsnip.</p>
                <img
                    src={signature.src}
                    alt="signature"
                    className="about-signature"
                />
            </div>
            <div className="about-container">
                <img
                    src={people.src}
                    alt="group of people"
                />
            </div>
        </section>
    );
}