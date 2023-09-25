import { render, screen } from "@testing-library/react";
import { Header } from "@/components/reusable/Header";

function headerNavigation(isHome: boolean) {

    const startButton = screen.getByRole('link', { name: "Start" });
    expect(startButton).toHaveAttribute('href', isHome ? "#start" : `/#start`);

    const whyButton = screen.getByRole('link', { name: "O co chodzi?" });
    expect(whyButton).toHaveAttribute('href', isHome ? "#stats" : `/#stats`);

    const aboutButton = screen.getByRole('link', { name: "O nas" });
    expect(aboutButton).toHaveAttribute('href', isHome ? "#about" : `/#about`);

    const foundationButton = screen.getByRole('link', { name: "Fundacje i organizacje" });
    expect(foundationButton).toHaveAttribute('href', isHome ? "#foundations" : `/#foundations`);

    const contactButton = screen.getByRole('link', { name: "Kontakt" });
    expect(contactButton).toHaveAttribute('href', isHome ? "#contact" : `/#contact`);
}

describe("Header", () => {
    it('should render header component correctly in homepage', function () {
        const isHome = true;
        render(<Header isHome={isHome} />);
        headerNavigation(isHome);
    });

    it('should render header component correctly outside of homepage', function () {
        const isHome = false;
        render(<Header isHome={isHome} />);
        headerNavigation(isHome);
    });

    it('should render visitor buttons', async function () {
        render(<Header isHome={true} />);

        const loginButton = await screen.findByRole('link', { name: 'Zaloguj' });
        expect(loginButton).toHaveAttribute('href', '/login');

        const registerButton = await screen.findByRole('link', { name: 'Załóż konto' });
        expect(registerButton).toHaveAttribute('href', '/register');
    });
});