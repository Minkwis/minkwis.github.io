/* ==========================================================================
   1. ДАННЫЕ  ←  РЕДАКТИРУЙТЕ ЗДЕСЬ
   ========================================================================== */

const META = { title:'Дорожная карта обучения', subtitle:'Физика, математика, программы и инженерные дисциплины' };

/* --- Цвета ТЕМ (карточек-узлов) --- */
const PALETTE = {
  slate:'#64748b', amber:'#f59e0b', blue:'#3b82f6', purple:'#a855f7',
  violet:'#8b5cf6', rose:'#f43f5e', teal:'#14b8a6', cyan:'#06b6d4',
  indigo:'#6366f1', green:'#22c55e', pink:'#ec4899', sky:'#0ea5e9',
  lime:'#84cc16', orange:'#f97316', emerald:'#10b981', red:'#ef4444'
};

/* --- Уровни ОБЯЗАТЕЛЬНОСТИ подтем --- */
const LEVELS = {
  must : { label:'Обязательно', color:'#18c75b' },
  core : { label:'Важно',       color:'#ffe608' },
  extra: { label:'По желанию',  color:'#64748b' },
  bonus: { label:'Бонус',       color:'#8b5cf6' }
};
const DEFAULT_LEVEL = 'core';

/* --- Узлы --- */
const NODES = [

{ id:'start', title:'Старт', kind:'milestone', row:0, color:'blue', width:250,
  summary:'Точка входа в обучение',
  desc:'Дорожная карта обучения: от базовой физики и математики — через прикладную архитектуру к инженерным дисциплинам и программам.',
  items:[] },

/* ---------- РЯД 1 ---------- */
{ id:'physics', title:'Физика', kind:'topic', row:1, color:'amber', width:200,
  leavesSide:'left', leafWidth:190, summary:'Базовые разделы физики',
  desc:'Фундаментальные разделы физики: от механики до электромагнетизма и термодинамики.',
  items:[
    { title:'Кинематика', level:'must', desc:'Описание движения: скорость, ускорение, траектория, уравнения движения.', links:[] },
    { title:'Статика', level:'must', desc:'Равновесие тел, силы, моменты, условия равновесия.', links:[] },
    { title:'Динамика', level:'must', desc:'Законы Ньютона, сила, масса, ускорение, работа и энергия.', links:[] },
    { title:'Моменты', level:'core', desc:'Моменты сил, вращательное движение, момент инерции.', links:[] },
    { title:'Термодинамика', level:'core', desc:'Тепловые процессы, температура, теплопередача, законы термодинамики.', links:[] },
    { title:'Электростатика + электродинамика', level:'core', desc:'Электрические заряды, поля, токи, законы Ома и Кирхгофа.', links:[] }
  ] },

{ id:'math', title:'Математика', kind:'topic', row:1, color:'blue', width:200,
  leavesSide:'right', leafWidth:190, summary:'Базовая математика',
  desc:'Математический фундамент: от интегралов и тригонометрии до функций и векторов.',
  items:[
    { title:'Интегралы', level:'must', desc:'Определённые и неопределённые интегралы, методы интегрирования.', links:[] },
    { title:'Тригонометрия', level:'must', desc:'Тригонометрические функции, уравнения, неравенства, формулы.', links:[] },
    { title:'Функции', level:'must', desc:'Понятие функции, свойства, графики, преобразования.', links:[] },
    { title:'Планиметрия', level:'core', desc:'Геометрия на плоскости: точки, линии, углы, треугольники, окружности.', links:[] },
    { title:'Векторы', level:'core', desc:'Векторы, операции над ними, скалярное и векторное произведения.', links:[] },
    { title:'Стереометрия', level:'extra', desc:'Пространственная геометрия: тела, поверхности, объёмы.', links:[] },
    { title:'Неравенства', level:'extra', desc:'Числовые неравенства, неравенства с одной и несколькими переменными.', links:[] },
    { title:'База: линал + матан + аналитическая геометрия', level:'core', desc:'Линейная алгебра, математический анализ, аналитическая геометрия.', links:[] }
  ] },

{ id:'programs', title:'Программы', kind:'topic', row:1, color:'purple', width:200,
  leavesSide:'left', leafWidth:190, summary:'3D-моделирование и визуализация',
  desc:'Инструменты для 3D-моделирования, визуализации и рендеринга.',
  items:[
    { title:'Rhino', level:'core', desc:'Профессиональное 3D-моделирование NURBS-поверхностей.', links:[] },
    { title:'3D max', level:'core', desc:'3D-моделирование, анимация и визуализация.', links:[] },
    { title:'Blender', level:'core', desc:'Открытый инструмент для 3D-графики: моделирование, анимация, рендеринг.', links:[] }
  ] },

/* ---------- РЯД 2 ---------- */
{ id:'applied_arch', title:'Прикладная архитектура', kind:'hub', row:2, color:'rose', width:230,
  leavesSide:'split', leafWidth:210, summary:'',
  desc:'Переход от базовых дисциплин к прикладной архитектуре: расчёты, механика, геодезия.',
  items:[
  ] },

/* ---------- РЯД 3 ---------- */
{ id:'eng_math', title:'Инж. математика', kind:'topic', row:3, color:'teal', width:200,
  leavesSide:'left', leafWidth:190, summary:'Прикладная математика для инженеров',
  desc:'Математические методы, применяемые в инженерных расчётах.',
  items:[
    { title:'Линейные уравнения', level:'must', desc:'Системы линейных уравнений, методы решения.', links:[] },
    { title:'Векторная алгебра', level:'must', desc:'Операции с векторами в инженерных задачах.', links:[] },
    { title:'Пределы и непрерывность', level:'core', desc:'Понятие предела, непрерывность функций.', links:[] },
    { title:'Определённый интеграл', level:'core', desc:'Применение определённых интегралов в инженерии.', links:[] },
    { title:'Неопределённый интеграл', level:'core', desc:'Методы интегрирования.', links:[] },
    { title:'Производная одной переменной', level:'core', desc:'Дифференцирование, применение производных.', links:[] },
    { title:'Дифференциал функции', level:'extra', desc:'Дифференциалы, приближённые вычисления.', links:[] }
  ] },

{ id:'eng_physics', title:'Инж. физика', kind:'topic', row:3, color:'cyan', width:200,
  leavesSide:'right', leafWidth:200, summary:'Физика в инженерных задачах',
  desc:'Прикладные разделы физики для инженерных расчётов.',
  items:[
    { title:'Сопромат', level:'must', desc:'Сопротивление материалов: прочность, жёсткость, устойчивость.', links:[] },
    { title:'Теоретическая механика', level:'must', desc:'Статика, кинематика, динамика в инженерных приложениях.', links:[] },
    { title:'Строительная механика', level:'must', desc:'Расчёт конструкций и сооружений.', links:[] },
    { title:'Инженерная геодезия + геология', level:'core', desc:'Геодезия и геология в строительстве.', links:[] },
    { title:'Механика жидкости и газа', level:'core', desc:'Гидравлика, аэродинамика.', links:[] },
    { title:'Электротехника и электроснабжение', level:'core', desc:'Электрические системы в инженерии.', links:[] }
  ] },

{ id:'programs_adv', title:'Программы', kind:'topic', row:3, color:'indigo', width:200,
  leavesSide:'left', leafWidth:190, summary:'Продвинутые инженерные программы',
  desc:'Специализированное ПО для проектирования и визуализации.',
  items:[
    { title:'Revit технический', level:'must', desc:'BIM-моделирование, техническое проектирование.', links:[] },
    { title:'Corona', level:'core', desc:'Движок для фотореалистичного рендеринга.', links:[] },
    { title:'Grasshopper', level:'core', desc:'Визуальное программирование для параметрического моделирования.', links:[] }
  ] },

{ id:'docs', title:'Документация', kind:'topic', row:3, color:'green', width:200,
  leavesSide:'right', leafWidth:200, summary:'Нормативные документы и стандарты',
  desc:'ГОСТы, СП и другие нормативные документы.',
  items:[
    { title:'ЕСКД', level:'must', desc:'Единая система конструкторской документации.', links:[] },
    { title:'ГОСТ 2', level:'must', desc:'**ГОСТ 2.303-68:** Типы и толщины линий на чертежах.\n**ГОСТ 2.304-81:** Чертёжные шрифты\n**ГОСТ 2.306-68:** Графические обозначения материалов в сечениях и на чертежах.\n**ГОСТ 2.307-2011:** Для чего нужен', links:[] },
    { title:'ГОСТ 21', level:'core', desc:'**ГОСТ Р 21.101-2026:** Основные требования к проектной и рабочей документации: оформление листов, основные надписи, общие данные, внесение изменений, комплектование. Введён с 1 апреля 2026 года вместо ГОСТ Р 21.101-2020. Росстандарт +1\n**ГОСТ 21.501-2018:** Рабочие чертежи АР и КР: планы, разрезы, фасады, узлы, спецификации. Перед применением проверь актуальный статус и заменяющие документы. Росстандарт +1\n**ГОСТ 21.204-2020:** Условные графические обозначения и изображения элементов генеральных планов и сооружений транспорта.\n**ГОСТ 21.201-2011:** Условные графические изображения элементов зданий и сооружений на чертежах.', links:[] },
    { title:'СП', level:'core', desc:'Своды правил.', links:[] }
  ] },

{ id:'bk', title:'БК', kind:'topic', row:3, color:'lime', width:180,
  leavesSide:'left', leafWidth:178, summary:'Базовые компетенции',
  desc:'Общие инженерные компетенции.',
  items:[
    { title:'Экономика', level:'extra', desc:'Основы экономики.', links:[] },
    { title:'Черчение', level:'must', desc:'Инженерная графика.', links:[] },
    { title:'ОСП', level:'core', desc:'Основы строительного проектирования.', links:[] },
    { title:'ППАП', level:'core', desc:'Проектная документация.', links:[] }
  ] }

];

