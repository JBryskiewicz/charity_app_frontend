'use client'
import Link from "next/link";
import { ReactNode } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase";
import {signOut} from "@firebase/auth";

type Props = {
    isHome: boolean;
}

const Loading = ({ isLoading, children }: { isLoading: boolean, children: ReactNode }) => isLoading
    ? (<div className="flex justify-end py-4 gap-8">
        <p className="text-font-color" style={{padding: '9px', fontSize: '16px'}}>
            Loading...
        </p>
    </div>)
    : children;

export function Header({isHome}: Props) {
    const [user, loading] = useAuthState(auth);

    const visitorActions = (
        <div className="flex justify-end py-4 gap-8">
            <Link href={"/login"}>
                <button className="btn login-action">Zaloguj</button>
            </Link>
            <Link href={"/register"}>
                <button className="btn login-action">Załóż konto</button>
            </Link>
        </div>
    )

    const userActions = (
        <div className="flex justify-end py-4 gap-8">
            <p className="self-center text-font-color text-lg"> Cześć {user?.email} </p>
            <Link href={"/send-package"}>
                <button className="btn login-action">Oddaj Rzeczy</button>
            </Link>
            <Link href={"/logged-out"}>
                <button className="btn login-action" onClick={() => signOut(auth)}>Wyloguj</button>
            </Link>
        </div>
    )

    return (
        <header className="mx-32">
            <Loading isLoading={loading}>
                {user !== null ? userActions : visitorActions}
            </Loading>
            <nav>
                <ul className="flex justify-end gap-8 text-lg">
                    <li className="btn navigational">
                        <Link href={isHome ? "#start" : `/#start`}>Start</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={isHome ? "#stats" : `/#stats`}>O co chodzi?</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={isHome ? "#about" : `/#about`}>O nas</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={isHome ? "#foundations" : `/#foundations`}>Fundacje i organizacje</Link>
                    </li>
                    <li className="btn navigational">
                        <Link href={isHome ? "#contact" : `/#contact`}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}