import style from "./Superior.module.css"
// import genres from "../../genres.json"
import { useState } from "react";
export default function Superior() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article>
            <div className={style.navigator}>
                <div className={style.divgenres}>
                    <button onClick={() => setIsOpen(!isOpen)} className={style.button}>Find genre</button>
                    {/* {isOpen && (
                        <ul className={style.list}>
                            {genres.map((genre) => (<li className={style.item} key={genre.id}>
                                {genre.name}
                            </li>)
                            )
                            }
                        </ul>
                    )} */}
                </div>
                <form className={style.formfind}>
                    <input placeholder='Search for movies or TV series' />
                    <button className={style.button}>Find</button>
                </form>
            </div>
        </article>
    )
}
