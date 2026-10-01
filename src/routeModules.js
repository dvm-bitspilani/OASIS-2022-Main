const routes = {
  "/sponsors": () => import("./Pages/Sponsors"),
  "/developers": () => import("./Pages/Developers"),
  "/mediaPartners": () => import("./Pages/Media"),
  "/eclipse": () => import("./Pages/Eclipse"),
  "/wallmag": () => import("./Pages/Wallmag"),
};
const pending = new Map();
const normalize = path => path.replace(/\/$/, "");
export function loadRoute(path) {
  const key = normalize(path);
  if (!routes[key]) return Promise.resolve(null);
  if (!pending.has(key)) pending.set(key, routes[key]().catch(error => { pending.delete(key); throw error; }));
  return pending.get(key);
}
export function prefetchRoute(path) { loadRoute(path).catch(() => {}); }
export const routeLoader = path => async () => ({ Component: (await loadRoute(path)).default });
