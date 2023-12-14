<template>
    <button :type="this.type" class="btn btn-outline-light btn-lg btn-top">{{ this.name }}</button>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
    },
};
</script>

<style>
.btn-top {
    margin-top: 10px;
}
</style>