import {checkboxOptions} from "@/utility/mockData";
import {ChangeEvent} from "react";
import {setTargets} from "@/redux/donationSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export function FormStepThreeTargets() {
    const charityTargets = useSelector((state: RootState) => state.donation.charityTargets);
    const dispatch = useDispatch();

    function handleCheckbox(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const targetsCopy = [...charityTargets];

        event.target.checked
            ? dispatch(setTargets([...targetsCopy, value]))
            : dispatch(setTargets(targetsCopy.filter((e) => e !== value)))
    }

    return (
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
    );
}