<script setup>
    import {ref,reactive, computed} from 'vue';
    const exp = ref(true);
</script>

<template>
    <p class="parent"><b>Example</b></p>
    <br/>
</template>

<style scoped>
.child{
    color: blue;
}
</style>
