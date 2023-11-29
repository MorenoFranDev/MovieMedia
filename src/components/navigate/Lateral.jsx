import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { FaTableCells } from "react-icons/fa6";
import style from './Lateral.module.css'
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";




export default function Lateral() {
  return (
    <nav>
      <Link to={"/"}>
      <MdMovie className={style.movie} />
      </Link>
      <div className={style.menu}>
      <Link to={"/movies"}><RiFilmFill className={style.icon}/></Link>
      <Link to={"/series"}><PiTelevisionFill className={style.icon}/></Link>
      <Link to={"/"}><FaTableCells className={style.icon}/></Link>
      </div>
      <div className={style.logo}>
      <img src="/user.jpg" alt="logo" className={style.logo_img} />
      </div>
    </nav>
  )
}

