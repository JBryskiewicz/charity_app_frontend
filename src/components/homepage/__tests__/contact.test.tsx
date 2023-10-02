import {render, screen} from "@testing-library/react";
import {Contact} from "@/components/homepage/Contact";

describe("Contact component (homepage)", () => {
    it('should render component correctly', function () {
        render(<Contact/>);

        const backgroundImage = screen.getByAltText('background image - contact section');
        expect(backgroundImage).toBeInTheDocument();

        const heading = screen.getByRole('heading', { name: 'Skontaktuj się z nami' });
        expect(heading).toBeInTheDocument();
    });
})