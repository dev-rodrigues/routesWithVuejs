import Vue from 'vue';
import VueRouter from 'vue-router';

import Contatos from './views/contatos/Contatos.vue';
import Home from './views/Home.vue';
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue';
import ContatosHome from './views/contatos/ContatosHome.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos', 
      component: Contatos,
      children: [
        { path: ':id', component: ContatoDetalhes, name:'contato' },
        { path: '', component: ContatosHome}
      ]
    },    
    { path: '/', component: Home },
  ]
});
