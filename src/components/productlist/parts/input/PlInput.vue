<template>
    <input class="form-control form-control-lg" :type="this.type" v-model="this.val" @change="changeInputVal(val)" required>
</template>

<script>
export default {
    data() {
        return {
            val: '',
        };
    },
    props: {
        type: {
            type: String,
            default: ''
        },
    },
    methods: {
        changeInputVal(val) {
            this.$emit('changeInputVal', val);
        },
    },
};
</script>

<style></style>