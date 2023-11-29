import style from "./Actors.module.css"
export default function Actors({ character, profile_path, original_name }) {

  // console.log(profile_path===null)
  return (
    <>
      {
        profile_path !== null && <div className={style.card} >
          <div className="img">
            <img src={"https://image.tmdb.org/t/p/w185/" + profile_path} alt={character} className={style.card_img} />
          </div>
          <h4>{character}</h4>
          <p>{original_name}</p>
        </div>
      }
    </>
  )
}