/* --- Связи между узлами --- */
const EDGES = [
  { from:'start', to:'physics' },
  { from:'start', to:'math' },
  { from:'start', to:'programs' },
  
  { from:'physics', to:'applied_arch' },
  { from:'math', to:'applied_arch' },
  { from:'programs', to:'applied_arch' },
  
  { from:'applied_arch', to:'eng_math' },
  { from:'applied_arch', to:'eng_physics' },
  { from:'applied_arch', to:'programs_adv' },
  { from:'applied_arch', to:'docs' },
  { from:'applied_arch', to:'bk' }
];

/* ==========================================================================
   2. КОНФИГУРАЦИЯ РАСКЛАДКИ
   ========================================================================== */
const CFG = {
  cardWidth: 200,
  leafWidth: 180,
  leafGap: 36,
  colGap: 70,
  rowGap: 110,
  vGap: 10,
  corner: 14,
  pad: 80,
  minZoom: 0.25,
  maxZoom: 2.2
};
const STORAGE_KEY = 'roadmap-state-v2';

/* ==========================================================================
   3. СОСТОЯНИЕ + УТИЛИТЫ
   ========================================================================== */
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>String(s).toLowerCase().replace(/[^a-z0-9а-яё]+/giu,'_').replace(/^_|_$/g,'');
const plural=(n,a,b,c)=>{const m=n%100;return (m>=5&&m<=20)||(m%10>=5)||(m%10===0)?c:(m%10===1)?a:(m%10>=2&&m%10<=4)?b:c;}
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const accentOf=n=>PALETTE[n.color]||'#64748b';
const lvlOf=k=>LEVELS[k]||LEVELS[DEFAULT_LEVEL];
const fmt=s=>esc(s).replace(/\n/g,'<br>').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`(.+?)`/g,'<code>$1</code>');

