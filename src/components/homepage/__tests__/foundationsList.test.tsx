import {foundationList, institutionList, localsList} from "@/utility/mockData";
import {render, screen} from "@testing-library/react";
import {FoundationsList} from "@/components/homepage/FoundationsList";
import user from "@testing-library/user-event";

describe("Foundations List component (homepage)", () => {
    it('should render initial component state correctly', function () {
        render(<FoundationsList list={foundationList} tab={0}/>);
        let check = 0;
        while(check < 3) {
            const name = screen.getByText(foundationList[check].name);
            const goal = screen.getByText(`Cel i Misja: ${foundationList[check].goal}`);

            expect(name).toBeInTheDocument();
            expect(goal).toBeInTheDocument();

            check += 1;
        }

        let tab = 1;
        while(tab < 5) {
            const button = screen.getByRole('button', { name: `${tab}`});
            expect(button).toBeInTheDocument();

            tab += 1;
        }
    });

    it('should ', async function () {
        render(<FoundationsList list={foundationList} tab={0}/>);

        const tabButton = screen.getByRole('button', { name : '2' });
        await user.click(tabButton);

        let check = 3;
        while(check < 6) {
            const name = screen.getByText(foundationList[check].name);
            const goal = screen.getByText(`Cel i Misja: ${foundationList[check].goal}`);

            expect(name).toBeInTheDocument();
            expect(goal).toBeInTheDocument();

            check += 1;
        }
    });
});