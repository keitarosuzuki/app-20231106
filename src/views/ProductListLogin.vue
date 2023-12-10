<template>
    <pl-wrapper />
</template>

<script>
import PlWrapper from "@/components/productlist/wrapper/PlWrapper.vue";
// import { useStore } from 'vuex';

export default {
    mounted() {
        // const store = useStore();
        // store.dispatch("setHoge", 8);
    },
    components: {
        PlWrapper,
    },
};
</script>