const State={done:new Set(),notes:{},folded:new Set(),zoom:1,tx:0,ty:0,theme:'light'};
const NODE_MAP=new Map();
const ALL_ITEMS=[];

function loadState(){
  try{const r=localStorage.getItem(STORAGE_KEY);if(!r)return;const d=JSON.parse(r);
    State.done=new Set(Array.isArray(d.done)?d.done:[]);
    State.notes=(d.notes&&typeof d.notes==='object')?d.notes:{};
    State.theme=d.theme||'light';
  }catch(e){ console.warn('Сохранение не прочитано',e); }
}
let saveT;
function saveState(){ clearTimeout(saveT); saveT=setTimeout(()=>{
  try{ localStorage.setItem(STORAGE_KEY,JSON.stringify({done:[...State.done],notes:State.notes,theme:State.theme,v:2})); }catch(e){}
},180); }

function prepare(){
  NODES.forEach(n=>{
    n.w = n.width || CFG.cardWidth;
    n.lw = n.leafWidth || CFG.leafWidth;
    n.side = n.leavesSide || 'right';
    n.items = (n.items||[]).map((it,i)=>{
      const o = (typeof it==='string') ? {title:it} : Object.assign({},it);
      o.key  = n.id+'::'+(o.id||slug(o.title));
      o.level= o.level||DEFAULT_LEVEL;
      o.links= o.links||[];
      o._i=i; o._node=n;
      return o;
    });
    const half = Math.ceil(n.items.length/2);
    n.items.forEach((o,i)=>{
      if(n.side==='split') o._side = o.side || (i<half?'left':'right');
      else o._side = n.side;
    });
    n.L = n.items.filter(o=>o._side==='left');
    n.R = n.items.filter(o=>o._side==='right');
    n.h=0;n.x=0;n.y=0;
    NODE_MAP.set(n.id,n);
    n.items.forEach(o=>ALL_ITEMS.push(o));
  });
}

const ICO={
  check:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  chev:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>',
  sun:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>',
  moon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>'
};

/* ==========================================================================
   4. ПОСТРОЕНИЕ DOM
   ========================================================================== */
const nodesEl=$('#nodes'), edgesEl=$('#edges'), worldEl=$('#world'), stageEl=$('#stage');

function build(){
  nodesEl.innerHTML='';
  NODES.forEach(n=>{
    const c=document.createElement('article');
    c.className='card card--'+n.kind; c.dataset.id=n.id;
    c.style.setProperty('--accent',accentOf(n)); c.style.width=n.w+'px';
    const t=n.items.length;
    c.innerHTML=`
      <header class="card__head" data-open="${n.id}">
        <div style="flex:1;min-width:0">
          <h3 class="card__ttl">${esc(n.title)}</h3>
          <div class="card__sub">${t?`${t} ${plural(t,'подтема','подтемы','подтем')} · <span data-cnt>0/${t}</span>`:esc(n.summary||'')}</div>
        </div>
        ${t?`<div class="ringwrap"><svg class="ring" viewBox="0 0 36 36"><circle class="bg" cx="18" cy="18" r="15.9"/><circle class="fg" cx="18" cy="18" r="15.9" pathLength="100" stroke-dasharray="0 100"/></svg><span class="ringtxt">0</span></div>
        <button class="fold" data-fold="${n.id}" title="Свернуть подтемы">${ICO.chev}</button>`:''}
      </header>
      ${t?`<div class="card__bar"><i></i></div>`:''}`;
    nodesEl.appendChild(c); n.el=c;

    n.items.forEach(it=>{
      const lv=lvlOf(it.level);
      const d=document.createElement('div');
      d.className='leaf'; d.dataset.key=it.key; d.dataset.node=n.id;
      d.style.setProperty('--lv',lv.color); d.style.width=n.lw+'px';
      d.title = lv.label + (it.desc?' · есть описание':'');
      d.innerHTML=`<span class="leaf__lv">${esc(lv.label)}</span>
        <span class="leaf__box">${ICO.check}</span>
        <span class="leaf__lb">${esc(it.title)}</span>
        ${(it.desc||it.links.length)?`<span class="leaf__dot"></span>`:''}`;
      nodesEl.appendChild(d); it.el=d;
    });
  });
}

/* ==========================================================================
   5. РАСКЛАДКА (ортогональная, ряды + боковые колонки подтем)
   ========================================================================== */
function measure(){
  NODES.forEach(n=>{
    n.el.style.visibility='hidden'; n.el.style.left='0px'; n.el.style.top='0px';
    n.items.forEach(it=>{ it.el.style.visibility='hidden'; it.el.style.left='0px'; it.el.style.top='0px';
      it.el.style.display = State.folded.has(n.id)?'none':'flex'; });
  });
  void nodesEl.offsetHeight;
  NODES.forEach(n=>{
    n.h=n.el.offsetHeight; n.el.style.visibility='';
    n.items.forEach(it=>{ it.h=it.el.offsetHeight; it.el.style.visibility=''; });
  });
}
function colH(list){ return list.length? list.reduce((s,i)=>s+i.h,0)+CFG.vGap*(list.length-1) : 0; }

