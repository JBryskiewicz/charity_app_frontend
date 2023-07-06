import {Dispatch, SetStateAction} from "react";

type Props = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>
}

export function FormStepThree({step, setStep}: Props) {
    return (
        <section className="flex flex-col mx-32 pt-8 package-sending-section">
            <p className="mb-24">Krok {step}/4</p>
            <h4 className="text-4xl">Lokalizacja:</h4>
            <div className="flex gap-2 mt-4 mb-8">
                <span>LISTA WYBORU PLACEHOLDER</span>
            </div>
            <div className="mb-8">
                <h5 className="text-2xl">Komu chcesz pomóc?</h5>
                <p>Przyciski z wyborem PLACEHOLDER</p>
            </div>
            <div className="mb-8">
                <h5 className="text-2xl">Wpisz naszwę organizacji której chcesz pomóc (opcjonalne)</h5>
                <p>TEXT INPUT PLACEHOLDER</p>
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