import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export function FormSummaryAddress() {
    const donation = useSelector((state: RootState) => state.donation);

    return (
        <div className="form-summary-address-box">
            <p className="text-bold mb-4">Adres odbioru:</p>
            <div className="donation-details-box">
                <p>Ulica:</p>
                <p>{donation.street}</p>
            </div>
            <div className="donation-details-box">
                <p>Miasto:</p>
                <p>{donation.city}</p>
            </div>
            <div className="donation-details-box">
                <p>Kod Pocztowy:</p>
                <p>{donation.postCode}</p>
            </div>
            <div className="donation-details-box">
                <p>Numer Telefony:</p>
                <p>{donation.phoneNumber}</p>
            </div>
        </div>
    );
}