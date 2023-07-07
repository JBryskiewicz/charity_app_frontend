import {ChangeEvent, useEffect, useState} from "react";
import {radioOptions} from "@/utility/mockData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {setCategory} from "@/redux/donationSlice";
import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";

export function FormStepOne({step, setStep}: DonationFormProps) {
    const [isValidated, setIsValidated] = useState<boolean>(true);
    const category = useSelector((state: RootState) => state.donation.category);
    const dispatch = useDispatch();

    useEffect(() => {
        if (category === "") {
            setIsValidated(false);
        }
    }, [category])

    function handleRadio(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setCategory(event.target.value));
        setIsValidated(true);
    }

    return (
        <section className="mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl">Zaznacz co chcesz oddać:</h4>
            <div className="flex flex-col gap-8 mt-16 mb-16">
                {
                    radioOptions.map((e, index) => (
                        <label key={index} className="radio-label" htmlFor={e.name}>
                            <input
                                className="radio-button"
                                type="radio"
                                name="category"
                                value={e.description}
                                id={e.name}
                                checked={category === e.description}
                                onChange={handleRadio}
                            />
                            {e.description}
                        </label>
                    ))
                }
            </div>
            {!isValidated ? <p className="text-red-800">* Musisz wybrać kategorię aby przejść dalej</p> : null}
            <DonationNavButtons
                isFirst={true}
                isValidated={isValidated}
                step={step}
                setStep={setStep}
            />

        </section>
    );
}