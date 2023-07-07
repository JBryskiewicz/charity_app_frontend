'use client'
import {DonationFormProps} from "@/utility/types";
import {FormSummaryHandover} from "@/components/packageSending/FormSummaryHandover";
import {FormSummaryAddress} from "@/components/packageSending/FormSummaryAddress";
import {FormSummaryDate} from "@/components/packageSending/FormSummaryDate";
import {FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {RESET_STATE} from "@/redux/donationSlice";
import {addDoc, collection} from "@firebase/firestore";
import {firestore} from "@/firebase";

export function FormSummary({step, setStep}: DonationFormProps) {
    const donation = useSelector((state: RootState) => state.donation);
    const dispatch = useDispatch();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            await addDoc(collection(firestore, "donations"), {
                donation: donation,
            })
        } catch (e) {
            console.log("Attempt to submit data to database resulted with: " + e);
        }

        await dispatch(RESET_STATE());
        await setStep(step + 1);
    }

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
            <form onSubmit={handleSubmit}>
                <div className="form-button-box">
                    <button
                        className="btn btn-form-steps mr-12"
                        onClick={() => setStep(step - 1)}
                    >
                        Wstecz
                    </button>
                    <button
                        className="btn btn-form-steps btn-form-steps-submit"
                        type="submit"
                    >
                        Potwierdzam
                    </button>
                </div>
            </form>
        </section>
    );
}