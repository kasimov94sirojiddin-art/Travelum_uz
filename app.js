const $=(s,r=document)=>r.querySelector(s),pg=document.body.dataset.page;
const PAGES=[["index.html","Home","home"],["tours.html","Tours","tours"],["guides.html","Guides","guides"],["policy.html","Policy & FAQ","policy"],["contacts.html","Contacts","contacts"]];
const links=PAGES.map(p=>`<a href="${p[0]}" ${p[2]==pg?'class="on" aria-current="page"':''}>${p[1]}</a>`).join("");
document.body.insertAdjacentHTML("afterbegin",`<header class="hd"><a class="brand" href="index.html"><b>T</b>Travelum uz</a>
<nav class="nav">${links}</nav><a class="btn y hd-wa" href="${WA}" target="_blank" rel="noreferrer">WhatsApp</a>
<button class="burger" aria-label="Menu" aria-expanded="false">☰</button></header>
<div class="drawer" hidden><nav>${links}</nav><div class="dr-c"><a class="btn y" href="${WA}">Book on WhatsApp</a><a class="btn w" href="tel:+998886473030">${PH}</a>
<a class="btn w" href="mailto:${MAIL}">Email</a></div></div>`);
document.body.insertAdjacentHTML("beforeend",`<footer class="ft"><span>© Travelum uz</span><a href="${ORG}" target="_blank" rel="noreferrer">About the organization</a><a href="#top">Back to top</a></footer>
<a class="sticky" href="${WA}" target="_blank" rel="noreferrer">Book on WhatsApp</a>`);
const bg=$(".burger"),dr=$(".drawer");
bg.onclick=()=>{const o=dr.hidden;dr.hidden=!o;bg.textContent=o?"✕":"☰";bg.setAttribute("aria-expanded",o);document.body.classList.toggle("lock",o)};
const li=a=>a.map(x=>`<li>${x}</li>`).join("");
const tier=(t,n)=>t.prices.find(p=>p[0]>=n)||t.prices.at(-1);
const unit=(p)=>p[0]==1?`${p[1]} USD`:`${p[1]} USD /person`;
function tourCard(t){return `<article class="card"><div class="media" style="background-image:url(${t.img})" role="img" aria-label="${t.name}"></div><h3>${t.name}</h3><p class="lead">${t.lead}</p><p class="meta">${t.meta.join(" · ")}</p>
<div class="cols"><div><h4>Program</h4><ul>${li(t.prog)}</ul></div><div><h4>Included</h4><ul class="ok">${li(t.inc)}</ul><h4>Not included</h4><ul class="no">${li(t.exc)}</ul></div></div>
<div class="prices" data-t="${t.id}">${t.prices.map(p=>`<div data-n="${p[0]}"><span>${p[0]} ${p[0]>1?"persons":"person"}${p[2]?" ("+p[2]+")":""}</span><strong>${unit(p)}</strong></div>`).join("")}</div></article>`}
if(pg=="tours"){
 $("#tours").innerHTML=TOURS.map(tourCard).join("");
 const sel=$("#c-tour"),out=$("#c-total"),num=$("#c-n"),rng=$("#c-r");let n=2;
 sel.innerHTML=TOURS.map(t=>`<option value="${t.id}">${t.name}</option>`).join("");
 const calc=()=>{const t=TOURS.find(x=>x.id==sel.value),max=t.prices.at(-1)[0];n=Math.min(Math.max(n,1),max);
  rng.max=max;rng.value=n;num.textContent=n;const p=tier(t,n),tot=n==1?p[1]:p[1]*n;
  out.innerHTML=`<small>Total for ${n} ${n>1?"people":"person"}</small><b>${tot} USD</b><small>${n>1?p[1]+" USD per person":"private tour"}${p[2]?" · "+p[2]:""}</small>`;
  $("#c-book").href=`${WA}?text=${encodeURIComponent(`Hello! I want to book: ${t.name} for ${n} person(s). Estimated ${tot} USD.`)}`;
  document.querySelectorAll(".prices div").forEach(d=>d.classList.toggle("hit",d.parentNode.dataset.t==t.id&&+d.dataset.n==p[0]))};
 $("#c-minus").onclick=()=>{n--;calc()};$("#c-plus").onclick=()=>{n++;calc()};
 rng.oninput=()=>{n=+rng.value;calc()};sel.onchange=()=>{n=Math.min(n,TOURS.find(x=>x.id==sel.value).prices.at(-1)[0]);calc()};calc();
 if(location.hash){const t=$(location.hash);t&&(sel.value=location.hash.slice(1),calc())}
}
if(pg=="home"){
 $("#home-tours").innerHTML=TOURS.map(t=>`<a class="card tease" href="tours.html"><div class="media" style="background-image:url(${t.img})" role="img" aria-label="${t.name}"></div><h3>${t.name}</h3><p>${t.lead}</p><p class="meta">from <b>${t.prices.at(-1)[1]} USD</b> per person</p></a>`).join("");
 $("#reviews").innerHTML=REVIEWS.map(r=>`<figure class="rev"><div class="st" aria-label="5 stars">★★★★★</div><blockquote>${r[2]}</blockquote><figcaption><b>${r[1]}</b> · ${r[0]}</figcaption></figure>`).join("")}
if(pg=="guides")$("#walk").innerHTML=WALK.map(w=>`<article class="card"><h3>${w[0]} — walking tour</h3><p class="meta">4-6 hours</p><p class="lead">${w[1]}</p>
<div class="cols"><div><h4>Included</h4><ul class="ok"><li>Tour guide</li><li>Excursions per program</li></ul></div><div><h4>Not included</h4><ul class="no"><li>Entrance tickets</li>${w[2]?"<li>Transport</li>":""}<li>Lunch</li><li>Personal expenses</li></ul></div></div>
<div class="prices"><div class="hit"><span>Private group, 1-10 persons</span><strong>135 USD</strong></div></div></article>`).join("");
if(pg=="policy")$("#faq").innerHTML=FAQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");
