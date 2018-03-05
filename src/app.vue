<template>
    <div>
        <login></login>
        <home></home>
    </div>
</template>
<script>
    import home from '@/pages/project-demo/Home';
    import login from '@/pages/project-demo/Login';
    export default {
        data() {
            return {
                msg: 'welcome Vue'
            }
        },
        components:{home,login}
    }
</script>
<style>

</style>