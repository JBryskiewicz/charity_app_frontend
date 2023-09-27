import {render, screen} from "@testing-library/react";
import {About} from "../About";
import signature from "@/assets/images/Signature2x.png";

const PARAGRAPH = 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts' +
    ' black-eyed pea prairie turnip leek lentil turnip greens parsnip.'

describe("About component (homepage)", () => {
    it('should render component correctly', function () {
        render(<About/>);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();

        const paragraph = screen.getByText(PARAGRAPH);
        expect(paragraph).toBeInTheDocument();

        const signatureImage = screen.getByAltText('signature');
        expect(signatureImage).toBeInTheDocument();

        const backgroundImage = screen.getByAltText('group of people');
        expect(backgroundImage).toBeInTheDocument();
    });
});