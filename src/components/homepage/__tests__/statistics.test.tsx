import {render, screen} from "@testing-library/react";
import {Statistics} from "@/components/homepage/Statistics";

describe("Statistics component (homepage)", () => {
    it('should render components left section correctly', function () {
        render(<Statistics/>);

        const headingLeft = screen.getByRole('heading', { name: '10'});
        expect(headingLeft).toBeInTheDocument();
        const paragraphLeft = screen.getByText('oddanych worków');
        expect(paragraphLeft).toBeInTheDocument();
    });

    it('should render components middle section correctly', function () {
        render(<Statistics/>);

        const headingMid = screen.getByRole('heading', { name: '5'});
        expect(headingMid).toBeInTheDocument();
        const paragraphMid = screen.getByText('wspartych organizacji');
        expect(paragraphMid).toBeInTheDocument();
    });

    it('should render components right section correctly', function () {
        render(<Statistics/>);

        const headingRight = screen.getByRole('heading', { name: '7'});
        expect(headingRight).toBeInTheDocument();
        const paragraphRight = screen.getByText('zorganizowanych zbiórek');
        expect(paragraphRight).toBeInTheDocument();
    });

    it('should render 3 exact same paragraphs in each section', function () {
        render(<Statistics/>);

        const descriptionElement = screen.getAllByText(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        );
        for (let e in descriptionElement){
            expect(descriptionElement[e]).toBeInTheDocument();
        }
    });
});