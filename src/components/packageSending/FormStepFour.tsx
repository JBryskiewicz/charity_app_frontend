import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";
import {FormStepFourAddress} from "@/components/packageSending/FormStepFourAddress";
import {FormStepFourTime} from "@/components/packageSending/FormStepFourTime";
import {useEffect, useState} from "react";

export function FormStepFour({step, setStep}: DonationFormProps) {
    const [areFieldsValidated, setAreFieldsValidated] = useState<boolean[]>([false, false]);
    const [isValidated, setIsValidated] = useState<boolean>(true);

    useEffect(() => {
        const validator = (areFieldsValidated[0] && areFieldsValidated[1]);
        setIsValidated(validator);
    }, [areFieldsValidated])

    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl mb-4">Podaj adres oraz termin odbioru rzecz przez kuriera</h4>
            <div className="flex justify-between gap-12 input-container">
                <FormStepFourAddress setAreFieldsValidated={setAreFieldsValidated}/>
                <FormStepFourTime setAreFieldsValidated={setAreFieldsValidated}/>
            </div>
            {!isValidated ? <p className="text-red-800">* Musisz wypełnić wszystkie pola z gwiazdką</p> : null}
            <DonationNavButtons
                isFirst={false}
                isValidated={isValidated}
                step={step}
                setStep={setStep}
            />
        </section>
    );
}