function layout(){
  measure();
  const rows=new Map();
  NODES.forEach(n=>{ if(!rows.has(n.row)) rows.set(n.row,[]); rows.get(n.row).push(n); });
  const ordered=[...rows.entries()].sort((a,b)=>a[0]-b[0]);

  ordered.forEach(([,list])=>{
    list.forEach(n=>{
      const lw = (State.folded.has(n.id)||!n.L.length)?0:(n.lw+CFG.leafGap);
      const rw = (State.folded.has(n.id)||!n.R.length)?0:(CFG.leafGap+n.lw);
      n._bw = lw + n.w + rw; n._lw = lw;
    });
  });

  let y=0;
  ordered.forEach(([,list])=>{
    let over=0;
    list.forEach(n=>{
      if(State.folded.has(n.id)) return;
      over=Math.max(over,(colH(n.L)-n.h)/2,(colH(n.R)-n.h)/2);
    });
    over=Math.max(0,over);
    const hubY=y+over;

    const totalW=list.reduce((s,n)=>s+n._bw,0)+CFG.colGap*(list.length-1);
    let x=-totalW/2;
    list.forEach(n=>{
      n.x=x+n._lw; n.y=hubY; n._bx=x; x+=n._bw+CFG.colGap;
      const cy=hubY+n.h/2;
      const place=(arr,side)=>{
        if(!arr.length||State.folded.has(n.id)) return;
        const h=colH(arr); let ly=cy-h/2;
        const lx = side==='left' ? n.x-CFG.leafGap-n.lw : n.x+n.w+CFG.leafGap;
        arr.forEach(it=>{ it.x=lx; it.y=ly; ly+=it.h+CFG.vGap; });
      };
      place(n.L,'left'); place(n.R,'right');
    });
    let bottom=hubY;
    list.forEach(n=>{
      bottom=Math.max(bottom,n.y+n.h);
      n.items.forEach(it=>{ if(!State.folded.has(n.id)) bottom=Math.max(bottom,it.y+it.h); });
    });
    y=bottom+CFG.rowGap;
  });

  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  NODES.forEach(n=>{
    minX=Math.min(minX,n.x);maxX=Math.max(maxX,n.x+n.w);minY=Math.min(minY,n.y);maxY=Math.max(maxY,n.y+n.h);
    n.items.forEach(it=>{ if(State.folded.has(n.id))return;
      minX=Math.min(minX,it.x);maxX=Math.max(maxX,it.x+n.lw);minY=Math.min(minY,it.y);maxY=Math.max(maxY,it.y+it.h); });
  });
  const hasSkipR=EDGES.some(e=>e.kind==='skip'&&e.side!=='left');
  const hasSkipL=EDGES.some(e=>e.kind==='skip'&&e.side==='left');
  const padL=CFG.pad+(hasSkipL?70:0), padR=CFG.pad+(hasSkipR?70:0);
  const ox=-minX+padL, oy=-minY+CFG.pad;
  NODES.forEach(n=>{ n.x+=ox;n.y+=oy; n.items.forEach(it=>{it.x+=ox;it.y+=oy;}); });
  const W=(maxX-minX)+padL+padR, H=(maxY-minY)+CFG.pad*2;
  NODES.forEach(n=>{ n.el.style.left=n.x+'px'; n.el.style.top=n.y+'px';
    n.items.forEach(it=>{ it.el.style.left=it.x+'px'; it.el.style.top=it.y+'px'; }); });
  worldEl.style.width=W+'px'; worldEl.style.height=H+'px';
  edgesEl.setAttribute('width',W); edgesEl.setAttribute('height',H);
  edgesEl.setAttribute('viewBox',`0 0 ${W} ${H}`);
}

/* ==========================================================================
   6. ЛИНИИ: ортогональные со скруглёнными углами 90°
   ========================================================================== */
function dedupe(p){ return p.filter((q,i)=> i===0 || Math.abs(q[0]-p[i-1][0])>.05 || Math.abs(q[1]-p[i-1][1])>.05 ); }
function ortho(pts,r){
  pts=dedupe(pts);
  if(pts.length<2) return '';
  if(pts.length===2) return `M${pts[0][0]},${pts[0][1]}L${pts[1][0]},${pts[1][1]}`;
  let d=`M${pts[0][0]},${pts[0][1]}`;
  for(let i=1;i<pts.length-1;i++){
    const [px,py]=pts[i-1],[cx,cy]=pts[i],[nx,ny]=pts[i+1];
    const d1=Math.hypot(cx-px,cy-py)||1, d2=Math.hypot(nx-cx,ny-cy)||1;
    const rr=Math.min(r,d1/2,d2/2);
    d+=`L${(cx+(px-cx)/d1*rr).toFixed(1)},${(cy+(py-cy)/d1*rr).toFixed(1)}`
     + `Q${cx},${cy} ${(cx+(nx-cx)/d2*rr).toFixed(1)},${(cy+(ny-cy)/d2*rr).toFixed(1)}`;
  }
  const l=pts[pts.length-1]; d+=`L${l[0]},${l[1]}`; return d;
}

