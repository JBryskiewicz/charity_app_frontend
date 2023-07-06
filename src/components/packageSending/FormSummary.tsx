import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";
import {FormSummaryHandover} from "@/components/packageSending/FormSummaryHandover";
import {FormSummaryAddress} from "@/components/packageSending/FormSummaryAddress";
import {FormSummaryDate} from "@/components/packageSending/FormSummaryDate";

export function FormSummary({step, setStep}: DonationFormProps) {

    return (
        <section className="flex flex-col mx-32 pt-16 package-sending-section">
            <h4 className="text-4xl mb-4">Podsumowanie twojej darowizny</h4>
            <div className="flex flex-col gap-4 w-1/2 input-container ">
                <FormSummaryHandover/>
                <div className="flex justify-between mt-4 input-container donation-summary-date">
                    <FormSummaryAddress/>
                    <FormSummaryDate/>
                </div>
            </div>
            <DonationNavButtons
                isFirst={false}
                step={step}
                setStep={setStep}
            />
        </section>
    );
}