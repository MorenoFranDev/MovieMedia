export function CharactersCard({character}){
  const ImgProfile = 'https://image.tmdb.org/t/p/w154'+character.profile_path
  return(
    <div className="cardperson">
        <img src={ImgProfile}/>
        <h3>{character.name}</h3>
    </div>
  )
}