function drawEdges(){
  const rb=new Map();
  NODES.forEach(n=>{
    if(!rb.has(n.row)) rb.set(n.row,{top:n.y,bot:n.y+n.h});
    const b=rb.get(n.row); b.top=Math.min(b.top,n.y); b.bot=Math.max(b.bot,n.y+n.h);
    n.items.forEach(it=>{ if(State.folded.has(n.id))return;
      b.top=Math.min(b.top,it.y); b.bot=Math.max(b.bot,it.y+it.h); });
  });
  let minX=Infinity,maxX=-Infinity;
  NODES.forEach(n=>{minX=Math.min(minX,n.x);maxX=Math.max(maxX,n.x+n.w);
    n.items.forEach(it=>{if(State.folded.has(n.id))return;minX=Math.min(minX,it.x);maxX=Math.max(maxX,it.x+n.lw);});});
  const railR=maxX+62, railL=minX-62;

  const colors=new Set(); NODES.forEach(n=>colors.add(accentOf(n)));
  let defs='<defs>';
  defs+=`<marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,1 L9.4,5 L0,9 z" fill="var(--edge)"/></marker>`;
  colors.forEach(c=>{
    const id='a'+c.replace('#','');
    defs+=`<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1.4 L9,5 L0,8.6 z" fill="${c}"/></marker>`;
  });
  defs+='</defs>';
  const mk=c=>'url(#a'+c.replace('#','')+')';

  let s=defs;
  NODES.forEach(n=>{
    if(State.folded.has(n.id)||!n.items.length) return;
    const acc=accentOf(n), cy=n.y+n.h/2;
    n.items.forEach(it=>{
      const left=it._side==='left';
      const busX= left ? n.x-CFG.leafGap/2 : n.x+n.w+CFG.leafGap/2;
      const iy=it.y+it.h/2;
      const pts= left
        ? [[n.x,cy],[busX,cy],[busX,iy],[it.x+n.lw,iy]]
        : [[n.x+n.w,cy],[busX,cy],[busX,iy],[it.x,iy]];
      s+=`<path class="br" d="${ortho(pts,9)}" stroke="${acc}" data-hub="${n.id}" data-leaf="${it.key}" marker-end="${mk(acc)}"/>`;
    });
  });
  EDGES.forEach(e=>{
    const a=NODE_MAP.get(e.from), b=NODE_MAP.get(e.to); if(!a||!b) return;
    let pts, cls='flow';
    if(e.kind==='skip'){
      const right=e.side!=='left';
      const sx=right?a.x+a.w:a.x, sy=a.y+a.h/2;
      const tx=right?b.x+b.w:b.x, ty=b.y+b.h/2;
      const rail=right?railR:railL;
      pts=[[sx,sy],[rail,sy],[rail,ty],[tx,ty]];
      cls='flow skip';
    }else{
      const ra=rb.get(a.row), rbb=rb.get(b.row);
      const busY=(ra.bot+rbb.top)/2;
      const sx=a.x+a.w/2, sy=a.y+a.h, tx=b.x+b.w/2, ty=b.y;
      pts=[[sx,sy],[sx,busY],[tx,busY],[tx,ty]];
    }
    s+=`<path class="${cls}" d="${ortho(pts,CFG.corner)}" data-from="${e.from}" data-to="${e.to}" marker-end="url(#arw)"/>`;
  });
  edgesEl.innerHTML=s;
}

/* ==========================================================================
   7. ПРОГРЕСС
   ========================================================================== */
function nodeProgress(n){
  const t=n.items.length; if(!t) return {done:0,total:0,pct:0};
  const d=n.items.filter(i=>State.done.has(i.key)).length;
  return {done:d,total:t,pct:Math.round(d/t*100)};
}
function refreshProgress(){
  let D=0,T=0;
  NODES.forEach(n=>{
    const p=nodeProgress(n); D+=p.done; T+=p.total;
    if(!n.el) return;
    n.el.classList.toggle('folded',State.folded.has(n.id));
    const fg=$('.ring .fg',n.el), rt=$('.ringtxt',n.el), bar=$('.card__bar i',n.el), cnt=$('[data-cnt]',n.el);
    if(fg) fg.setAttribute('stroke-dasharray',`${p.pct} 100`);
    if(rt) rt.textContent=p.pct;
    if(bar) bar.style.width=p.pct+'%';
    if(cnt) cnt.textContent=`${p.done}/${p.total}`;
    n.items.forEach(it=>it.el&&it.el.classList.toggle('done',State.done.has(it.key)));
  });
  const pct=T?Math.round(D/T*100):0;
  $('#progRing').setAttribute('stroke-dasharray',`${pct} 100`);
  $('#progVal').textContent=pct+'%';
  $('#progLbl').textContent=`${D} / ${T} ${plural(T,'тема','темы','тем')}`;
  if(panelOpen&&panelNode) renderPanel(panelNode.id,panelItem);
}
function toggleItem(k){ State.done.has(k)?State.done.delete(k):State.done.add(k); saveState(); refreshProgress(); }

/* ==========================================================================
   8. ВИД
   ========================================================================== */
function apply(){
  worldEl.style.transform=`translate(${State.tx}px,${State.ty}px) scale(${State.zoom})`;
  const g=24*State.zoom;
  stageEl.style.backgroundSize=`${g}px ${g}px`;
  stageEl.style.backgroundPosition=`${State.tx}px ${State.ty}px`;
  $('#zVal').textContent=Math.round(State.zoom*100)+'%';
}
function fit(mode){
  const sw=stageEl.clientWidth, sh=stageEl.clientHeight;
  const W=parseFloat(worldEl.style.width)||1, H=parseFloat(worldEl.style.height)||1;
  const k= mode==='width' ? clamp((sw-70)/W,CFG.minZoom,1.15)
                          : clamp(Math.min((sw-70)/W,(sh-70)/H),CFG.minZoom,1.15);
  State.zoom=k; State.tx=(sw-W*k)/2; State.ty= mode==='width'?36:(sh-H*k)/2; apply();
}
function zoomAt(cx,cy,f){
  const k2=clamp(State.zoom*f,CFG.minZoom,CFG.maxZoom);
  const wx=(cx-State.tx)/State.zoom, wy=(cy-State.ty)/State.zoom;
  State.tx=cx-wx*k2; State.ty=cy-wy*k2; State.zoom=k2; apply();
}
function centerOn(n){
  const sw=stageEl.clientWidth, sh=stageEl.clientHeight;
  State.zoom=clamp(Math.max(State.zoom,.6),CFG.minZoom,1.2);
  State.tx=sw/2-(n.x+n.w/2)*State.zoom; State.ty=sh/2-(n.y+n.h/2)*State.zoom; apply();
}

