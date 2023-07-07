import {DecorativeImage} from "@/components/reusable/DecorativeImage";

export function FormDonationThanks() {
    return (
        <section className="flex flex-col mx-32 pt-16 package-sending-section">
            <div className="flex flex-col justify-center items-center donation-thanks-box">
                <h4 className="text-4xl mb-4">Dziękujemy za przesłanie formularza</h4>
                <h4 className="text-4xl mb-4">Na maila prześlemy wszystkie informacje o odbiorze</h4>
                <DecorativeImage className='donation-thanks-decoration'/>
            </div>
        </section>
    );
}