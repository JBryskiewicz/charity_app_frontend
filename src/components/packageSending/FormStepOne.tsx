'use client'
import {useState} from "react";
import {radioOptions} from "@/utility/mockData";

const initialRadios = [false, false, false, false, false]

export function FormStepOne() {
    const [isChecked, setIsChecked] = useState<boolean[]>(initialRadios);

    const handleClick = (index: number) => () => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    }

    return (
        <section className="mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok 1/4</p>
            <h4 className="text-4xl">Zaznacz co chcesz oddać:</h4>
            <div className="flex flex-col gap-8 mt-16 mb-16">
                {
                    radioOptions.map((e, index) => (
                        <label key={index} className="radio-label" htmlFor="cloth-good">
                            <input
                                className="radio-button"
                                type="radio"
                                value={e.name}
                                id={e.name}
                                checked={isChecked[index]}
                                onClick={handleClick(index)}
                            />
                            {e.description}
                        </label>
                    ))
                }
            </div>
            <button className="btn btn-form-steps">Dalej</button>
        </section>
    );
}