import style from "./style.css"

export default function ConferenceLayout({ children }) {
    return(
        <>
         <header style={style.header}>
            <h1>GLOBALMANTICS MANIACALLY TAKING TECH TO THE GLOBE </h1>
         </header>
            <section>{children}</section>

         
        </>
    )
}