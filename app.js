const SITE='https://www.123-hdc.com/';
const frame=document.getElementById('siteframe');
document.getElementById('openBtn').addEventListener('click',()=>window.open(SITE,'_blank','noopener'));
document.getElementById('reloadBtn').addEventListener('click',()=>{frame.src=SITE;document.getElementById('fallback').hidden=true;});
let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;const b=document.getElementById('installBtn');b.hidden=false;b.addEventListener('click',async()=>{deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;b.hidden=true;},{once:true});});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
// If framing is blocked by the source site, the explicit open-in-browser action remains available.
setTimeout(()=>{try{if(!frame.contentWindow || frame.contentDocument?.body?.innerHTML===''){document.getElementById('fallback').hidden=false;}}catch(e){/* Cross-origin access is expected; leave the direct-open button visible. */}},5000);
