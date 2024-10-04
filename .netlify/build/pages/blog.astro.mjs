/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B98FuAmO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BdNiQbKg.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ol> <li><a href="/posts/post1"> first post</a></li> <li><a href="/posts/post2"> Second post</a></li> <li><a href="/posts/post3"> Thrid post</a></li> </ol> ` })}`;
}, "C:/Workspace/Projects/nuclear-nova/src/pages/blog.astro", void 0);

const $$file = "C:/Workspace/Projects/nuclear-nova/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
