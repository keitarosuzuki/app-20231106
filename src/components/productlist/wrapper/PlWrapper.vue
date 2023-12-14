<template>
    <div class="bg-dark">
        <div class="position-absolute top-50 start-50 translate-middle pl-wrapper">
            <pl-form v-if="!isLoggedIn" @login="handleLogin" />
            <pl-view v-if="isLoggedIn" @logout="handleLogout" />
        </div>
    </div>
</template>

<script>
import PlForm from "@/components/productlist/parts/form/PlForm.vue";
import PlView from "@/components/productlist/wrapper/PlView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    components: {
        PlForm,
        PlView,
    },
    data() {
        return {
            isLoggedIn: false
        };
    },
    methods: {
        handleLogin() {
            this.isLoggedIn = true;
        },
        handleLogout() {
            this.isLoggedIn = false;
        }
    },
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) this.isLoggedIn = true;
        });
    }
};
</script>

<style>
.bg-dark {
    height: 100vh;
}

.pl-wrapper {
    text-align: center;
}
</style>