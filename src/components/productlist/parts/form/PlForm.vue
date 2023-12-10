
<template>
    <form @submit.prevent="login">
        <pl-input :type="'email'" v-model="email" @changeInputVal="changeInputVal(email)" />
        <pl-input :type="'password'" v-model="password" @changeInputVal="changeInputVal(password)" />
        <pl-button :type="'submit'" />
    </form>
</template>

<script>
import PlInput from "@/components/productlist/parts/input/PlInput.vue";
import PlButton from "@/components/productlist/parts/button/PlButton.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    this.email,
                    this.password
                );
                console.log("OK")
            } catch (error) {
                console.error(error.message);
            }
        },
        changeInputVal(val) {
            console.log(val);
        }
    },
    components: {
        PlInput,
        PlButton,
    },
};
</script>

<style></style>