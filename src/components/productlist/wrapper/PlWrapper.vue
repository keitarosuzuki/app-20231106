<template>
    <div class="bg-dark">
        <div class="position-absolute top-50 start-50 translate-middle">
            <pl-form />
        </div>
    </div>
</template>

<script>
import PlForm from "@/components/productlist/parts/form/PlForm.vue";

export default {
    components: {
        PlForm,
    },
};
</script>

<style>
.bg-dark {
    height: 100vh;
}
</style>