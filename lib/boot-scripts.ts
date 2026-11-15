// Inline scripts that run before first paint (rendered in the root layout).
// Kept in a plain module: exporting them from a "use client" file would turn
// them into client references on the server.

/** Sets the theme (saved choice, else system) and flags JS + motion so reveal animations can hide content until they run. */
export const themeScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-motion')}}catch(e){}})();`;

/** Skips the branded loader when it was already shown this session, or with reduced motion. */
export const loaderScript = `(function(){try{var d=document.documentElement;if(sessionStorage.getItem('sw-loaded')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('no-loader')}else{sessionStorage.setItem('sw-loaded','1')}}catch(e){document.documentElement.classList.add('no-loader')}})();`;