/* ==========================================================================
   9. ПАНЕЛЬ
   ========================================================================== */
let panelOpen=false, panelNode=null, panelItem=null;
function openPanel(nodeId,itemKey){
  panelNode=NODE_MAP.get(nodeId); if(!panelNode) return;
  panelItem=itemKey||null; panelOpen=true;
  $('#panel').classList.add('open'); $('#panel').setAttribute('aria-hidden','false'); $('#scrim').classList.add('on');
  renderPanel(nodeId,itemKey);
  $$('.leaf').forEach(l=>l.classList.toggle('sel',!!itemKey&&l.dataset.key===itemKey));
}
function closePanel(){
  panelOpen=false; $('#panel').classList.remove('open'); $('#panel').setAttribute('aria-hidden','true');
  $('#scrim').classList.remove('on'); $$('.leaf.sel').forEach(l=>l.classList.remove('sel'));
}
function renderPanel(nodeId,itemKey){
  const n=NODE_MAP.get(nodeId); if(!n) return;
  const acc=accentOf(n), p=nodeProgress(n);
  $('#panelHead').style.setProperty('--accent',acc);
  const it=itemKey?n.items.find(i=>i.key===itemKey):null;
  $('#panelHead').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="panel__crumb">${esc(n.title)}${p.total?` · ${p.done}/${p.total}`:''}</div>
      <h2 class="panel__ttl">${esc(it?it.title:n.title)}</h2>
    </div>
    <button class="panel__x" id="panelX" title="Закрыть (Esc)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`;
  $('#panelX').onclick=closePanel;

  let h='';
  if(it){
    const lv=lvlOf(it.level);
    h+=`<span class="p-badge" style="background:${lv.color}">${esc(lv.label)}</span>`;
    if(it.desc) h+=`<p class="p-desc">${fmt(it.desc)}</p>`;
    h+=`<div class="p-btns"><button class="p-btn ${State.done.has(it.key)?'pri':''}" data-toggle="${esc(it.key)}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>
        ${State.done.has(it.key)?'Выполнено':'Отметить выполненным'}</button></div>`;
    if(it.links.length){
      h+=`<div class="p-sec">Материалы</div><div class="p-links">`+it.links.map(l=>
        `<a class="p-link" href="${esc(l.url)}" target="_blank" rel="noopener">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>
         ${esc(l.label)}</a>`).join('')+`</div>`;
    }
    h+=`<div class="p-sec">Мои заметки</div>
      <textarea class="p-note" id="noteBox" placeholder="Что пройдено, какие вопросы остались, ссылки на свои конспекты…">${esc(State.notes[it.key]||'')}</textarea>
      <div class="p-btns"><span class="saved" id="savedFlag">Сохранено ✓</span></div>`;
    const idx=n.items.findIndex(i=>i.key===it.key);
    h+=`<div class="p-nav">
      <button class="p-btn" data-nav="${idx>0?esc(n.items[idx-1].key):''}" ${idx<=0?'disabled':''}>← Назад</button>
      <button class="p-btn" data-nav="${idx+1<n.items.length?esc(n.items[idx+1].key):''}" ${idx>=n.items.length-1?'disabled':''}>Далее →</button></div>`;
  }else{
    if(n.desc) h+=`<p class="p-desc">${fmt(n.desc)}</p>`;
    else if(n.summary) h+=`<p class="p-desc">${fmt(n.summary)}</p>`;
    if(n.items.length){
      h+=`<div class="p-sec">Подтемы · ${p.done} из ${p.total}</div><ul class="p-list">`+
        n.items.map(i=>{const lv=lvlOf(i.level);return `
        <li class="li ${State.done.has(i.key)?'done':''}" data-key="${esc(i.key)}" data-node="${n.id}" style="--lv:${lv.color}">
          <span class="li__box">${ICO.check}</span><span class="li__lb">${esc(i.title)}</span>
          <span style="width:9px;height:9px;border-radius:50%;background:${lv.color};flex:none;margin-top:6px" title="${esc(lv.label)}"></span>
        </li>`;}).join('')+`</ul>`;
      h+=`<div class="p-btns"><button class="p-btn" data-all="1">Отметить всё</button>
          <button class="p-btn" data-all="0">Снять всё</button></div>`;
    }
  }
  $('#panelBody').innerHTML=h; $('#panelBody').scrollTop=0;
  const note=$('#noteBox');
  if(note) note.addEventListener('input',()=>{
    State.notes[it.key]=note.value; saveState();
    const f=$('#savedFlag'); f.classList.add('on'); clearTimeout(note._t); note._t=setTimeout(()=>f.classList.remove('on'),1100);
  });
}
$('#panelBody').addEventListener('click',e=>{
  const tg=e.target.closest('[data-toggle]'); if(tg){toggleItem(tg.dataset.toggle);return;}
  const nv=e.target.closest('[data-nav]'); if(nv&&nv.dataset.nav){openPanel(panelNode.id,nv.dataset.nav);return;}
  const all=e.target.closest('[data-all]');
  if(all&&panelNode){ panelNode.items.forEach(i=>all.dataset.all==='1'?State.done.add(i.key):State.done.delete(i.key)); saveState(); refreshProgress(); return; }
  const li=e.target.closest('.li');
  if(li){
    if(e.target.closest('.li__box')){ toggleItem(li.dataset.key); }
    else openPanel(li.dataset.node,li.dataset.key);
  }
});

/* ==========================================================================
   10. СОБЫТИЯ ХОЛСТА
   ========================================================================== */
