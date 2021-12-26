export const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag("config", "G-6P9QCW850Y", {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
