const HOME_URL = "http://localhost:3000/"

type Props = {
    isHome: boolean;
}

export function Header({ isHome }: Props) {
    return (
        <header className="mx-32">
            <div className="flex justify-end py-4 gap-8">
                <a href={"/login"}><button className="btn login-action">Zaloguj</button></a>
                <a href={"/register"}><button className="btn login-action">Załóż konto</button></a>
            </div>
            <nav>
                <ul className="flex justify-end gap-8 text-lg">
                    <li className="btn navigational">
                        <a href={ isHome ? "#start" : `${HOME_URL}/#start`}>Start</a>
                    </li>
                    <li className="btn navigational">
                        <a href={ isHome ? "#stats" : `${HOME_URL}/#stats`}>O co chodzi?</a>
                    </li>
                    <li className="btn navigational">
                        <a href={ isHome ? "#about" : `${HOME_URL}/#about`}>O nas</a>
                    </li>
                    <li className="btn navigational">
                        <a href={ isHome ? "#foundations" : `${HOME_URL}/#foundations`}>Fundacje i organizacje</a>
                    </li>
                    <li className="btn navigational">
                        <a href={ isHome ? "#contact" : `${HOME_URL}/#contact`}>Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}