let dragged=false;
nodesEl.addEventListener('click',e=>{
  if(dragged) return;
  const f=e.target.closest('[data-fold]');
  if(f){ const id=f.dataset.fold; State.folded.has(id)?State.folded.delete(id):State.folded.add(id); relayout(); return; }
  const lf=e.target.closest('.leaf');
  if(lf){
    if(e.target.closest('.leaf__box')) toggleItem(lf.dataset.key);
    else openPanel(lf.dataset.node,lf.dataset.key);
    return;
  }
  const h=e.target.closest('[data-open]'); if(h) openPanel(h.dataset.open);
});
function setHi(id,on){
  $$('#edges path').forEach(p=>{
    const hit = p.dataset.hub===id || p.dataset.from===id || p.dataset.to===id;
    p.classList.toggle('hi', on&&hit);
  });
}
nodesEl.addEventListener('mouseover',e=>{
  const c=e.target.closest('.card'); if(!c) return;
  setHi(c.dataset.id,true);
});
nodesEl.addEventListener('mouseout',e=>{ if(e.target.closest('.card')) setHi(null,false); });
stageEl.addEventListener('mouseleave',()=>setHi(null,false));

let panning=false,sx=0,sy=0,stx=0,sty=0;
const activeTouches=new Map();
let pinching=false,pinchDistance=0,pinchMidpoint=null;
function getTouchMidpoint(){
  const points=[...activeTouches.values()];
  return {x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2};
}
stageEl.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0) return;
  if(e.pointerType==='touch'){
    if(e.target.closest('button,input,textarea,a')) return;
    activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(activeTouches.size===2){
      panning=false;pinching=true;dragged=true;stageEl.classList.remove('dragging');
      const r=stageEl.getBoundingClientRect(),mid=getTouchMidpoint();
      pinchMidpoint={x:mid.x-r.left,y:mid.y-r.top};
      pinchDistance=Math.hypot(activeTouches.get([...activeTouches.keys()][0]).x-activeTouches.get([...activeTouches.keys()][1]).x,
        activeTouches.get([...activeTouches.keys()][0]).y-activeTouches.get([...activeTouches.keys()][1]).y);
      e.preventDefault();return;
    }
    if(activeTouches.size>1) return;
  }
  if(e.target.closest('button,input,textarea,a,.leaf')) { panning=false; return; }
  panning=true;dragged=false;sx=e.clientX;sy=e.clientY;stx=State.tx;sty=State.ty;
  stageEl.classList.add('dragging');
  if(e.pointerType==='mouse') stageEl.setPointerCapture(e.pointerId);
});
stageEl.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch'&&activeTouches.has(e.pointerId)){
    activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pinching&&activeTouches.size>=2){
      const r=stageEl.getBoundingClientRect(),mid=getTouchMidpoint();
      const nextMid={x:mid.x-r.left,y:mid.y-r.top};
      const keys=[...activeTouches.keys()],a=activeTouches.get(keys[0]),b=activeTouches.get(keys[1]);
      const nextDistance=Math.hypot(a.x-b.x,a.y-b.y);
      const worldX=(pinchMidpoint.x-State.tx)/State.zoom,worldY=(pinchMidpoint.y-State.ty)/State.zoom;
      const nextZoom=clamp(State.zoom*(pinchDistance?nextDistance/pinchDistance:1),CFG.minZoom,CFG.maxZoom);
      State.tx=nextMid.x-worldX*nextZoom;State.ty=nextMid.y-worldY*nextZoom;State.zoom=nextZoom;
      pinchDistance=nextDistance;pinchMidpoint=nextMid;apply();e.preventDefault();return;
    }
  }
  if(!panning) return;
  const dx=e.clientX-sx, dy=e.clientY-sy;
  if(Math.abs(dx)+Math.abs(dy)>6) dragged=true;
  State.tx=stx+dx; State.ty=sty+dy; apply();
});
['pointerup','pointercancel'].forEach(ev=>stageEl.addEventListener(ev,e=>{
  if(e.pointerType==='touch'){
    activeTouches.delete(e.pointerId);
    if(pinching&&activeTouches.size<2){
      pinching=false;panning=false;pinchDistance=0;pinchMidpoint=null;stageEl.classList.remove('dragging');
      if(!activeTouches.size)setTimeout(()=>dragged=false,0);
    }else if(panning){
      panning=false;stageEl.classList.remove('dragging');setTimeout(()=>dragged=false,0);
    }
    return;
  }
  if(panning){panning=false;stageEl.classList.remove('dragging');setTimeout(()=>dragged=false,0);}
}));
stageEl.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=stageEl.getBoundingClientRect();
  zoomAt(e.clientX-r.left,e.clientY-r.top,Math.exp(-e.deltaY*(e.ctrlKey?.008:.0016)));
},{passive:false});
stageEl.addEventListener('dblclick',e=>{ if(!e.target.closest('.card,.leaf')) fit('all'); });

/* ==========================================================================
   11. ПОИСК
   ========================================================================== */
const searchInput=$('#search'), searchWrap=$('#searchWrap');
function runSearch(q){
  q=q.trim().toLowerCase(); searchWrap.classList.toggle('has-q',!!q);
  let hits=0;
  NODES.forEach(n=>{
    const cm=!q||n.title.toLowerCase().includes(q)||(n.summary||'').toLowerCase().includes(q)||(n.desc||'').toLowerCase().includes(q);
    let im=false;
    n.items.forEach(i=>{
      const m=!!q&&(i.title.toLowerCase().includes(q)||(i.desc||'').toLowerCase().includes(q));
      i.el.classList.toggle('hit',m);
      i.el.classList.toggle('dim',!!q&&!m&&!cm);
      if(m){im=true;hits++;}
    });
    if(q&&cm&&!im) hits++;
    n.el.classList.toggle('hit',!!q&&cm&&!im);
    n.el.classList.toggle('dim',!!q&&!cm&&!im);
  });
  $('#searchCnt').textContent=q?(hits?hits+' совп.':'нет совпадений'):'';
}
searchInput.addEventListener('input',()=>runSearch(searchInput.value));
searchInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'){ const f=$$('.card:not(.dim), .leaf:not(.dim)')[0];
    if(f){ const id=f.dataset.id||f.dataset.node; centerOn(NODE_MAP.get(id)); } }
  if(e.key==='Escape'){ searchInput.value='';runSearch('');searchInput.blur(); }
});
$('#searchClr').onclick=()=>{searchInput.value='';runSearch('');searchInput.focus();};

