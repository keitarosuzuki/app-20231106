<template>
    <button :type="this.type" class="btn btn-outline-light btn-lg">Login</button>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: ''
        },
    },
    computed: {
        hoge() {
            return this.$store.getters.count;
        }
    }
};
</script>

<style>
/* .login-form-wrapper {
    text-align: center;
}

.login-form-wrapper>form>* {
    margin-bottom: 10px;
} */
</style>