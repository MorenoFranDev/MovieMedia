import './VideoClasses.css'

export default function BannerMovie({ title, overview, poster_path }) {
    return (
        <div className="card_banner">
            <p className="title_banner">{title}</p>
            <div className="body_card_banner">
                <img src={"https://image.tmdb.org/t/p/w185/" + poster_path} />
                {/* <div className="text" > */}
                {/* <p className=overview}>{overview}</p> */}
                {/* </div> */}
            </div>
        </div>)
}
