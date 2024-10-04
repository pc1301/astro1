import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderHead, d as renderComponent, f as renderSlot, b as createAstro } from './astro/server_B98FuAmO.mjs';
import 'kleur/colors';
import 'clsx';

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/"> Home </a> <a href="/about"> About </a> <a href="/blog"> Blog </a>`;
}, "C:/Workspace/Projects/nuclear-nova/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Workspace/Projects/nuclear-nova/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
