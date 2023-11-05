export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/dark-mode_60216e87.mjs').then(n => n.d);

export { page };
