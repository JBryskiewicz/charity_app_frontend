import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {radioOptions} from "@/utility/mockData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {setCategory} from "@/redux/donationSlice";

type Props = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>
}

export function FormStepOne({step, setStep}: Props) {
    const category = useSelector((state: RootState) => state.donation.category);
    const dispatch = useDispatch();

    function handleRadio(event: ChangeEvent<HTMLInputElement>){
        dispatch(setCategory(event.target.value));
    }

    return (
        <section className="mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl">Zaznacz co chcesz oddać:</h4>
            <p>TEST: {category}</p>
            <div className="flex flex-col gap-8 mt-16 mb-16">
                {
                    radioOptions.map((e, index) => (
                        <label key={index} className="radio-label" htmlFor={e.name}>
                            <input
                                className="radio-button"
                                type="radio"
                                name="category"
                                value={e.name}
                                id={e.name}
                                onChange={handleRadio}
                            />
                            {e.description}
                        </label>
                    ))
                }
            </div>
            <div className="form-button-box">
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