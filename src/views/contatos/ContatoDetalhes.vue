<template>
    <h3 class="font-weight-light">
        Detalhes sobre o contato com id: {{id}}
    </h3>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    },    
}
</script>