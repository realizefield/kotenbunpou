// unit-nav.js — 各単元ページ共通ナビゲーション
// 各HTMLページの </body> 直前に
// <script src="unit-nav.js"></script>
// <script>UnitNav.init(現在の単元番号);</script>
// を追加するだけで動作する

const UnitNav = (function(){
  const UNITS = [
    { num:1, title:'動詞の活用形',       file:'kotenbun6.html' },
    { num:2, title:'活用の種類（正格）',  file:'kotenbun7.html' },
    { num:3, title:'変格活用',           file:'kotenbun8.html' },
    { num:4, title:'品詞の分類',          file:'kotenbun3.html' },
    { num:5, title:'歴史的仮名遣い',      file:'kotenbunpou1.html' },
    { num:6, title:'品詞識別の実践',      file:'kotenbun5.html' },
  ];

  function init(currentNum){
    const idx = UNITS.findIndex(u => u.num === currentNum);
    const prev = idx > 0 ? UNITS[idx-1] : null;
    const next = idx < UNITS.length-1 ? UNITS[idx+1] : null;

    // ナビバーHTML生成
    const bar = document.createElement('div');
    bar.id = 'unit-nav-bar';
    bar.style.cssText = [
      'display:flex','justify-content:center','align-items:center',
      'gap:10px','padding:12px 18px',
      'background:#2d2416','border-top:2px solid #b8860b',
      'position:sticky','bottom:0','z-index:500','flex-wrap:wrap'
    ].join(';');

    const btnStyle = (bg, color, extra='') =>
      `display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:3px;` +
      `font-family:'Noto Sans JP',sans-serif;font-size:12px;font-weight:700;` +
      `letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;text-decoration:none;` +
      `border:none;background:${bg};color:${color};${extra}`;

    // 前へ
    if(prev){
      const a = document.createElement('a');
      a.href = prev.file;
      a.innerHTML = `◀ ${prev.title}`;
      a.style.cssText = btnStyle('rgba(255,255,255,0.1)','rgba(255,255,255,0.85)',
        'border:1px solid rgba(255,255,255,0.2);');
      a.addEventListener('mouseover',()=>a.style.background='rgba(255,255,255,0.18)');
      a.addEventListener('mouseout', ()=>a.style.background='rgba(255,255,255,0.1)');
      bar.appendChild(a);
    }

    // 単元一覧
    const idx_btn = document.createElement('a');
    idx_btn.href = 'index.html';
    idx_btn.innerHTML = '☰ 単元一覧';
    idx_btn.style.cssText = btnStyle('#b8860b','white');
    idx_btn.addEventListener('mouseover',()=>idx_btn.style.background='#d4a017');
    idx_btn.addEventListener('mouseout', ()=>idx_btn.style.background='#b8860b');
    bar.appendChild(idx_btn);

    // 次へ
    if(next){
      const a = document.createElement('a');
      a.href = next.file;
      a.innerHTML = `${next.title} ▶`;
      a.style.cssText = btnStyle('#c0392b','white');
      a.addEventListener('mouseover',()=>a.style.background='#e74c3c');
      a.addEventListener('mouseout', ()=>a.style.background='#c0392b');
      bar.appendChild(a);
    }

    document.body.appendChild(bar);

    // padding-bottom をナビ分確保
    document.body.style.paddingBottom = '70px';
  }

  return { init };
})();
