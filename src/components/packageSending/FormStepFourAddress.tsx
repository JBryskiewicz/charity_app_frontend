import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ChangeEvent} from "react";
import {setCity, setPhoneNumber, setPostCode, setStreet} from "@/redux/donationSlice";

export function FormStepFourAddress() {
    const { street, city, postCode, phoneNumber } = useSelector((state: RootState) => state.donation);
    const dispatch = useDispatch();

    const handleInput = (identity: string) => (event: ChangeEvent<HTMLInputElement>) => {
        switch (identity) {
            case 'street':
                dispatch(setStreet(event.target.value));
                break;
            case 'city':
                dispatch(setCity(event.target.value));
                break;
            case 'code':
                dispatch(setPostCode(event.target.value));
                break;
            case 'phone':
                dispatch(setPhoneNumber(event.target.value));
                break;
            default:
                break;
        }
    }

    return (
        <div className="donation-address-box">
            <p>Adres odbioru:</p>
            <label
                htmlFor="street">
                Ulica
                <input
                    value={street}
                    onChange={handleInput( 'street')}
                    type="text"
                    id="street"
                    placeholder="ul.Prosta 19"
                />
            </label>
            <label
                htmlFor="city">
                Miasto
                <input
                    value={city}
                    onChange={handleInput( 'city')}
                    type="text"
                    id="city"
                    placeholder="Warszawa"
                />
            </label>
            <label
                htmlFor="postCode">
                Kod pocztowy
                <input
                    value={postCode}
                    onChange={handleInput( 'code')}
                    type="text"
                    id="postCode"
                    placeholder="00-001"
                />
            </label>
            <label
                htmlFor="phoneNumber">
                Numer telefonu
                <input
                    value={phoneNumber}
                    onChange={handleInput('phone')}
                    type="text"
                    id="phoneNumber"
                    placeholder="123-456-789"
                />
            </label>
        </div>
    );
}