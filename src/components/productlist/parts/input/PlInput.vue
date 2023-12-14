<template>
    <input class="form-control form-control-lg" :type="this.type" v-model="inputValue" @input="updateValue" required>
</template>

<script>
export default {
    data() {
        return {
            inputValue: this.value
        };
    },
    props: {
        type: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
    },
    methods: {
        updateValue() {
            this.$emit('input', this.inputValue);
        }
    },
};
</script>

<style></style>