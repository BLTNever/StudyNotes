const LanguageMap: Record<string, 'en-US' | 'zh-CN'> = {
  en: 'en-US',
  zh: 'zh-CN',
};

export function getLang() {
  let language = LanguageMap.zh;
  const hrefLang = new URL(window.location.href).searchParams.get('lang');
  if (hrefLang) {
    language = LanguageMap[hrefLang] || hrefLang;
  } 
  return language;
}
let terminalType = 'mac' as 'mac' | 'win';
export const getTerminalType = (): 'mac' | 'win' => {
  if (terminalType) return terminalType;

  const platform = navigator?.platform;
  const userAgent = navigator?.userAgent;
  if (platform) {
    if (/MacIntel|MacPPC|Mac68K|Mac|iPhone|iPad/i.test(platform)) {
      terminalType = 'mac';
    } else {
      terminalType = 'win';
    }
  } else if (userAgent) {
    const agent = userAgent.toLowerCase();
    if (/macintosh|mac os x/i.test(userAgent)) {
      terminalType = 'mac';
    } else if (/win32|wow32|win64|wow64/i.test(agent)) {
      terminalType = 'win';
    }
  } else {
    return 'win';
  }
  return terminalType || 'win';
};


export function washKernelUrls<T extends Record<string, string[] | string | Record<string, string>>>(obj: T): T {
    Object.keys(obj).forEach((key: keyof T) => {
      if (Array.isArray(obj[key])) {
        //@ts-ignore
        obj[key] = obj[key].map((i) => i.replace(/\.sunmi\./, '.maxiot.'));
      } else if (typeof obj[key] == 'string') {
        //@ts-ignore
        obj[key] = obj[key].replace(/\.sunmi\./, '.maxiot.');
      } else {
        Object.keys(obj[key]).forEach((i) => {
          //@ts-ignore
          obj[key][i] = obj[key][i].replace(/\.sunmi\./, '.maxiot.');
        });
      }
    });
  return obj;
}


export function washPlugin(list: string[]) {
  return list;
}
