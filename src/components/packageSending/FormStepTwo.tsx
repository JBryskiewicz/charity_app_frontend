import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setQuantity} from "@/redux/donationSlice";
import {RootState} from "@/redux/store";
import {DonationFormProps} from "@/utility/types";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";

export function FormStepTwo({step, setStep}: DonationFormProps) {
    const quantity = useSelector((state: RootState) => state.donation.quantity);
    const dispatch = useDispatch();

    function handleQuantity(event: ChangeEvent<HTMLInputElement>) {
        const input = parseInt(event.target.value);
        const newQuantity = input < 0 ? '0' : event.target.value;
        dispatch(setQuantity(newQuantity));
    }

    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
            <div className="flex gap-2 mt-16 mb-16">
                <span>Liczba 60l worków:</span>
                <input
                    value={quantity}
                    onChange={handleQuantity}
                    type="number"
                    className="bag-number"
                />
            </div>
            <DonationNavButtons isFirst={false} step={step} setStep={setStep}/>
        </section>
    );
}