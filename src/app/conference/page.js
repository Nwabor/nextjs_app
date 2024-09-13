import Link from "next/link"


export default function Page(){
    return(
        <>
          <h1>Welcome to Globamatics Conference</h1>
          <h2>
            <Link href="/conference/session">Session</Link>
          </h2>
          <h2>
            <Link href="/conference/session">Speaker</Link>
          </h2>
        </>
    )
}