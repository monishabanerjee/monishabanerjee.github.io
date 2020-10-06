function _(id){
return document.getElementById(id)}

function imgOpen(el){
let modal=new bootstrap.Modal(_("imgModal"));
let imgModalSrc=_("imgModalSrc");
let imgModalAlt=_("imgModalAlt")
imgModalSrc.src=el.src;
imgModalAlt.innerText=el.alt;
modal.toggle()
}




if ('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('/sw.js')
  .then(function(){
    console.log('Service Worker Registered')
  })
}

let deferredPrompt;
const liteApp = _("liteApp");

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  liteApp.classList.remove("d-none");

  liteApp.addEventListener('click', (e) => {
    liteApp.classList.add("d-none");
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then( (choiceResult) =>{
    if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
    } else {
    console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
    });
  });
});