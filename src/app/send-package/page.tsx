'use client'
import {Header} from "@/components/reusable/Header";
import {FormIntro} from "@/components/packageSending/FormIntro";
import {Contact} from "@/components/homepage/Contact";
import {FormStepOne} from "@/components/packageSending/FormStepOne";
import formBackground from "@/assets/images/form-steps-background.png"
import {FormWarning} from "@/components/packageSending/FormWarning";
import {useState} from "react";
import {FormStepTwo} from "@/components/packageSending/FormStepTwo";
import {FormStepThree} from "@/components/packageSending/FormStepThree";
import {FormStepFour} from "@/components/packageSending/FormStepFour";
import {FormSummary} from "@/components/packageSending/FormSummary";
import {FormDonationThanks} from "@/components/packageSending/FormDonationThanks";

function PackageSending() {
    const [step, setStep] = useState<number>(1);

    return (
        <>
            <Header isHome={false}/>
            <FormIntro/>
            { step === 6 ? null : <FormWarning/>}
            <div style={{
                backgroundImage: `url(${formBackground.src})`,
                backgroundSize: 'cover'
            }}>
                {(() => {
                    switch (step) {
                        case 1:
                            return <FormStepOne step={step} setStep={setStep}/>
                        case 2:
                            return <FormStepTwo step={step} setStep={setStep}/>
                        case 3:
                            return <FormStepThree step={step} setStep={setStep}/>
                        case 4:
                            return <FormStepFour step={step} setStep={setStep}/>
                        case 5:
                            return <FormSummary step={step} setStep={setStep}/>
                        case 6:
                            return <FormDonationThanks/>
                        default:
                            return null
                    }
                })()}
            </div>
            <Contact/>
        </>
    );
}

export default PackageSending