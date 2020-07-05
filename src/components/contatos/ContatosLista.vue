<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItem
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>
        <p v-else>
            Nenhum contato cadastrado.
        </p>

        <button 
            class="btn btn-secondary mt-4 mb-4"
            @click="voltar">
            Voltar
        </button>
    </div>            
</template>

<script>
import ContatosListaItem from './ContatosListaItem.vue';

export default {
    components: {
        ContatosListaItem
    },
    data() {
        return {
            contatos: [
                {
                    id: 1, nome: 'Teste 1', email: 'teste1@gmail.com'
                },
                {
                    id: 2, nome: 'Teste 2', email: 'teste2@gmail.com'
                },
                {
                    id: 3, nome: 'Teste 3', email: 'teste3@gmail.com'
                },
                {
                    id: 4, nome: 'Teste 4', email: 'teste4@gmail.com'
                }
            ]
        }
    },
    methods: {
        voltar() {
            this.$router.back();
        }
    }
}
</script>