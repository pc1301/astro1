/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B98FuAmO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BdNiQbKg.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> the new about page</p> ` })}`;
}, "C:/Workspace/Projects/nuclear-nova/src/pages/about.astro", void 0);

const $$file = "C:/Workspace/Projects/nuclear-nova/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
