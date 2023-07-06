import {FormStepThreeLocations} from "@/components/packageSending/FormStepThreeLocations";
import {FormStepThreeTargets} from "@/components/packageSending/FormStepThreeTargets";
import {FormStepThreeOrganization} from "@/components/packageSending/FormStepThreeOrganization";
import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";

export function FormStepThree({step, setStep}: DonationFormProps) {
    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <FormStepThreeLocations/>
            <FormStepThreeTargets/>
            <FormStepThreeOrganization/>
            <DonationNavButtons isFirst={false} step={step} setStep={setStep}/>
        </section>
    );
}