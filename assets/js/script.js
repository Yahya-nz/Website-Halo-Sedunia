(() => {
  const GROUPS = [
    ["Nusantara", [
      { g:"ᮞᮙ᮪ᮕᮥᮛᮞᮥᮔ᮪", ro:"Sampurasun", l:"Sunda", s:"Aksara Sunda", lang:"su", f:"Noto Sans Sundanese" },
      { g:"ꦱꦸꦒꦼꦁꦲꦺꦚ꧀ꦗꦶꦁ", ro:"Sugeng énjing", l:"Jawa", s:"Hanacaraka", lang:"jv", f:"Noto Sans Javanese" },
      { g:"ᬒᬁᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ", ro:"Om Swastiastu", l:"Bali", s:"Aksara Bali", lang:"ban", f:"Noto Sans Balinese" }
    ]],
    ["Asia Tenggara", [
      { g:"សួស្តី", ro:"Suosdei", l:"Khmer", s:"Aksara Khmer", lang:"km", f:"Noto Sans Khmer" },
      { g:"สวัสดี", ro:"Sawasdee", l:"Thai", s:"Aksara Thai", lang:"th", f:"Noto Sans Thai" },
      { g:"ສະບາຍດີ", ro:"Sabaidee", l:"Lao", s:"Aksara Lao", lang:"lo", f:"Noto Sans Lao" },
      { g:"မင်္ဂလာပါ", ro:"Mingalaba", l:"Myanmar", s:"Aksara Myanmar", lang:"my", f:"Noto Sans Myanmar" }
    ]],
    ["Asia Selatan", [
      { g:"ආයුබෝවන්", ro:"Āyubōvan", l:"Sinhala", s:"Aksara Sinhala", lang:"si", f:"Noto Sans Sinhala" },
      { g:"வணக்கம்", ro:"Vaṇakkam", l:"Tamil", s:"Aksara Tamil", lang:"ta", f:"Noto Sans Tamil" },
      { g:"നമസ്കാരം", ro:"Namaskāram", l:"Malayalam", s:"Aksara Malayalam", lang:"ml", f:"Noto Sans Malayalam" },
      { g:"ನಮಸ್ಕಾರ", ro:"Namaskāra", l:"Kannada", s:"Aksara Kannada", lang:"kn", f:"Noto Sans Kannada" },
      { g:"నమస్కారం", ro:"Namaskāram", l:"Telugu", s:"Aksara Telugu", lang:"te", f:"Noto Sans Telugu" },
      { g:"ନମସ୍କାର", ro:"Namaskāra", l:"Odia", s:"Aksara Odia", lang:"or", f:"Noto Sans Oriya" },
      { g:"ᱡᱚᱦᱟᱨ", ro:"Johar", l:"Santali", s:"Ol Chiki", lang:"sat", f:"Noto Sans Ol Chiki" },
      { g:"নমস্কার", ro:"Nômoskar", l:"Bengali", s:"Bengali-Assam", lang:"bn", f:"Noto Sans Bengali" },
      { g:"নমস্কাৰ", ro:"Nomoskar", l:"Assam", s:"Bengali-Assam", lang:"as", f:"Noto Sans Bengali" },
      { g:"नमस्कार", ro:"Namaskār", l:"Marathi", s:"Dewanagari", lang:"mr", f:"Noto Sans Devanagari" },
      { g:"નમસ્તે", ro:"Namaste", l:"Gujarati", s:"Aksara Gujarati", lang:"gu", f:"Noto Sans Gujarati" },
      { g:"नमस्ते", ro:"Namaste", l:"Hindi", s:"Dewanagari", lang:"hi", f:"Noto Sans Devanagari" },
      { g:"ਸਤ ਸ੍ਰੀ ਅਕਾਲ", ro:"Sat srī akāl", l:"Punjabi", s:"Gurmukhi", lang:"pa", f:"Noto Sans Gurmukhi" },
      { g:"السلام علیکم", ro:"Assalāmu ʿalaikum", l:"Urdu", s:"Arab (Nastaliq)", lang:"ur", rtl:true, f:"Noto Nastaliq Urdu" }
    ]],
    ["Asia Timur", [
      { g:"བཀྲ་ཤིས་བདེ་ལེགས།", ro:"Tashi delek", l:"Tibet", s:"Aksara Tibet", lang:"bo", f:"Noto Serif Tibetan" },
      { g:"你好", ro:"Nǐ hǎo", l:"Mandarin", s:"Hanzi", lang:"zh-Hans", f:"Noto Sans SC" },
      { g:"汝好", ro:"Lí hó", l:"Hokkien", s:"Hanzi", lang:"nan-Hant", f:"Noto Sans TC" },
      { g:"こんにちは", ro:"Konnichiwa", l:"Jepang", s:"Hiragana", lang:"ja", f:"Noto Sans JP" },
      { g:"안녕하세요", ro:"Annyeonghaseyo", l:"Korea", s:"Hangul", lang:"ko", f:"Noto Sans KR" },
      { g:"Сайн байна уу", ro:"Sain baina uu", l:"Mongolia", s:"Kiril", lang:"mn", f:"Noto Sans" }
    ]],
    ["Asia Tengah", [
      { g:"ياخشىمۇسىز", ro:"Yaxshimusiz", l:"Uyghur", s:"Arab", lang:"ug", rtl:true, f:"Noto Sans Arabic" },
      { g:"Сәлем", ro:"Sälem", l:"Kazakh", s:"Kiril", lang:"kk", f:"Noto Sans" },
      { g:"Салам", ro:"Salam", l:"Kirgiz", s:"Kiril", lang:"ky", f:"Noto Sans" },
      { g:"Салом", ro:"Salom", l:"Tajik", s:"Kiril", lang:"tg", f:"Noto Sans" }
    ]],
    ["Timur Tengah & Afrika", [
      { g:"سلام", ro:"Salām", l:"Persia", s:"Arab", lang:"fa", rtl:true, f:"Noto Sans Arabic" },
      { g:"سڵاو", ro:"Silaw", l:"Kurdi", s:"Arab", lang:"ckb", rtl:true, f:"Noto Sans Arabic" },
      { g:"ܫܠܡܐ", ro:"Shlama", l:"Suryani", s:"Aksara Suryani", lang:"syc", rtl:true, f:"Noto Sans Syriac" },
      { g:"مرحبا", ro:"Marḥaban", l:"Arab", s:"Arab", lang:"ar", rtl:true, f:"Noto Sans Arabic" },
      { g:"שלום", ro:"Shalom", l:"Ibrani", s:"Aksara Ibrani", lang:"he", rtl:true, f:"Noto Sans Hebrew" },
      { g:"ሰላም", ro:"Selam", l:"Amharik", s:"Ge'ez", lang:"am", f:"Noto Sans Ethiopic" },
      { g:"ⴰⵣⵓⵍ", ro:"Azul", l:"Tamazight", s:"Tifinagh", lang:"zgh", f:"Noto Sans Tifinagh" }
    ]],
    ["Kaukasus & Eropa", [
      { g:"Բարև", ro:"Barev", l:"Armenia", s:"Aksara Armenia", lang:"hy", f:"Noto Sans Armenian" },
      { g:"გამარჯობა", ro:"Gamarjoba", l:"Georgia", s:"Mkhedruli", lang:"ka", f:"Noto Sans Georgian" },
      { g:"Γεια σου", ro:"Yia sou", l:"Yunani", s:"Aksara Yunani", lang:"el", f:"Noto Sans" },
      { g:"Здравей", ro:"Zdravei", l:"Bulgaria", s:"Kiril", lang:"bg", f:"Noto Sans" },
      { g:"Здраво", ro:"Zdravo", l:"Serbia", s:"Kiril", lang:"sr", f:"Noto Sans" },
      { g:"Привіт", ro:"Pryvit", l:"Ukraina", s:"Kiril", lang:"uk", f:"Noto Sans" },
      { g:"Прывітанне", ro:"Pryvitannie", l:"Belarus", s:"Kiril", lang:"be", f:"Noto Sans" },
      { g:"Привет", ro:"Privet", l:"Rusia", s:"Kiril", lang:"ru", f:"Noto Sans" }
    ]],
    ["Amerika Utara", [
      { g:"ᎣᏏᏲ", ro:"Osiyo", l:"Cherokee", s:"Silabis Cherokee", lang:"chr", f:"Noto Sans Cherokee" },
      { g:"ᑖᓂᓯ", ro:"Tânisi", l:"Cree", s:"Silabis Kanada", lang:"cr", f:"Noto Sans Canadian Aboriginal" },
      { g:"ᐊᐃ", ro:"Ai", l:"Inuktitut", s:"Silabis Kanada", lang:"iu", f:"Noto Sans Canadian Aboriginal" }
    ]]
  ];

  const D = [];
  GROUPS.forEach((gr, rg) => gr[1].forEach(it => D.push(Object.assign({ rg }, it))));
  const N = D.length;
  const HALO = { g:"Halo", ro:"Halo", l:"Indonesia", s:"Latin", lang:"id", latin:true };
  const INTRO = ["Sunda","Jepang","Arab","Hindi","Korea","Rusia","Thai","Ibrani","Mandarin","Yunani","Georgia","Tamil","Amharik","Tamazight","Bali"]
    .map(name => D.find(d => d.l === name)).filter(Boolean);
  const SCRIPTS = new Set(D.map(d => d.s.replace(/^Aksara /, "").split(" (")[0])).size;

  const $ = id => document.getElementById(id);
  const root = document.documentElement;
  const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fontStack = it => it.latin ? '"Plus Jakarta Sans", system-ui, sans-serif' : `"${it.f}", "Noto Sans", system-ui, sans-serif`;
  const fontsApi = document.fonts && typeof document.fonts.load === "function" ? document.fonts : null;
  const EXPO_OUT = "cubic-bezier(.16,1,.3,1)";
  const EXPO_IN = "cubic-bezier(.7,0,.84,0)";

  const intro = $("intro"), shuttersEl = $("shutters");
  const camIn = $("cam-in"), reelWin = $("reel-win"), reel = $("reel"), labWin = $("lab-win"), labReel = $("lab-reel");
  const ipct = $("ipct"), ibar = $("ibar"), skipBtn = $("skip");
  const headline = $("headline"), win = $("win"), dunia = $("dunia");
  const nowText = $("now-text"), countEl = $("count"), measure = $("measure");
  const items = [];

  $("stat").innerHTML = `<b>${N}</b> bahasa · <b>${SCRIPTS}</b> aksara`;
  $("lead").textContent = `Satu kata, ${N} cara menulisnya. Dari Sampurasun di Tatar Sunda sampai Osiyo di tanah Cherokee, semuanya ditulis dengan aksaranya sendiri.`;
  $("index-title").textContent = `${N} cara bilang halo`;

  /* ---------- easing & animasi ---------- */
  const inOutPow = n => t => (t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 - 2 * t, n) / 2);
  const inOutQuart = inOutPow(4);
  const outBack = c1 => { const c3 = c1 + 1; return t => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

  // motion blur: blur vertikal pakai filter SVG, makin cepat geraknya makin blur
  const makeBlur = (id, el, k, max) => ({ id, el, node: $(id + "-n"), k, max, cur: 0 });
  function blurOn(b) { b.cur = 0; b.node.setAttribute("stdDeviation", "0 0.01"); b.el.style.filter = `url(#${b.id})`; }
  function blurOff(b) { b.cur = 0; b.node.setAttribute("stdDeviation", "0 0.01"); b.el.style.filter = ""; }
  function blurSet(b, v) {
    const target = Math.min(b.max, v * b.k);
    b.cur += (target - b.cur) * 0.6;
    b.node.setAttribute("stdDeviation", `0 ${Math.max(0.01, b.cur).toFixed(2)}`);
  }
  const reelBlur = makeBlur("mb-reel", reelWin, 7, 18);
  const labBlur = makeBlur("mb-lab", labWin, 7, 3);
  const heroBlur = makeBlur("mb-hero", win, 11, 14);

  function tween({ dur, ease = t => t, update, blurs = [], alive = () => true }) {
    return new Promise(resolve => {
      let t0 = null, lastP = 0, lastT = 0;
      const frame = now => {
        if (!alive()) { resolve(false); return; }
        if (t0 === null) { t0 = now; lastT = now; }
        const t = dur > 0 ? Math.min(1, (now - t0) / dur) : 1;
        const p = ease(t);
        update(p, t);
        const dt = Math.max(8, now - lastT);
        for (const x of blurs) blurSet(x.b, (Math.abs(p - lastP) * x.dist) / dt);
        lastP = p;
        lastT = now;
        if (t < 1) requestAnimationFrame(frame);
        else resolve(true);
      };
      requestAnimationFrame(frame);
    });
  }

  /* ---------- grain film ---------- */
  (function makeGrain() {
    try {
      const c = document.createElement("canvas");
      c.width = c.height = 180;
      const ctx = c.getContext("2d");
      const img = ctx.createImageData(180, 180);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = (Math.random() * 38) | 0;
      }
      ctx.putImageData(img, 0, 0);
      $("grain").style.backgroundImage = `url(${c.toDataURL("image/png")})`;
    } catch (err) {}
  })();

  /* ---------- ukur ukuran teks ---------- */
  function box100(it) {
    measure.style.fontFamily = fontStack(it);
    measure.style.fontWeight = it.latin ? "600" : "500";
    measure.style.letterSpacing = it.latin ? "-0.04em" : "0";
    measure.lang = it.lang;
    measure.dir = it.rtl ? "rtl" : "ltr";
    measure.textContent = it.g;
    const r = measure.getBoundingClientRect();
    return { w: r.width || 100, h: r.height || 130 };
  }
  function splitLetters(el, text) {
    el.textContent = "";
    Array.from(text).forEach(ch => {
      const s = document.createElement("span");
      s.className = "ch";
      s.textContent = ch;
      el.append(s);
    });
  }
  function lettersIn(el, delay, stagger) {
    el.querySelectorAll(".ch").forEach((c, i) => c.animate(
      [{ transform: "translateY(140%)", filter: "blur(10px)", opacity: 0 }, { transform: "translateY(0)", filter: "blur(0px)", opacity: 1 }],
      { duration: 1000, delay: delay + i * stagger, easing: EXPO_OUT, fill: "backwards" }
    ));
  }
  function lettersOut(el, stagger) {
    el.querySelectorAll(".ch").forEach((c, i) => c.animate(
      [{ transform: "translateY(0)", filter: "blur(0px)", opacity: 1 }, { transform: "translateY(-140%)", filter: "blur(10px)", opacity: 0 }],
      { duration: 650, delay: i * stagger, easing: EXPO_IN, fill: "forwards" }
    ));
  }

  /* ---------- gulungan pembuka ---------- */
  const LAB_H = 18;
  let rows = [], rowH = 180, curPos = 0;
  const introBase = () => clamp(window.innerWidth * 0.085, 44, 118);

  function fitIntro(it) {
    const b = box100(it);
    const maxW = Math.min(window.innerWidth - 56, 1100);
    return Math.max(22, Math.min(introBase(), (maxW * 100) / b.w, (rowH * 0.9 * 100) / b.h));
  }
  function addRow(it) {
    const row = document.createElement("div");
    row.className = "row";
    const w = document.createElement("span");
    w.className = "rw" + (it.latin ? " latin" : "");
    if (!it.latin) w.style.fontFamily = fontStack(it);
    w.lang = it.lang;
    w.dir = it.rtl ? "rtl" : "ltr";
    w.setAttribute("translate", "no");
    if (it.latin) splitLetters(w, it.g); else w.textContent = it.g;
    row.append(w);
    reel.append(row);
    const lab = document.createElement("div");
    lab.className = "lab";
    lab.textContent = it.l;
    labReel.append(lab);
    const r = { it, el: row, word: w, lab };
    rows.push(r);
    return r;
  }
  function setPct(p) {
    p = clamp(Math.round(p), 0, 100);
    ipct.textContent = String(p);
    ibar.style.transform = `scaleX(${p / 100})`;
  }
  function setReelPos(pos) {
    curPos = pos;
    reel.style.transform = `translate3d(0, ${(-pos * rowH).toFixed(2)}px, 0)`;
    labReel.style.transform = `translate3d(0, ${(-pos * LAB_H).toFixed(2)}px, 0)`;
    const last = rows.length - 1;
    if (last > 0) {
      const u = clamp(pos / last, 0, 1);
      camIn.style.transform = `scale(${(0.965 + 0.07 * (0.5 - Math.cos(Math.PI * u) / 2)).toFixed(4)})`;
      setPct(8 + 92 * u);
    }
  }
  function layoutReel() {
    rowH = Math.round(introBase() * 1.75);
    reelWin.style.height = rowH + "px";
    rows.forEach(r => {
      r.el.style.height = rowH + "px";
      r.word.style.fontSize = fitIntro(r.it) + "px";
    });
    setReelPos(curPos);
  }
  function stepDurations(n) {
    const fast = 125, slowA = 340, slowB = 260, out = [];
    for (let k = 0; k < n; k++) {
      const u = n > 1 ? k / (n - 1) : 0;
      const d = u < 0.6
        ? fast + (slowA - fast) * Math.pow(1 - u / 0.6, 2.2)
        : fast + (slowB - fast) * Math.pow((u - 0.6) / 0.4, 2.2);
      out.push(Math.round(d));
    }
    return out;
  }

  /* ---------- panel tirai ---------- */
  // panel naik gantian dari kiri, ekor gradasi di bawahnya dipanjangin
  // sesuai kecepatan biar kelihatan kayak motion blur
  let shutters = [];
  function layoutShutters() {
    // dibulatkan ke pixel dan ditumpuk 1px biar gak ada garis di sambungan panel
    const W = intro.clientWidth || window.innerWidth;
    const n = shutters.length;
    shutters.forEach((s, i) => {
      const x0 = Math.floor((i * W) / n);
      const x1 = i === n - 1 ? W : Math.ceil(((i + 1) * W) / n) + 1;
      s.el.style.left = x0 + "px";
      s.el.style.width = x1 - x0 + "px";
    });
  }
  function buildShutters() {
    const n = window.innerWidth < 640 ? 4 : 6;
    if (shutters.length !== n) {
      shuttersEl.textContent = "";
      shutters = [];
      for (let i = 0; i < n; i++) {
        const el = document.createElement("i");
        el.className = "shutter";
        const tail = document.createElement("b");
        tail.className = "tail";
        el.append(tail);
        shuttersEl.append(el);
        shutters.push({ el, tail });
      }
    }
    shutters.forEach(s => { s.el.style.transform = ""; s.tail.style.transform = ""; });
    layoutShutters();
  }
  function liftShutters(alive) {
    const H = intro.clientHeight || window.innerHeight;
    const TL = (shutters[0] && shutters[0].tail.offsetHeight) || H * 0.3;
    const travel = H + TL + 6;
    const DUR = 1000, STAG = 75;
    const ease = inOutPow(4.2);
    const state = shutters.map(() => ({ y: 0, len: 0 }));
    const total = DUR + STAG * (shutters.length - 1);
    return new Promise(resolve => {
      let t0 = null, last = 0;
      const frame = now => {
        if (!alive()) { resolve(false); return; }
        if (t0 === null) { t0 = now; last = now; }
        const elapsed = now - t0;
        const dt = Math.max(8, now - last);
        last = now;
        shutters.forEach((s, i) => {
          const y = -travel * ease(clamp((elapsed - i * STAG) / DUR, 0, 1));
          const v = Math.abs(y - state[i].y) / dt;
          state[i].y = y;
          state[i].len += (Math.min(1, (v * 45) / TL) - state[i].len) * 0.5;
          s.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
          s.tail.style.transform = `scaleY(${state[i].len.toFixed(3)})`;
        });
        if (elapsed < total) requestAnimationFrame(frame);
        else resolve(true);
      };
      requestAnimationFrame(frame);
    });
  }

  /* ---------- alur pembuka ---------- */
  let runId = 0, introActive = false, skipNow = null;

  async function playIntro(firstRun) {
    const id = ++runId;
    const alive = () => id === runId;
    introActive = true;
    stopHero();
    root.classList.add("intro-on");
    intro.getAnimations({ subtree: true }).forEach(a => a.cancel());
    blurOff(reelBlur);
    blurOff(labBlur);
    buildShutters();
    intro.style.background = "";
    intro.hidden = false;
    reel.textContent = "";
    labReel.textContent = "";
    rows = [];
    curPos = 0;
    camIn.style.transform = "scale(0.965)";
    setPct(0);
    const r0 = addRow(HALO);
    layoutReel();

    let skipped = false;
    const skipP = new Promise(r => { skipNow = () => { if (!skipped) { skipped = true; r(); } }; });
    const wait = ms => Promise.race([sleep(ms), skipP]);
    const running = () => alive() && !skipped;

    if (fontsApi) await Promise.race([fontsApi.load('600 100px "Plus Jakarta Sans"', "Halo dunia").catch(() => {}), sleep(1200)]);
    if (!alive()) return;
    layoutReel();
    if (!reduce) {
      lettersIn(r0.word, 100, 60);
      r0.lab.animate([{ transform: "translateY(100%)" }, { transform: "none" }], { duration: 800, delay: 360, easing: EXPO_OUT, fill: "backwards" });
    }

    // load font aksara dulu selama tulisan Halo masih tampil
    const fams = [...new Set(INTRO.map(it => it.f))];
    let loaded = 0;
    const jobs = fams.map(f => {
      const text = INTRO.filter(it => it.f === f).map(it => it.g).join("");
      const p = fontsApi ? fontsApi.load(`500 100px "${f}"`, text) : Promise.resolve();
      return p.catch(() => {}).then(() => {
        loaded++;
        if (alive() && !skipped && rows.length === 1) setPct((8 * loaded) / fams.length);
      });
    });
    await Promise.race([Promise.all([Promise.all(jobs), sleep(firstRun ? 1150 : 950)]), sleep(6500), skipP]);
    if (!alive()) return;

    let endRow = null;
    if (!skipped) {
      const words = reduce ? INTRO.slice(0, 7) : INTRO;
      words.forEach(addRow);
      endRow = addRow(HALO);
      layoutReel();

      if (reduce) {
        for (let k = 1; k < rows.length && !skipped; k++) {
          setReelPos(k);
          await wait(450);
          if (!alive()) return;
        }
      } else {
        blurOn(reelBlur);
        blurOn(labBlur);
        const blurs = [{ b: reelBlur, dist: rowH }, { b: labBlur, dist: LAB_H }];
        const durs = stepDurations(words.length);
        for (let k = 0; k < durs.length && running(); k++) {
          const d = durs[k];
          const n = clamp(1.4 + (d - 125) / 75, 1.4, 4.2);
          await tween({ dur: d, ease: inOutPow(n), alive: running, blurs, update: p => setReelPos(k + p) });
        }
        if (running()) {
          const from = words.length;
          await tween({ dur: 720, ease: outBack(1.15), alive: running, blurs, update: p => setReelPos(from + p) });
        }
        blurOff(reelBlur);
        blurOff(labBlur);
        if (!alive()) return;
        if (!skipped) {
          setReelPos(rows.length - 1);
          await wait(300);
        }
      }
    }
    if (!alive()) return;
    await exitIntro(alive, skipped ? null : endRow);
  }

  async function exitIntro(alive, endRow) {
    skipNow = null;
    refitHero();
    if (reduce) {
      await intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: "ease-out", fill: "forwards" }).finished.catch(() => {});
    } else {
      if (endRow) {
        lettersOut(endRow.word, 45);
        endRow.lab.animate([{ transform: "none" }, { transform: "translateY(-100%)" }], { duration: 500, easing: EXPO_IN, fill: "forwards" });
      } else {
        $("cam").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" });
      }
      [$("intro-foot"), $("intro-bar"), skipBtn, $("intro-fx")].forEach(el => el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, fill: "forwards" }));
      await sleep(endRow ? 330 : 120);
      if (!alive()) return;
      intro.style.background = "transparent";
      heroEnter(260);
      await liftShutters(alive);
    }
    if (!alive()) return;
    intro.hidden = true;
    intro.getAnimations({ subtree: true }).forEach(a => a.cancel());
    buildShutters();
    intro.style.background = "";
    root.classList.remove("intro-on");
    introActive = false;
    startHero();
  }

  function heroEnter(delay) {
    if (reduce) return;
    const t = heroBox && heroBox.querySelector(".w-t");
    if (t && t.querySelector(".ch")) lettersIn(t, delay, 55);
    else if (heroBox) heroBox.animate([{ transform: "translate3d(0,100%,0)" }, { transform: "translate3d(0,0,0)" }], { duration: 1000, delay, easing: EXPO_OUT, fill: "backwards" });
    lettersIn(dunia, delay + 140, 45);
    $("page").animate([{ transform: "translateY(70px)" }, { transform: "none" }], { duration: 1400, delay: Math.max(0, delay - 60), easing: EXPO_OUT, fill: "backwards" });
    [$("nav"), $("eyebrow"), $("hero-foot")].forEach((el, i) => el.animate(
      [{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }],
      { duration: 900, delay: delay + 320 + i * 80, easing: EXPO_OUT, fill: "backwards" }
    ));
  }

  skipBtn.addEventListener("click", () => { if (skipNow) skipNow(); });
  $("replay").addEventListener("click", () => { window.scrollTo(0, 0); playIntro(false); });

  /* ---------- judul "Halo, dunia." ---------- */
  let heroIdx = -1, heroBox = null, heroTimer = 0, heroRunning = false, heroPaused = false, rollTok = 0;
  const HOLD = reduce ? 2600 : 1700;
  const heroItem = i => (i < 0 ? HALO : D[i]);
  const nextIdx = i => (i + 1 >= N ? -1 : i + 1);
  const prevIdx = i => (i - 1 < -1 ? N - 1 : i - 1);

  function heroSize(it) {
    const max = (parseFloat(getComputedStyle(headline).fontSize) || 120) * (it.latin ? 1 : 0.9);
    const b = box100(it);
    const W = win.clientWidth || 300, H = win.clientHeight || 150;
    return Math.max(24, Math.min(max, (W * 0.99 * 100) / b.w, (H * 0.97 * 100) / b.h));
  }
  function setY(el, y) {
    el._y = y;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  }
  function makeWord(it) {
    const box = document.createElement("span");
    box.className = "w";
    const t = document.createElement("span");
    t.className = "w-t" + (it.latin ? " latin" : "");
    if (!it.latin) t.style.fontFamily = fontStack(it);
    t.lang = it.lang;
    t.dir = it.rtl ? "rtl" : "ltr";
    t.setAttribute("translate", "no");
    if (it.latin) splitLetters(t, it.g); else t.textContent = it.g;
    t.style.fontSize = heroSize(it) + "px";
    box.append(t);
    return box;
  }
  function refitHero() {
    if (!heroBox) return;
    const t = heroBox.querySelector(".w-t");
    if (t) t.style.fontSize = heroSize(heroItem(heroIdx)) + "px";
    if (!heroBox._moving) setY(heroBox, 0);
  }
  function updateNow(it, i, animate) {
    nowText.textContent = "";
    const b = document.createElement("b");
    b.textContent = it.l;
    nowText.append(b, ` · ${it.s} · ${it.ro}`);
    countEl.textContent = i < 0 ? `—/${N}` : `${String(i + 1).padStart(2, "0")}/${N}`;
    if (animate && !reduce) nowText.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 500, easing: EXPO_OUT });
  }
  function rollTo(i, animate = true) {
    const tok = ++rollTok;
    heroIdx = i;
    const it = heroItem(i);
    win.querySelectorAll(".w.out").forEach(n => n.remove());
    const box = makeWord(it);
    const old = heroBox;
    heroBox = box;
    win.append(box);
    updateNow(it, i, animate);
    items.forEach(el => el.classList.toggle("is-current", +el.dataset.i === i));
    if (old) old.classList.add("out");

    if (!animate) {
      if (old) old.remove();
      setY(box, 0);
      return;
    }
    if (reduce) {
      setY(box, 0);
      box.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: "ease-out" });
      if (old) old.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: "forwards" }).finished.then(() => old.remove(), () => {});
      return;
    }
    const H = win.clientHeight || 100;
    const oldStart = old ? (old._y || 0) : 0;
    box._moving = true;
    setY(box, H);
    blurOn(heroBlur);
    tween({
      dur: 950, ease: inOutPow(3.4), alive: () => tok === rollTok,
      blurs: [{ b: heroBlur, dist: H }],
      update: p => {
        setY(box, (1 - p) * H);
        if (old) setY(old, oldStart + (-H - oldStart) * p);
      }
    }).then(() => {
      box._moving = false;
      if (old) old.remove();
      if (tok === rollTok) blurOff(heroBlur);
    });
  }
  function scheduleHero() {
    clearTimeout(heroTimer);
    if (!heroRunning || heroPaused) return;
    heroTimer = setTimeout(() => { rollTo(nextIdx(heroIdx)); scheduleHero(); }, HOLD);
  }
  function startHero() { heroRunning = true; scheduleHero(); }
  function stopHero() { heroRunning = false; clearTimeout(heroTimer); }
  function step(dir) { rollTo(dir > 0 ? nextIdx(heroIdx) : prevIdx(heroIdx)); scheduleHero(); }

  $("prev").addEventListener("click", () => step(-1));
  $("next").addEventListener("click", () => step(1));
  $("pause").addEventListener("click", () => {
    heroPaused = !heroPaused;
    const p = $("pause");
    p.setAttribute("aria-label", heroPaused ? "Putar" : "Jeda");
    p.setAttribute("aria-pressed", String(heroPaused));
    $("i-pause").hidden = heroPaused;
    $("i-play").hidden = !heroPaused;
    scheduleHero();
  });

  document.addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (introActive) {
      if ((e.key === "Escape" || e.key === "Enter") && skipNow) { e.preventDefault(); skipNow(); }
      return;
    }
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  });

  /* ---------- daftar sapaan ---------- */
  const regionsEl = $("regions");
  GROUPS.forEach((gr, rg) => {
    const sec = document.createElement("div");
    sec.className = "region";
    const head = document.createElement("div");
    head.className = "region-head";
    const h3 = document.createElement("h3");
    h3.textContent = gr[0];
    const cnt = document.createElement("span");
    cnt.textContent = `${gr[1].length} sapaan`;
    head.append(h3, cnt);
    const ul = document.createElement("ul");
    ul.className = "items";
    D.forEach((it, i) => {
      if (it.rg !== rg) return;
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "item";
      b.dataset.i = String(i);
      b.title = `${it.ro} · ${it.s}`;
      b.setAttribute("aria-label", `${it.l}: ${it.ro}`);
      const g = document.createElement("span");
      g.className = "item-g";
      g.lang = it.lang;
      g.dir = it.rtl ? "rtl" : "ltr";
      g.setAttribute("translate", "no");
      g.style.fontFamily = fontStack(it);
      g.textContent = it.g;
      const c = document.createElement("span");
      c.className = "item-c";
      c.textContent = it.l;
      b.append(g, c);
      b.addEventListener("click", () => {
        rollTo(i);
        scheduleHero();
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      });
      li.append(b);
      ul.append(li);
      items.push(b);
    });
    sec.append(head, ul);
    regionsEl.append(sec);
  });

  /* ---------- ukuran layar & font ---------- */
  let rz = 0;
  window.addEventListener("resize", () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      if (introActive) { layoutReel(); layoutShutters(); }
      refitHero();
    }, 120);
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refitHero);

  /* ---------- mulai ---------- */
  splitLetters(dunia, "dunia.");
  rollTo(-1, false);
  playIntro(true);
})();
