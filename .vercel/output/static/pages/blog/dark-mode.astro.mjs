export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/dark-mode_ac55ed5a.mjs').then(n => n.d);

export { page };
