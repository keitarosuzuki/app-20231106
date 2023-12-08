<template>
    <div class="bg-dark" style="height: 100vh;">
        <div class="login-form-wrapper position-absolute top-50 start-50 translate-middle">
            <form @submit.prevent="login">
                <input class="form-control form-control-lg" v-model="email" type="email" required
                    aria-label=".form-control-lg example">
                <input class="form-control form-control-lg" v-model="password" type="password" required
                    aria-label=".form-control-lg example">
                <button type="submit" class="btn btn-outline-light btn-lg">login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default {
    data() {
        return {
            auth: "",
            email: "",
            password: "",
        };
    },
    mounted() {
        this.auth = getAuth();
        onAuthStateChanged(this.auth, (user) => {
            if (user) this.$router.push("/ProductList");
        });
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(
                    this.auth,
                    this.email,
                    this.password
                );
                this.$router.push("/ProductList");
            } catch (error) {
                console.error(error.message);
            }
        },
    },
};
</script>

<style>
.login-form-wrapper {
    text-align: center;

    >form>* {
        margin-bottom: 10px;
    }
}
</style>