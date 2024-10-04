// export const prerender = false;

// import { db, Inquiry } from "astro:db"

export const GET = async () => {

    const res = await fetch("https://api.sampleapis.com/coffee/hot")
    const data = await res.json()

    // const resInq = await db.select().from(Inquiry);
    // const data = await resInq.json()

    // console.log("resInq: " + JSON.stringify(resInq))

    return new Response(
        JSON.stringify(data),
        // resInq,
        {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
        }
    )
}