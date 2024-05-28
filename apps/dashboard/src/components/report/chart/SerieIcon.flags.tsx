import type { LucideIcon, LucideProps } from 'lucide-react';

const createFlagIcon = (url: string) => {
  return function (_props: LucideProps) {
    return (
      <span
        className={`fi fis !block overflow-hidden rounded-full !leading-[1rem] fi-${url}`}
      ></span>
    );
  } as LucideIcon;
};

const data = {
  ie: createFlagIcon('ie'),
  tw: createFlagIcon('tw'),
  py: createFlagIcon('py'),
  kr: createFlagIcon('kr'),
  nz: createFlagIcon('nz'),
  do: createFlagIcon('do'),
  cl: createFlagIcon('cl'),
  dz: createFlagIcon('dz'),
  np: createFlagIcon('np'),
  ma: createFlagIcon('ma'),
  gh: createFlagIcon('gh'),
  zm: createFlagIcon('zm'),
  pa: createFlagIcon('pa'),
  tn: createFlagIcon('tn'),
  lk: createFlagIcon('lk'),
  sv: createFlagIcon('sv'),
  ve: createFlagIcon('ve'),
  sn: createFlagIcon('sn'),
  gt: createFlagIcon('gt'),
  xk: createFlagIcon('xk'),
  jm: createFlagIcon('jm'),
  cm: createFlagIcon('cm'),
  ni: createFlagIcon('ni'),
  uy: createFlagIcon('uy'),
  ss: createFlagIcon('ss'),
  cd: createFlagIcon('cd'),
  cu: createFlagIcon('cu'),
  kh: createFlagIcon('kh'),
  bb: createFlagIcon('bb'),
  gf: createFlagIcon('gf'),
  et: createFlagIcon('et'),
  pe: createFlagIcon('pe'),
  mo: createFlagIcon('mo'),
  mn: createFlagIcon('mn'),
  hn: createFlagIcon('hn'),
  cn: createFlagIcon('cn'),
  ng: createFlagIcon('ng'),
  se: createFlagIcon('se'),
  jp: createFlagIcon('jp'),
  hk: createFlagIcon('hk'),
  us: createFlagIcon('us'),
  gb: createFlagIcon('gb'),
  ua: createFlagIcon('ua'),
  ru: createFlagIcon('ru'),
  de: createFlagIcon('de'),
  fr: createFlagIcon('fr'),
  br: createFlagIcon('br'),
  in: createFlagIcon('in'),
  it: createFlagIcon('it'),
  es: createFlagIcon('es'),
  pl: createFlagIcon('pl'),
  nl: createFlagIcon('nl'),
  id: createFlagIcon('id'),
  tr: createFlagIcon('tr'),
  ph: createFlagIcon('ph'),
  ca: createFlagIcon('ca'),
  ar: createFlagIcon('ar'),
  mx: createFlagIcon('mx'),
  za: createFlagIcon('za'),
  au: createFlagIcon('au'),
  co: createFlagIcon('co'),
  ch: createFlagIcon('ch'),
  at: createFlagIcon('at'),
  be: createFlagIcon('be'),
  pt: createFlagIcon('pt'),
  my: createFlagIcon('my'),
  th: createFlagIcon('th'),
  vn: createFlagIcon('vn'),
  sg: createFlagIcon('sg'),
  eg: createFlagIcon('eg'),
  sa: createFlagIcon('sa'),
  pk: createFlagIcon('pk'),
  bd: createFlagIcon('bd'),
  ro: createFlagIcon('ro'),
  hu: createFlagIcon('hu'),
  cz: createFlagIcon('cz'),
  gr: createFlagIcon('gr'),
  il: createFlagIcon('il'),
  no: createFlagIcon('no'),
  fi: createFlagIcon('fi'),
  dk: createFlagIcon('dk'),
  sk: createFlagIcon('sk'),
  bg: createFlagIcon('bg'),
  hr: createFlagIcon('hr'),
  rs: createFlagIcon('rs'),
  ba: createFlagIcon('ba'),
  si: createFlagIcon('si'),
  lv: createFlagIcon('lv'),
  lt: createFlagIcon('lt'),
  ee: createFlagIcon('ee'),
  by: createFlagIcon('by'),
  md: createFlagIcon('md'),
  kz: createFlagIcon('kz'),
  uz: createFlagIcon('uz'),
  kg: createFlagIcon('kg'),
  tj: createFlagIcon('tj'),
  tm: createFlagIcon('tm'),
  az: createFlagIcon('az'),
  ge: createFlagIcon('ge'),
  am: createFlagIcon('am'),
  af: createFlagIcon('af'),
  ir: createFlagIcon('ir'),
  iq: createFlagIcon('iq'),
  sy: createFlagIcon('sy'),
  lb: createFlagIcon('lb'),
  jo: createFlagIcon('jo'),
  ps: createFlagIcon('ps'),
  kw: createFlagIcon('kw'),
  qa: createFlagIcon('qa'),
  om: createFlagIcon('om'),
  ye: createFlagIcon('ye'),
  ae: createFlagIcon('ae'),
  bh: createFlagIcon('bh'),
  cy: createFlagIcon('cy'),
  mt: createFlagIcon('mt'),
  sm: createFlagIcon('sm'),
  li: createFlagIcon('li'),
  is: createFlagIcon('is'),
  al: createFlagIcon('al'),
  mk: createFlagIcon('mk'),
  me: createFlagIcon('me'),
  ad: createFlagIcon('ad'),
  lu: createFlagIcon('lu'),
  mc: createFlagIcon('mc'),
  fo: createFlagIcon('fo'),
  gg: createFlagIcon('gg'),
  je: createFlagIcon('je'),
  im: createFlagIcon('im'),
  gi: createFlagIcon('gi'),
  va: createFlagIcon('va'),
  ax: createFlagIcon('ax'),
  bl: createFlagIcon('bl'),
  mf: createFlagIcon('mf'),
  pm: createFlagIcon('pm'),
  yt: createFlagIcon('yt'),
  wf: createFlagIcon('wf'),
  tf: createFlagIcon('tf'),
  re: createFlagIcon('re'),
  sc: createFlagIcon('sc'),
  mu: createFlagIcon('mu'),
  zw: createFlagIcon('zw'),
  mz: createFlagIcon('mz'),
  na: createFlagIcon('na'),
  bw: createFlagIcon('bw'),
  ls: createFlagIcon('ls'),
  sz: createFlagIcon('sz'),
  bi: createFlagIcon('bi'),
  rw: createFlagIcon('rw'),
  ug: createFlagIcon('ug'),
  ke: createFlagIcon('ke'),
  tz: createFlagIcon('tz'),
  mg: createFlagIcon('mg'),
  cr: createFlagIcon('cr'),
  ky: createFlagIcon('ky'),
  gy: createFlagIcon('gy'),
  mm: createFlagIcon('mm'),
  la: createFlagIcon('la'),
  gl: createFlagIcon('gl'),
  gp: createFlagIcon('gp'),
  fj: createFlagIcon('fj'),
  cv: createFlagIcon('cv'),
  gn: createFlagIcon('gn'),
  bj: createFlagIcon('bj'),
  bo: createFlagIcon('bo'),
  bq: createFlagIcon('bq'),
  bs: createFlagIcon('bs'),
  ly: createFlagIcon('ly'),
  bn: createFlagIcon('bn'),
  tt: createFlagIcon('tt'),
  sr: createFlagIcon('sr'),
  ec: createFlagIcon('ec'),
  mv: createFlagIcon('mv'),
  pr: createFlagIcon('pr'),
  ci: createFlagIcon('ci'),
};

export default data;
