<script lang="ts" setup>
import Images from '@/components/Images.vue';
import data_imgs from '@/services/data.json';
</script>
<template>
    <div>
        <ul>
            <li v-for="(item, id) in data_imgs" :key="id">
                <Images :photo_name="item.photo_name" :passport_name="item.passport_name" />
                <!-- {{ JSON.stringify(item) }} -->
            </li>
        </ul>
    </div>
</template>
<style scoped></style>