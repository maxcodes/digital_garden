import "./src/styles/global.scss";
import "./src/styles/bootstrap.scss";

export const onClientEntry = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .getRegistrations()
      .then(registrations =>
        Promise.all(registrations.map(registration => registration.unregister()))
      )
      .catch(() => {});

    if (window.caches) {
      caches
        .keys()
        .then(keys => Promise.all(keys.map(key => caches.delete(key))))
        .catch(() => {});
    }
  });
};
