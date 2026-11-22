const mods = [
  {name:"Frame Function Mobile",version:"v0.3.2",description:"Edición móvil de Frame Function para FNF V-Slice.",file:"downloads/frame-function-mobile-v0.3.2.zip"},
  {name:"Note Color Editor",version:"v2.1.4",description:"Herramienta para editar los colores de las notas.",file:"downloads/note-color-editor-v2.1.4.zip"}
];
const container=document.querySelector("#mods");
const search=document.querySelector("#search");
function render(){
  const q=search.value.trim().toLowerCase();
  const filtered=mods.filter(m=>(m.name+" "+m.description+" "+m.version).toLowerCase().includes(q));
  container.innerHTML=filtered.length?filtered.map(m=>`<article class="card"><h3>${m.name}</h3><div class="version">${m.version}</div><p>${m.description}</p><a class="download" href="${m.file}" download>Descargar ZIP</a></article>`).join(""):'<p class="empty">No se encontraron resultados.</p>';
}
search.addEventListener("input",render);render();
