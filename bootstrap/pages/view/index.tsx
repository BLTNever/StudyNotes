import { getLang, getTerminalType , washPlugin, washKernelUrls} from './util';
import { getKernelUrl } from '../../../kernel.config';
import { getPluginUrl } from '../../../plugins.config';
import './index.less';
/**
 * 入口文件配置
 */
declare var _Main: {
  kernelUrls?: Partial<{
    libs: { [key: string]: string };
    link: string[];
    resource: string;
    skeleton: string;
  }>;
  plugins?: string[];
};

const kernelUrls = washKernelUrls(getKernelUrl(mode, pcName));
const plugins = washPlugin(_Main.plugins || getPluginUrl(mode, pcName));
if (_Main.kernelUrls) {
  Object.keys(_Main.kernelUrls).forEach((k: any) => {
    kernelUrls[k] = _Main.kernelUrls?.[k as 'libs'];
  });
}
// console.log('------->',_Main,kernelUrls,plugins)

function isChrome() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !/Edg/.test(navigator.userAgent);
}

function addTopTip(text: string) {
  if (isChrome()) return;
  const div = document.createElement('div');
  div.id = 'tipBar';
  div.style.backgroundColor = 'var(--sys-ColorBg-Warning-Disabled, rgba(232, 190, 0, 0.30))';
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'space-between';
  div.style.height = '40px';
  div.style.padding = '0 12px';
  div.style.lineHeight = '40px';
  div.style.gap = '12px';
  div.innerHTML = `<div style="display:flex;align-items:center;flex-direction:row;gap:8px;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7.875 8.3125V2.1875H6.125V8.3125H7.875ZM7.875 11.375V9.625H6.125V11.375H7.875Z" fill="#E8BE00"/>
</svg><span style="color:white;font-size:14px;">${text}</span></div><svg style="cursor:pointer;" name="close" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00002 4.93936L1.75738 0.696716L0.696716 1.75738L4.93936 6.00002L0.696716 10.2427L1.75738 11.3033L6.00002 7.06068L10.2427 11.3033L11.3033 10.2427L7.06068 6.00002L11.3033 1.75738L10.2427 0.696716L6.00002 4.93936Z" fill="white" fill-opacity="0.55"/>
</svg>`;
  const rootEl = document.getElementById('root') as HTMLDivElement;
  if (rootEl) {
    document.body.insertBefore(div, rootEl);
    rootEl.style.height = 'calc(100% - 40px)';
  }
  div.querySelector('[name=close]')?.addEventListener('click', () => {
    div.remove();
    rootEl.style.height = '100%';
  });
}

export type MainProps = {
  lang: string;
  os: 'mac' | 'win';
  errFilter: (resp: any) => void;
  kernels: typeof kernel;
  plugins: string[];
 
};

const lang = getLang() as any;
addTopTip(
  lang == 'zh-CN'
    ? '当前使用的非 Chrome 浏览器，可能会有兼容性问题，推荐使用 Chrome 浏览器。'
    : 'You are currently using a non-Chrome browser, which may have compatibility issues. We recommend using the Chrome browser.',
);
(globalThis as any).initKernel = function (main: (env: MainProps) => void) {
  // console.log('------>', main);

 
  main({
    errFilter(resp: any) {
    },
    lang,
    os: getTerminalType(),
    kernels: kernelUrls,
    plugins,
  });
};

function loadScript(url: string) {
  const script = document.createElement('script');
  script.async = true;
  script.src = url;
  document.head.appendChild(script);
}
loadScript(kernelUrls.container);
kernelUrls.link.forEach((i: string) => {
  loadScript(i);
});
