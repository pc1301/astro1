// export const prerender = false;

export const GET = async () => {

    const res = await fetch("http://api.sampleapis.com/coffee/hot")
    const data = await res.json()
    
    return new Response(
        JSON.stringify(data),
        // data,
        {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
        }
    )
}