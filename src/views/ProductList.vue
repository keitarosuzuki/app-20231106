<template>
    <div class="bg-dark" style="height: 100vh;">
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="btn-list-wrapper">
                <div v-for="data in productList" :key="data" class="btn-wrapper">
                    <button type="submit" class="btn btn-outline-light btn-lg" @click="routingProductPage(data)">{{ data.name }}</button>
                </div>
            </div>
            <div class="btn-wrapper">
                <button type="submit" class="btn btn-outline-light btn-lg" @click="logout">logout</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
    data() {
        return {
            auth: '',
            data: ''
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
        },
        routingProductPage(data) {
            if (!this.data.public) {
                alert("仕掛中"); 
                return;
            }
            this.$router.push("/" + data.path);
        },
    },
    computed: {
        productList() {
            const db = getDatabase();
            const productlist = ref(db, 'productlist/');
            onValue(productlist, (snapshot) => {
                this.data = snapshot.val();
            });
            return this.data;
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

.btn-wrapper {
    margin-top: 10px;
    text-align: center;
}
</style>