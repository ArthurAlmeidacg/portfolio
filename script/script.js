const LANG_ITEMS = {
    pt: document.querySelectorAll('[data-lang="pt"]'),
    de: document.querySelectorAll('[data-lang="de"]'),
    en: document.querySelectorAll('[data-lang="en"]'),
  };

  function setLang(lang) {
    // hide all
    Object.values(LANG_ITEMS).forEach(nodes => nodes.forEach(n => n.classList.remove('visible')));
    // show selected
    LANG_ITEMS[lang].forEach(n => n.classList.add('visible'));
    // update buttons
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
    // update html lang attribute
    document.documentElement.lang = lang;
  }

  // Init with Portuguese
  setLang('de');