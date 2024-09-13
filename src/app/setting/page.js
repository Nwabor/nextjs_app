import Link from "next/link"
import style from "../rootStyle.module.css"

export default function(){
    return(
        <>
         <h1>This is the setting Page</h1>
         <h2>
            <Link className={style.menuLink} href="/home">Back To Home</Link>
         </h2>
        </>
    )
}