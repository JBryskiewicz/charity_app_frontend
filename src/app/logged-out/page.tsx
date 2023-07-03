import {Header} from "@/components/reusable/Header";
import React from "react";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import Link from "next/link";

function LogoutPage() {
    return (
        <>
            <Header isHome={false}/>
            <main className="w-full">
                <div className="flex flex-col items-center justify-center gap-12 logout-box">
                    <h1 className="w-1/4 text-5xl text-font-color text-center">Wylogowanie nastąpiło pomyślnie!</h1>
                    <DecorativeImage className={'logout-decoration'}/>
                    <Link href="/">
                        <button className="btn btn-login">Strona główna</button>
                    </Link>
                </div>
            </main>
        </>
    );
}

export default LogoutPage