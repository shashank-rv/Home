import { Card, Col, Icon, Layout, Menu, Row } from 'ant-design-vue';
import Vue from 'vue';

import 'ant-design-vue/dist/antd.css';

import App from './App.vue';

Vue.use(Icon);
Vue.use(Layout);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
