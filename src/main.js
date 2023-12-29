import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset.css'
import '@/mobile/flexible'
import router from '@/router'

Vue.config.productionTip = false
import {Tabbar, TabbarItem, NavBar, Icon, Toast, Col, Row, Image as VanImage, Cell, CellGroup, Search,List} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Toast).use(Col).use(Row).use(VanImage).use(Cell).use(CellGroup).use(Search)
Vue.use(List)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
