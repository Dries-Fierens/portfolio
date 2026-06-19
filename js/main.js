(function () {
  renderRoleProjects();
  renderFeaturedProjects();
})();

function renderRoleProjects() {
  const listEl = document.getElementById("projects-list");
  if (!listEl || !window.PROJECTS) return;

  const role = document.body.dataset.role || "all";
  const onlyHighQuality = true;

  const filtered = window.PROJECTS
    .filter((p) => (role === "all" ? true : p.roles.includes(role)))
    .filter((p) => (onlyHighQuality ? p.quality === "high" : true))
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  if (filtered.length === 0) {
    listEl.innerHTML = `<p class="muted">No projects yet. Add one in <code>data/projects.js</code>.</p>`;
    return;
  }

  listEl.innerHTML = filtered.map(projectCard).join("");
}

function renderFeaturedProjects() {
  const featuredEl = document.getElementById("featured-projects");
  if (!featuredEl || !window.PROJECTS) return;

  const featured = window.PROJECTS
    .filter((p) => p.quality === "high" && p.featured)
    .slice(0, 2);

  if (featured.length === 0) {
    featuredEl.innerHTML = `<p class="muted">Mark projects with <code>featured: true</code> in <code>data/projects.js</code>.</p>`;
    return;
  }

  featuredEl.innerHTML = featured.map(projectCard).join("");
}

function projectCard(p) {
  const tech = (p.tech || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  const bullets = (p.breakdown || []).map(b => `<li>${escapeHtml(b)}</li>`).join("");

  const links = [];
  if (p.links?.video) links.push(`<a href="${p.links.video}" target="_blank" rel="noreferrer">Video</a>`);
  if (p.links?.repo) links.push(`<a href="${p.links.repo}" target="_blank" rel="noreferrer">Code</a>`);
  if (p.links?.article) links.push(`<a href="${p.links.article}" target="_blank" rel="noreferrer">Breakdown</a>`);

  return `
    <article class="card">
      <img class="thumb" src="${p.thumbnail}" alt="${escapeHtml(p.title)} thumbnail" loading="lazy" />
      <div class="card-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p class="one-liner">${escapeHtml(p.oneLiner)}</p>
        <div class="tags">${tech}</div>
        <ul>${bullets}</ul>
        <div class="links">${links.join(" • ")}</div>
      </div>
    </article>
  `;
}

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}