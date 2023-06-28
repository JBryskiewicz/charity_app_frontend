export function Header() {
    return (
        <header className="mx-32">
            <div className="flex justify-end my-4 gap-8">
                <button className="btn-header login">Zaloguj</button>
                <button className="btn-header login">Załóż konto</button>
            </div>
            <nav>
                <ul className="flex justify-end gap-8 text-lg">
                    <li className="btn-header navigational">
                        <a href={"#"}>Start</a>
                    </li>
                    <li className="btn-header navigational">
                        <a href={"#"}>O co chodzi?</a>
                    </li>
                    <li className="btn-header navigational">
                        <a href={"#"}>O nas</a>
                    </li>
                    <li className="btn-header navigational">
                        <a href={"#"}>Fundacje i organizacje</a>
                    </li>
                    <li className="btn-header navigational">
                        <a href={"#"}>Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}