/* ==========================================================================
   12. ТУЛБАР
   ========================================================================== */
function setTheme(t){ State.theme=t; document.documentElement.dataset.theme=t; $('#btnTheme').innerHTML=t==='dark'?ICO.sun:ICO.moon; saveState(); }
$('#btnTheme').onclick=()=>setTheme(State.theme==='dark'?'light':'dark');

const menu=$('#menu');
$('#btnMenu').onclick=e=>{e.stopPropagation();menu.classList.toggle('open');};
document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.classList.remove('open');});
menu.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b) return;
  const a=b.dataset.act; if(a!=='import') menu.classList.remove('open');
  if(a==='expand'){ State.folded.clear(); relayout(); }
  if(a==='collapse'){ NODES.forEach(n=>{if(n.items.length)State.folded.add(n.id);}); relayout(); }
  if(a==='export'){
    const blob=new Blob([JSON.stringify({done:[...State.done],notes:State.notes,theme:State.theme,exported:new Date().toISOString()},null,2)],{type:'application/json'});
    const l=document.createElement('a'); l.href=URL.createObjectURL(blob); l.download='roadmap-progress.json'; l.click(); URL.revokeObjectURL(l.href);
    toast('Прогресс выгружен в файл');
  }
  if(a==='reset' && confirm('Сбросить весь прогресс и заметки?')){
    State.done.clear(); State.notes={}; saveState(); refreshProgress(); toast('Прогресс сброшен');
  }
});
$('#fileIn').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=()=>{ try{ const d=JSON.parse(r.result);
      State.done=new Set(Array.isArray(d.done)?d.done:[]);
      State.notes=(d.notes&&typeof d.notes==='object')?d.notes:{};
      if(d.theme) setTheme(d.theme);
      saveState(); refreshProgress(); menu.classList.remove('open'); toast('Прогресс загружен');
    }catch(err){toast('Ошибка чтения файла');} };
  r.readAsText(f); e.target.value='';
});
$('#zIn').onclick=()=>zoomAt(stageEl.clientWidth/2,stageEl.clientHeight/2,1.28);
$('#zOut').onclick=()=>zoomAt(stageEl.clientWidth/2,stageEl.clientHeight/2,.78);
$('#zFit').onclick=()=>fit('all');
$('#zWidth').onclick=()=>fit('width');
$('#zTop').onclick=()=>fit('width');

const modal=$('#modal');
$('#btnHelp').onclick=()=>modal.classList.add('on');
modal.addEventListener('click',e=>{if(e.target.closest('[data-close]')||e.target===modal)modal.classList.remove('on');});
const legend=$('#legend');
$('#legendTg').onclick=()=>legend.classList.toggle('min');
let toastT; function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),2200);}

document.addEventListener('keydown',e=>{
  if(/INPUT|TEXTAREA/.test(document.activeElement.tagName)){ if(e.key==='Escape')document.activeElement.blur(); return; }
  const k=e.key.toLowerCase();
  if(k==='escape'){ modal.classList.contains('on')?modal.classList.remove('on'):closePanel(); }
  if(k==='f') fit('all');
  if(k==='w') fit('width');
  if(k==='t') setTheme(State.theme==='dark'?'light':'dark');
  if(k==='h') modal.classList.toggle('on');
  if(k==='/'||k==='у'){ e.preventDefault(); searchInput.focus(); }
  if(k==='home') fit('width');
  if(k==='+'||k==='=') $('#zIn').click();
  if(k==='-') $('#zOut').click();
});
$('#scrim').onclick=closePanel;

/* ==========================================================================
   13. ЛЕГЕНДА УРОВНЕЙ + ЗАПУСК
   ========================================================================== */
function buildLegend(){
  $('#legendLevels').innerHTML=Object.entries(LEVELS).map(([k,v])=>
    `<div class="row"><span class="sw" style="background:color-mix(in srgb,${v.color} 16%,var(--card));border-color:${v.color}"></span>
     <span style="color:var(--text);font-weight:600">${esc(v.label)}</span>
     <span style="margin-left:auto;font-family:'JetBrains Mono Variable',monospace;font-size:11px;opacity:.7">${k}</span></div>`).join('');
}
function relayout(){ layout(); drawEdges(); refreshProgress(); }

function init(){
  loadState(); setTheme(State.theme||'light');
  $('#brandTitle').textContent=META.title; $('#brandSub').textContent=META.subtitle;
  document.title=META.title+' — roadmap';
  buildLegend(); prepare(); build(); layout(); drawEdges(); refreshProgress();
  requestAnimationFrame(()=>{
    NODES.forEach(n=>setTimeout(()=>n.el.classList.add('in'),70+n.row*95));
    ALL_ITEMS.forEach((it,i)=>setTimeout(()=>it.el.classList.add('in'),160+(it._node.row*95)+i*10));
  });
  setTimeout(()=>fit('width'),80);
  window.addEventListener('resize',()=>apply());
}
init();
document.fonts.ready.then(relayout);