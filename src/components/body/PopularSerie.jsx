import "./VideoClasses.css"
export default function PopularSerie({ original_name, backdrop_path }) {
  return (
    <div className="card_popular">
      <p className="title_popular">{original_name}</p>
      <div className="body_card_populate">
        <img src={"https://image.tmdb.org/t/p/w300/" + backdrop_path} />
      </div>
    </div>
  )
}
