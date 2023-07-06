import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";

export function FormStepFour({step, setStep}: DonationFormProps) {
    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            {
                // TODO elements go here
                // TODO buttons section should be separate reusable component :)
            }
            <DonationNavButtons isFirst={false} step={step} setStep={setStep}/>
        </section>
    );
}