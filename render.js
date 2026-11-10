// data.js の内容をページに流し込む小さな仕組み（編集不要）
function renderNews(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(n =>
    `<li><span class="date">${n.date}</span><span class="label">${n.label}</span><a href="${n.url}">${n.text}</a></li>`
  ).join("");
}
function renderCards(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(i =>
    `<div class="card"><span class="tag">${i.tag}</span><h3><a href="${i.url}">${i.title}</a></h3><p>${i.desc}</p></div>`
  ).join("");
}
renderNews("whats-new", typeof WHATS_NEW !== "undefined" ? WHATS_NEW : []);
renderCards("studio-items", typeof STUDIO_ITEMS !== "undefined" ? STUDIO_ITEMS : []);
renderCards("share-items", typeof SHARE_ITEMS !== "undefined" ? SHARE_ITEMS : []);

// ===== share 棚リスト（写真＋中身＋検索・フィルタ）2026-11-08 管理MVP対応版 =====
// データは data.js の [share:auto] ブロック（SHARE_SHELVES / PRODUCTS / ITEM_INDEX、管理アプリが自動生成）
function _norm(s){ return String(s||"").normalize("NFKC").toLowerCase().replace(/\s+/g,""); }
function renderShelves(elId, shelves) {
  const el = document.getElementById(elId);
  if (!el) return;
  shelves = [...shelves].sort((a,b) => (b.globalNo||0) - (a.globalNo||0)); // 表示は新しい棚から（データ自体の並びは登録順のまま）
  const kindLabel = k => k === "gear" ? "機材棚" : "本棚";
  el.innerHTML = shelves.map(s => `
   <div class="shelf" id="${s.code}" data-kind="${s.kind}">
    <div class="shelf-head">
     <div class="shelf-ph"><img src="${s.photo}" alt="${s.title}" onload="this.parentNode.classList.add(this.naturalHeight>=this.naturalWidth?'portrait':'landscape')"></div>
     <div class="shelf-side">
      <h3>${s.title}<span class="kind">${kindLabel(s.kind)}</span></h3>
      <p class="meta">投稿者：${s.ownerName} ／ #${String(s.globalNo).padStart(4,"0")} ／ ${s.items.length}点</p>
      ${s.story ? `<p class="story">${s.story}</p>` : ``}
      ${(s.snsLinksPublic && s.snsLinks && (s.snsLinks.x || s.snsLinks.instagram)) ? `<p class="meta">投稿者のSNS：${s.snsLinks.x ? `<a href="${s.snsLinks.x}" target="_blank" rel="noopener">X</a>` : ``}${s.snsLinks.x && s.snsLinks.instagram ? ` ／ ` : ``}${s.snsLinks.instagram ? `<a href="${s.snsLinks.instagram}" target="_blank" rel="noopener">Instagram</a>` : ``}</p>` : ``}
      <p class="meta">写真をクリックすると全体表示（拡大・移動できます）。</p>
     </div>
    </div>
    <ul class="shelf-items">
     ${s.items.map(i => {
       const shortNote = i.note && i.note.length <= 40 ? i.note : "";
       const searchText = _norm([i.name, i.author||"", i.maker||"", (i.tags||[]).join(" "), i.itemCode||"", i.isbn||"", s.code, s.ownerName||""].join(" "));
       const links = [
         i.url ? `<a class="buy amz" href="${i.url}" target="_blank" rel="nofollow sponsored noopener">Amazonで見る</a>` : "",
         i.rakutenUrl ? `<a class="buy rkt" href="${i.rakutenUrl}" target="_blank" rel="nofollow sponsored noopener">楽天で見る</a>` : "",
         !i.url && !i.rakutenUrl ? `<span class="buy-none">リンク準備中</span>` : "",
         i.refUrl ? `<a class="reflink" href="${i.refUrl}" target="_blank" rel="noopener">${i.refLabel||"Wikipedia"}</a>` : "",
         i.ref2Url ? `<a class="reflink" href="${i.ref2Url}" target="_blank" rel="noopener">${i.ref2Label||"Wikipedia"}</a>` : "",
         (!i.refUrl && !i.ref2Url && i.publisherUrl) ? `<a class="reflink" href="${i.publisherUrl}" target="_blank" rel="noopener">${i.publisherLabel||"版元ページ"}</a>` : "",
       ].filter(Boolean).join("");
       const also = (i.alsoOn && i.alsoOn.length) ? `<span class="ialso">この人も持ってました：${i.alsoOn.map(a=>`<a href="#${a.itemCode}">${a.shelfCode}</a>`).join(" ")}</span>` : "";
       return `<li id="${i.itemCode}" data-search="${searchText}" data-tags="${(i.tags||[]).join(" ")}"><span class="iname">${i.name}</span>${i.author?`<span class="iauthor">${i.author}</span>`:""}${i.maker?`<span class="iauthor">${i.maker}</span>`:""}${(i.tags||[]).map(t=>`<span class="itag">${t}</span>`).join("")}${shortNote?`<span class="inote">※${shortNote}</span>`:""}${also}<span class="ilink">${links}</span></li>`;
     }).join("")}
    </ul>
    ${(s.unknown && s.unknown.length) ? `<p class="meta">判別できなかったもの：${s.unknown.join("／")}</p>` : ""}
   </div>`).join("");
  // タグチップは「実際に使われているタグだけ」を件数順に自動生成する（定義が増えても表示は増えない）
  const tagBox = document.getElementById("shelf-tagchips");
  if (tagBox) {
    const cnt = {};
    shelves.forEach(s => (s.items||[]).forEach(i => (i.tags||[]).forEach(t => cnt[t]=(cnt[t]||0)+1)));
    const tags = Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a] || a.localeCompare(b,"ja"));
    tagBox.innerHTML = `<button class="shelf-chip active" data-t="all">タグ：すべて</button>` + tags.map(t=>`<button class="shelf-chip" data-t="${t}">${t}</button>`).join("");
  }
  const q = document.getElementById("shelf-q");
  if (!q) return;
  let kind = "all", tag = "all";
  const hit = document.getElementById("shelf-hit");
  function apply() {
    const word = _norm(q.value);
    let total = 0;
    el.querySelectorAll(".shelf").forEach(sh => {
      let vis = 0;
      sh.querySelectorAll("li").forEach(li => {
        const ok = (kind === "all" || sh.dataset.kind === kind)
          && (tag === "all" || (li.dataset.tags || "").split(" ").includes(tag))
          && (!word || (li.dataset.search || "").includes(word));
        li.classList.toggle("shelf-hidden", !ok);
        if (ok) vis++;
      });
      sh.classList.toggle("shelf-hidden", vis === 0);
      total += vis;
    });
    if (hit) hit.textContent = (word || kind !== "all" || tag !== "all") ? total + " 件ヒット" : "";
  }
  q.addEventListener("input", apply);
  document.querySelectorAll("#shelf-kindchips .shelf-chip").forEach(c => c.addEventListener("click", () => {
    document.querySelectorAll("#shelf-kindchips .shelf-chip").forEach(x => x.classList.remove("active"));
    c.classList.add("active"); kind = c.dataset.f; apply();
  }));
  document.querySelectorAll("#shelf-tagchips .shelf-chip").forEach(c => c.addEventListener("click", () => {
    document.querySelectorAll("#shelf-tagchips .shelf-chip").forEach(x => x.classList.remove("active"));
    c.classList.add("active"); tag = c.dataset.t; apply();
  }));
}
renderShelves("share-shelves", typeof SHARE_SHELVES !== "undefined" ? SHARE_SHELVES : []);
// share.html 入口ページ用：最新の棚だけを #share-latest に表示（検索・チップが無いページでも renderShelves が安全に動く）
if (document.getElementById("share-latest") && typeof SHARE_SHELVES !== "undefined" && SHARE_SHELVES.length) {
  const latest = [...SHARE_SHELVES].sort((a,b) => (b.globalNo||0) - (a.globalNo||0))[0];
  renderShelves("share-latest", [latest]);
}
