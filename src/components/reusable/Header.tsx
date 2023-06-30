import Link from "next/link";

const HOME_URL = "http://localhost:3000/"

type Props = {
    isHome: boolean;
}

export function Header({ isHome }: Props) {
    return (
        <header className="mx-32">
            <div className="flex justify-end py-4 gap-8">
                <Link href={"/login"}><button className="btn login-action">Zaloguj</button></Link>
                <Link href={"/register"}><button className="btn login-action">Załóż konto</button></Link>
            </div>
            <nav>
                <ul className="flex justify-end gap-8 text-lg">
                    <li className="btn navigational">
                        <Link href={ isHome ? "#start" : `${HOME_URL}/#start`}>Start</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={ isHome ? "#stats" : `${HOME_URL}/#stats`}>O co chodzi?</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={ isHome ? "#about" : `${HOME_URL}/#about`}>O nas</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={ isHome ? "#foundations" : `${HOME_URL}/#foundations`}>Fundacje i organizacje</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={ isHome ? "#contact" : `${HOME_URL}/#contact`}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}