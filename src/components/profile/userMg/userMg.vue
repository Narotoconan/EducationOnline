<template>
    <div class="userMg">
        <div class="userMgOne row">
            <div class="col">
                <user-card/>
            </div>
            <div class="col">
                <change-psw/>
            </div>
        </div>
        <div class="userMgTwo mt-5">
            <user-actions/>
        </div>
    </div>
</template>

<script>
    import userCard from "./userCard";
    import userActions from "./userActions";
    import changePsw from "./changePsw";

    export default {
        name: "userMg",
        components: {
            userActions,
            userCard,
            changePsw
        }
    }
</script>

<style scoped>

</style>