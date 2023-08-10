import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { SiConsul, BiPhoneVibrate , BiGlobe2 , BiGrid3X3GapFill , HiLocationMarker, RiAccountPinCircleLine,IoCalendarOutline,IoShieldCheckmarkOutline,BiBookmarkCheck,CoFacebookF,BiTwitter,BiYoutube,CoPinterestP} from "oh-vue-icons/icons";

import './main.css';

addIcons(SiConsul, BiPhoneVibrate, BiGlobe2 , BiGrid3X3GapFill, HiLocationMarker, RiAccountPinCircleLine,IoCalendarOutline,IoShieldCheckmarkOutline,BiBookmarkCheck,CoFacebookF,BiTwitter,BiYoutube,CoPinterestP);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');