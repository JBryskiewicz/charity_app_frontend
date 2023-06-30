export function Header() {
    return (
        <header className="mx-32">
            <div className="flex justify-end py-4 gap-8">
                <button className="btn login">Zaloguj</button>
                <button className="btn login">Załóż konto</button>
            </div>
            <nav>
                <ul className="flex justify-end gap-8 text-lg">
                    <li className="btn navigational">
                        <a href={"#start"}>Start</a>
                    </li>
                    <li className="btn navigational">
                        <a href={"#stats"}>O co chodzi?</a>
                    </li>
                    <li className="btn navigational">
                        <a href={"#about"}>O nas</a>
                    </li>
                    <li className="btn navigational">
                        <a href={"#foundations"}>Fundacje i organizacje</a>
                    </li>
                    <li className="btn navigational">
                        <a href={"#"}>Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}