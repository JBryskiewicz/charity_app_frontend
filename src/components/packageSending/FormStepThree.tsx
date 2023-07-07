import {FormStepThreeLocations} from "@/components/packageSending/FormStepThreeLocations";
import {FormStepThreeTargets} from "@/components/packageSending/FormStepThreeTargets";
import {FormStepThreeOrganization} from "@/components/packageSending/FormStepThreeOrganization";
import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";
import {useEffect, useState} from "react";

export function FormStepThree({step, setStep}: DonationFormProps) {
    const [areFieldsValidated, setAreFieldsValidated] = useState<boolean[]>([false, false]);
    const [isValidated, setIsValidated] = useState<boolean>(true);

    useEffect(() => {
        const validator = (areFieldsValidated[0] && areFieldsValidated[1]);
        setIsValidated(validator);
    }, [areFieldsValidated])

    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <FormStepThreeLocations setAreFieldsValidated={setAreFieldsValidated}/>
            <FormStepThreeTargets setAreFieldsValidated={setAreFieldsValidated}/>
            <FormStepThreeOrganization/>
            {!isValidated ? <p className="text-red-800">* Musisz wybrać lokalizacje i przynajmniej jedną grupę aby kontynuować</p> : null}
            <DonationNavButtons
                isFirst={false}
                isValidated={isValidated}
                step={step}
                setStep={setStep}
            />
        </section>
    );
}