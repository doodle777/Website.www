import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './assets/i18n/zh'
import en from './assets/i18n/en'
import App from './App.vue'
import Router from './route.js'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueI18n);

function getLocal() {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  let locale = cookies.find((cookie) => decodeURIComponent(cookie).split('=')[0] === 'locale') || 'locale=zh';

  locale = locale.split('=');
  return locale[1];
}

const locale = getLocal();

//实例化vue-i18n
const i18n = new VueI18n({
  locale,
  messages: {
    'zh': zh, // 中文语言包
    'en': en // 英文语言包
  }
})

new Vue({
  i18n: i18n,
  router: Router,
  render: h => h(App),
}).$mount('#app')
