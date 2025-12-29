/**
 * This wrapper dynamically appends a script tag for the generated IIFE under /assets.
 * Using an absolute path avoids CRA's restriction on importing files outside src.
 */
const SRC_URL = "/assets/home-screen-174-51.js";

function injectScriptOnce() {
  if (document.querySelector(`script[data-home17451="true"]`)) return;
  const s = document.createElement("script");
  s.src = SRC_URL;
  s.async = true;
  s.defer = true;
  s.dataset.home17451 = "true";
  document.body.appendChild(s);
}

injectScriptOnce();

export default {};
