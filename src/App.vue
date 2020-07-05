<template>
  <div id="app">
      <div class="jumbotron">
        <h1 class="display-4">Vue Router</h1>
        <p class="lead">Adicionando rotas a Single Page Application no vue</p>
      </div>

      <div class="container">

        <router-link 
          to="/" 
          active-class="active" 
          exact         
          class="btn btn-info mb-4 mr-2">Home</router-link>
        <router-link 
          :to="{ path: '/contatos'}" 
          class="btn btn-info mb-4 mr-2">Contatos</router-link>

        <router-link 
        :to="{ path: '/contatos/1'}" 
        class="btn btn-info mb-4 mr-2">Contato 1 </router-link>

        <router-link 
          :to="{ path: '/contatos/2'}" 
          class="btn btn-info mb-4 mr-2">Contato 2</router-link>
        
        <router-view></router-view>
      </div>
  </div>
</template>