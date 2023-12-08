<template>
    <div class="bg-dark" style="height: 100vh;">
        <div class="btn-wrapper position-absolute top-50 start-50 translate-middle">
            <div>
                <button type="submit" class="btn btn-outline-light btn-lg">login</button>
            </div>
            <div>
                <button type="submit" class="btn btn-outline-light btn-lg">login</button>
            </div>
            <div>
                <button type="submit" class="btn btn-outline-light btn-lg" @click="logout">logout</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    data() {
        return {
            auth: '',
        };
    },
    mounted() {
        this.auth = getAuth();
    },
    methods: {
        async logout() {
            try {
                await signOut(this.auth);
                this.$router.push("/");
            } catch (error) {
                console.error(error.message);
            }
        }
    },
};
</script>

<style>
.btn-wrapper {
    >* {
        text-align: center;
        margin-bottom: 10px;
    }
}
</style>