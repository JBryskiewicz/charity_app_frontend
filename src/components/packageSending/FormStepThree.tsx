import {Dispatch, SetStateAction} from "react";
import {FormStepThreeLocations} from "@/components/packageSending/FormStepThreeLocations";
import {FormStepThreeTargets} from "@/components/packageSending/FormStepThreeTargets";
import {FormStepThreeOrganization} from "@/components/packageSending/FormStepThreeOrganization";

type Props = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>
}

export function FormStepThree({step, setStep}: Props) {
    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <FormStepThreeLocations/>
            <FormStepThreeTargets/>
            <FormStepThreeOrganization/>
            <div className="form-button-box">
                <button
                    className="btn btn-form-steps mr-12"
                    onClick={() => setStep(step - 1)}
                >
                    Wstecz
                </button>
                <button
                    className="btn btn-form-steps"
                    onClick={() => setStep(step + 1)}
                >
                    Dalej
                </button>
            </div>
        </section>
    );
}