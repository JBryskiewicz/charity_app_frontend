
import {Charity} from "@/utility/types";

type Props = {
    list: Charity[];
}

export function FoundationsList({ list }: Props) {
    return (
        <div className="flex flex-col w-2/3 mb-12">
            <ul>
                {
                    list.map((element) => (
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
                <button className="btn btn-f-list">1</button>
                <button className="btn btn-f-list">2</button>
                <button className="btn btn-f-list">3</button>
            </div>
        </div>
    );
}