import Vue from 'vue';

Vue.filter('removeImg', txt => {
    return txt.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, '')
})