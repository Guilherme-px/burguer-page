import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import
{
    BIconGeoAltFill, BIconCashCoin, BIconClockFill, BIconCalendarCheck, BIconInstagram, BIconFacebook, BIconList, BIconX
} 
from 'bootstrap-icons-vue';

const app = createApp(App)
    .use(store)
    .use(router)
app.component('BIconGeoAltFill', BIconGeoAltFill);
app.component('BIconCashCoin', BIconCashCoin);
app.component('BIconClockFill', BIconClockFill);
app.component('BIconCalendarCheck', BIconCalendarCheck);
app.component('BIconInstagram', BIconInstagram);
app.component('BIconFacebook', BIconFacebook);
app.component('BIconList', BIconList);
app.component('BIconX', BIconX);
app.mount('#app')
