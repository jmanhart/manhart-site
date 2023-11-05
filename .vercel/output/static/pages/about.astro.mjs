export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_9eb0682c.mjs').then(n => n.c);

export { page };
