/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_B98FuAmO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BdNiQbKg.mjs';
import { createClient } from '@libsql/client/web';
export { renderers } from '../renderers.mjs';

const turso = createClient({
  // url: import.meta.env.TURSO_DATABASE_URL,
  // url: process.env.TURSO_DATABASE_URL,
  url: "libsql://mydb1-pc1301.turso.io",
  // authToken: import.meta.env.TURSO_AUTH_TOKEN,
  // authToken: process.env.TURSO_AUTH_TOKEN,
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjgwNDE4OTcsImlkIjoiMjQyZGVjZmUtNDcxYy00ODkwLTkyZGYtMTU4Y2NhMTViYjUwIn0.XlALDRANudavZkkYf1r4Gt07IwUQm3IsoZ5JP5SieTmaXONCUwAIkpRq9Fo85MG5bWTXbhrQ7DR3ozWnbJcoAQ"
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { rows } = await turso.execute("SELECT * FROM users");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Hello my first page 2</p> <h1>The current URL is: ${Astro2.url}</h1> <h1>The current URL pathname is: ${Astro2.url.pathname}</h1> <h1>The current URL origin is: ${Astro2.url.origin}</h1>   <ul> ${rows.map((post) => renderTemplate`<li>${post.name}</li>`)} </ul> ` })}`;
}, "C:/Workspace/Projects/nuclear-nova/src/pages/index.astro", void 0);

const $$file = "C:/Workspace/Projects/nuclear-nova/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
