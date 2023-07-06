import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";
import {FormStepFourAddress} from "@/components/packageSending/FormStepFourAddress";
import {FormStepFourTime} from "@/components/packageSending/FormStepFourTime";

export function FormStepFour({step, setStep}: DonationFormProps) {
    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl mb-4">Podaj adres oraz termin odbioru rzecz przez kuriera</h4>
            <div className="flex justify-between gap-12 input-container">
                <FormStepFourAddress/>
                <FormStepFourTime/>
            </div>
            <DonationNavButtons isFirst={false} step={step} setStep={setStep}/>
        </section>
    );
}