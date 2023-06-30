import {Charity} from "@/utility/types";
import React, {useEffect, useState} from "react";

type Props = {
    list: Charity[];
    tab: number;
}

export function FoundationsList({ list, tab }: Props) {
    const pages = Math.ceil(list.length / 3);
    const [slicers, setSlicers] = useState<number[]>([0, 3]);

    useEffect(() => {
        setSlicers([0, 3]);
    }, [tab])

    function handlePageSwitch(index: number){
        index === 1 ? setSlicers([0, 3]) : setSlicers([3 * (index - 1), 3 * index]);
    }

    return (
        <div className="flex flex-col w-2/3 mb-12">
            <ul>
                {
                    list
                        .slice(slicers.at(0), slicers.at(1))
                        .map((element) => (
                        <li key={element.name} className="flex flex-around w-full mb-10 foundations-list-item">
                            <div className="w-1/2">
                                <p className="foundations-list-name">{element.name}</p>
                                <p className="foundations-list-description">Cel i Misja: {element.goal}</p>
                            </div>
                            <div className="flex justify-end items-center w-1/2">
                                {
                                    element.tags.map((tag) => (
                                        <span key={tag} className="ml-2 foundations-list-tag">{tag}</span>
                                    ))
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="flex gap-4 mt-8 self-center">
                {
                    Array.from(Array(pages)).map((_, index) => (
                        <button
                            key={index + 1}
                            className="btn btn-f-list"
                            onClick={() => handlePageSwitch(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}