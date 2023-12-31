import {DonationNavButtonProps} from "@/utility/types";

export function DonationNavButtons({step, setStep, isFirst, isValidated}: DonationNavButtonProps) {

    if (!isFirst) {
        return (
            <div className="form-button-box">
                <button
                    className="btn btn-form-steps mr-12"
                    onClick={() => setStep(step - 1)}
                >
                    Wstecz
                </button>
                <button
                    disabled={ !isValidated ? true : false }
                    className="btn btn-form-steps"
                    onClick={() => setStep(step + 1)}
                >
                    Dalej
                </button>
            </div>
        );
    }

    return (
        <div className="form-button-box">
            <button
                disabled={ !isValidated ? true : false }
                className="btn btn-form-steps"
                onClick={() => setStep(step + 1)}
            >
                Dalej
            </button>
        </div>
    )
}