import Link from "next/link";
import style from "./page.module.scss"
import NavFront from "../Navigation";


const page = () => {
  return(
    <>
    <div className={style.MainBG}>
    <NavFront/>

    <div className={style.flexBox}>
      <h1>
        light in the <span className={style.orange}>box</span>
      </h1>
      <p>
        Contrary tot popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinktock, a latin professor at Hampden-sydney College in Virgina,
      </p>
      
      <p>looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in a classical literature, discovered the undiubtbke source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de</p>
    </div>
    </div>
    </>
  )
}

export default page;
