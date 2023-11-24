export const GA_TRACKING_ID = "G-CNDT8S68XJ"; // replace with your Measurement ID

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag("event", "page_view", {
    page_location: url,
  });
};
