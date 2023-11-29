import style from "./SeriesSeanson.module.css"
export default function SeriesSeason({ episode_count, name, poster_path, air_date }) {
    console.log({ episode_count, name, poster_path, air_date })
    return (
        <div className={style.card}>
            <div className={style.img_serie}>
                <img src={"https://image.tmdb.org/t/p/w185/" + poster_path} alt={name} />
            </div>
            <div className={style.car_body}>
                <p>
                    air date: {air_date}
                </p>
                <p>
                    {name}
                </p>
                <p>
                    episode: {episode_count}

                </p>
            </div>
        </div>
    )
}
