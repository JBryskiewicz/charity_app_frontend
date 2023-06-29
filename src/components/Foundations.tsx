'use client'
import {useEffect, useState} from "react";
import {DecorativeImage} from "@/components/DecorativeImage";
import {FoundationsList} from "@/components/FoundationsList";
import {Charity} from "@/utility/types";
import {foundationList, institutionList, localsList} from "@/utility/mockData";

export function Foundations() {
    const [tab, setTab] = useState<number>(0);
    const [charity, setCharity] = useState<Charity[]>(foundationList);

    useEffect(() => {
        if(tab === 0) {
            setCharity(foundationList);
        }

        if(tab === 1) {
            setCharity(institutionList);
        }

        if(tab === 2) {
            setCharity(localsList);
        }
    }, [tab]);

    return (
        <section className="flex flex-col items-center justify-center mt-10 foundations" id="foundations">
            <div className="mb-8">
                <h4 className="foundations-header">Komu pomagamy?</h4>
            </div>
            <DecorativeImage className={'mb-16 w-1/6'}/>
            <div className="flex gap-12 justify-center">
                <button
                    className={`btn btn-foundations ${tab === 0 ? 'btn-active' : null}`}
                    onClick={() => setTab(0)}
                >
                    Fundacjom
                </button>
                <button
                    className={`btn btn-foundations ${tab === 1 ? 'btn-active' : null}`}
                    onClick={() => setTab(1)}
                >
                    Organizacją pozarządowym
                </button>
                <button
                    className={`btn btn-foundations ${tab === 2 ? 'btn-active' : null}`}
                    onClick={() => setTab(2)}
                >
                    Lokalnym zbiórkom
                </button>
            </div>
            <p className="w-1/4 text-lg text-center my-10">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            <FoundationsList list={charity}/>
        </section>
    );
}