<template>
    <div class="btn-list-wrapper">
        <div v-for="data in this.aryProductListData" :key="data">
            <PlButton :type="'button'" :name="data.name" @click="routingProductPage(data)" />
        </div>
    </div>
    <div>
        <PlButton :type="'submit'" :name="'Logout'" @click="logout" />
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import PlButton from "@/components/productlist/parts/button/PlButton.vue";

export default {
    components: {
        PlButton,
    },
    data() {
        return {
            aryProductListData: '',
        };
    },
    mounted() {
        this.getProductListData();
    },
    methods: {
        async logout() {
            try {
                const auth = getAuth();
                await signOut(auth);
                this.$emit("logout");
            } catch (error) {
                console.error(error.message);
            }
        },
        getProductListData() {
            const db = getDatabase();
            const productlist = ref(db, 'productlist/');
            onValue(productlist, (snapshot) => {
                this.aryProductListData = snapshot.val();
            });
        },
        routingProductPage(data) {
            if (!data.public) {
                alert("仕掛中");
                return;
            }
            this.$router.push("/" + data.path);
        },
    },
};
</script>

<style>
.btn-list-wrapper {
    overflow-y: scroll;
    height: 80vh;
}

.btn-list-wrapper::-webkit-scrollbar {
    display:none;
}
</style>