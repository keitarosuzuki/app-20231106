
<template>
    <form @submit.prevent="submitForm" class="form-el">
        <pl-input :type="'email'" v-model="formData.eMail" />
        <pl-input :type="'password'" v-model="formData.passWord" />
        <pl-button :type="'submit'" :name="'Login'" />
    </form>
</template>

<script>
import PlInput from "@/components/productlist/parts/input/PlInput.vue";
import PlButton from "@/components/productlist/parts/button/PlButton.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    components: {
        PlInput,
        PlButton,
    },
    data() {
        return {
            formData: {
                eMail: '',
                passWord: '',
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    this.formData.eMail,
                    this.formData.passWord,
                );
                console.log("OK");
                this.$emit("login");
            } catch (error) {
                console.error(error.message);
            }
        },
    },
};
</script>

<style>
.form-el > * {
    margin-top: 10px;
}
</style>