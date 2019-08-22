import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

Vue.component('svg-icon',SvgIcon);


// import all svg
const req = require.context('./svg', true, /\.svg$/);

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);

requireAll(req);