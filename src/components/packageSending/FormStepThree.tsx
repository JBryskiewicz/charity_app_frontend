import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {checkboxOptions, locationSelect} from "@/utility/mockData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {setLocation, setSpecifiedOrganization, setTargets} from "@/redux/donationSlice";

type Props = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>
}

export function FormStepThree({step, setStep}: Props) {
    const {location, charityTargets, specifiedOrganization} = useSelector((state: RootState) => state.donation);
    const dispatch = useDispatch();

    function handleSelect(event: ChangeEvent<HTMLSelectElement>){
        dispatch(setLocation(event.target.value));
    }

    function handleCheckbox(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const targetsCopy = [...charityTargets];

        event.target.checked
            ? dispatch(setTargets([...targetsCopy, value]))
            : dispatch(setTargets(targetsCopy.filter((e) => e !== value)))
    }

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setSpecifiedOrganization(event.target.value));
    }

    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl">Lokalizacja:</h4>
            <div className="flex gap-2 mt-4 mb-8">
                <div className="location-input">
                    <select value={location} onChange={handleSelect}>
                        {
                            locationSelect.map((element) => (
                                <option
                                    key={element.value}
                                    value={element.value}
                                >
                                    {element.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="mb-8">
                <h5 className="text-2xl mb-4">Komu chcesz pomóc?</h5>
                <div className="flex flex-wrap w-1/2">
                    {
                        checkboxOptions.map((element) => (
                            <label key={element} htmlFor={element} className="charity-target-label">
                                <input
                                    id={element}
                                    value={element}
                                    type="checkbox"
                                    className="charity-target-checkbox"
                                    onChange={handleCheckbox}
                                />
                                {element}
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className="mb-8">
                <h5 className="text-2xl mb-4">Wpisz nazwę organizacji której chcesz pomóc (opcjonalne)</h5>
                <input
                    value={specifiedOrganization}
                    type="text"
                    className="organization-input"
                    onChange={handleInput}
                />
            </div>
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