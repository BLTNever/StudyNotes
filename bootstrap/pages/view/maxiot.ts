import { Client } from '@sbs/account-center-utils';

let client: Client | null = null;
const isMaxiot = /\.maxiot\.com/.test(window.location.host);
let _env = 'dev' as 'dev' | 'test' | 'uat' | 'pre' | 'prod';

export function setEnv(env: 'dev' | 'test' | 'uat' | 'pre' | 'prod') {
  if (isMaxiot) {
    _env = env;
  } else {
    client = new Client({ env });
  }
}
type Language = Exclude<Parameters<Client['gotoLogin']>[0], undefined>['lang'];

const TokenKey = 'X_TOKEN_MAXIOT';

const KeyMap = {
  dev: '_DEV',
  test: '_TEST',
  uat: '_UAT',
  pre: '_PRE',
  prod: '',
};

function getCookie(name: string) {
  const item = document.cookie.split(/\s*;\s*/)?.find((i) => i.startsWith(name + '='));
  return item?.replace(name + '=', '');
}

const langTrans: any = {
  'zh-CN': 'zh',
  'en-US': 'en',
};

export const ClientUtil = {
  getToken() {
    //获取登陆token
    if (!isMaxiot) {
      return client?.getToken() || '';
    }
    return getCookie(TokenKey + KeyMap[_env]) || '';
  },
  gotoLogin(cfg: { lang: Language; redirect: string; target?: '_self' }) {
    //跳到登录页
    if (!isMaxiot) {
      client?.gotoLogin(cfg);
    } else {
      //TODO: 跳转到登陆页
      window.location.href = `https://dev.${
        _env == 'prod' ? '' : _env + '.'
      }maxiot.com/index?identerCenter=invalid&lang=${cfg.lang}&redirectUrl=${encodeURIComponent(window.location.href)}`;
    }
  },
  gotoLogout(cfg: { lang: Language; redirect: string; target?: '_blank'; autoClose?: boolean }) {
    //登出
    if (!isMaxiot) {
      client?.gotoLogout(cfg);
    } else {
      window.location.href = `https://dev.${_env == 'prod' ? '' : _env + '.'}maxiot.com/logout?lang=${
        cfg.lang
      }&redirectUrl=${encodeURIComponent(window.location.href)}`;
      //TODO:跳转至跳登陆页
    }
  },
  gotoDevWeb(lang: Language) {
    if (!isMaxiot) {
      window.location.href = _WEB_DEVELOPER + `/workspace?lang=${lang}`;
    } else {
      window.location.href = `https://dev.${
        _env == 'prod' ? '' : _env + '.'
      }maxiot.com/workspace/base/dashboard?lang=${lang}`;
    }
  },
  gotoAccountInfo(lang: Language, target?: '_blank') {
    //去账户中心
    // console.log('------->', lang, target);
    if (!isMaxiot) {
      client?.gotoAccountInfo({
        lang,
        target,
      });
    } else {
      // TODO: 跳到
      // https://redirect.maxiot.com/redirect
      // https://redirect.sunmi.com/redirect
      window.open(
        `https://redirect.${_env == 'prod' ? '' : _env + '.'}maxiot.com?redirectUrl=${encodeURIComponent(
          `https://account.${_env == 'prod' ? '' : _env + '.'}sunmi.com/account/profile?lang=${
            lang ? langTrans[lang] || lang : 'en'
          }`,
        )}`,
        '_blank',
      );
      // let url = `${maxiotRedirect}` + `?redirectUrl=${encodeURIComponent(accountUrl)}`
      // window.open(
      //   `https://redirect.${
      //     _env == 'prod' ? '' : _env + '.'
      //   }sunmi.com/redirect?code=459efcc6c94346999e6bb08f4e83bd3d&redirectUrl=https%3A%2F%2Faccount.${
      //     _env == 'prod' ? '' : _env + '.'
      //   }sunmi.com%2Faccount%2Fprofile%3Flang%3Dzh`,
      //   '_blank',
      // );
    }
  },
};




