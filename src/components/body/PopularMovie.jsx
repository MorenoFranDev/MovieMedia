import "./VideoClasses.css"

export default function PopularMovie({ title, backdrop_path }) {
  return (
    <div className="card_popular">
      <p className="title_popular">{title}</p>
      <div className="body_card_populate">
        <img src={"https://image.tmdb.org/t/p/w300/" + backdrop_path} />
      </div>
    </div>
  )
}
