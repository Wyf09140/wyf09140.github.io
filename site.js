// Shared header, contact block and footer for every page
(function(){
  const RESUME = "https://drive.google.com/file/d/11z1-Xg3IZ6MkCMK9m93-8ksD1DrHAV17/view?usp=sharing";
  const pages = [["index.html","Home"],["analytics.html","Analytics"],["engineering.html","Data Engineering"],["aiops.html","AIOps"],["ai-product.html","AI Product"]];
  const here = location.pathname.split("/").pop() || "index.html";
  // A page can point to its own tailored resume with <body data-resume="...">
  const resume = document.body.dataset.resume || RESUME;
  const links = pages.map(([h,t])=>`<a href="${h}"${h===here?' aria-current="page"':''}>${t}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin",
    `<header><div class="wrap"><a class="brand" href="index.html">Zach Wei</a><nav aria-label="Pages">${links}</nav>
     <a class="btn sm" href="${resume}" target="_blank" rel="noopener">Resume</a></div></header>
     <div class="mobile-nav" aria-label="Pages">${links}</div>`);
  const others = pages.filter(([h])=>h!==here && h!=="index.html").map(([h,t])=>`<a class="btn ghost sm" href="${h}">${t}</a>`).join("");
  const slot = document.getElementById("contact-slot");
  if(slot) slot.outerHTML =
    `<section id="contact"><div class="wrap contact"><div><h2>Let’s talk</h2>
      <p class="muted" style="max-width:30em">I’m looking for full-time roles starting after I graduate in December 2026.</p>
      <div class="cta"><a class="btn" href="mailto:zw09140work@outlook.com">Email me</a><a class="btn ghost" href="${resume}" target="_blank" rel="noopener">View resume</a></div>
      ${here!=="index.html"?`<p class="muted" style="margin:28px 0 0">Other directions I work in</p><div class="others">${others}</div>`:""}</div>
      <dl><dt>Email</dt><dd><a href="mailto:zw09140work@outlook.com">zw09140work@outlook.com</a></dd>
      <dt>Phone</dt><dd><a href="tel:+15202466087">520-246-6087</a></dd>
      <dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/yfw" target="_blank" rel="noopener">linkedin.com/in/yfw</a></dd>
      <dt>GitHub</dt><dd><a href="https://github.com/wyf09140" target="_blank" rel="noopener">github.com/wyf09140</a></dd></dl></div></section>
     <div class="wrap foot">© 2026 Yifan (Zach) Wei</div>`;
})();
