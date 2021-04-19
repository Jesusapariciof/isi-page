document.addEventListener('DOMContentLoaded', ()=>{
const imgLightBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(imgLightBox, {
    inDuration: 500,
    outDuration: 500
});
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
  });


