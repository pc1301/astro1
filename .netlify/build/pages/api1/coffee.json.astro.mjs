export { renderers } from '../../renderers.mjs';

// export const prerender = false;

// import { db, Inquiry } from "astro:db"

const GET = async () => {

    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await res.json();

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
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
