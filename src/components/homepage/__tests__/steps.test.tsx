import {render, screen} from "@testing-library/react";
import {Steps} from "@/components/homepage/Steps";

function stepMaker(feature: string, description: string){
    const featureElement = screen.getByText(feature);
    const descriptionElement = screen.getByText(description);
    expect(featureElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
}

describe("Steps component (homepage)", () => {
    it('should render header element correctly', function () {
        render(<Steps/>);

        const heading = screen.getByRole('heading', { name: 'Wystarczają 4 proste kroki' });
        expect(heading).toBeInTheDocument();
    });

    it('should render steps correctly', function () {
        render(<Steps/>);

        stepMaker(
            'Wybierz rzeczy',
            'ubrania, zabawki, sprzet i inne'
        );
        stepMaker(
            'Spakuj je',
            'skorzystaj z worków na śmieci'
        );
        stepMaker(
            'Zdecyyduj komu chcesz pomóc',
            'wybierz zaufane miejsce'
        );
        stepMaker(
            'Zamów kuriera',
            'kurier przyjdzie w dogodnym terminie'
        );
    });

    it('should render linked button correctly', function () {
        render(<Steps/>);

        const donationButton = screen.getByRole('button');
        expect(donationButton).toBeInTheDocument();
        const donationLink = screen.getByRole('link');
        expect(donationLink).toHaveAttribute('href', '/login');
    });
});