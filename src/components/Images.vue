<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
    name: 'Images'
})



</script>
<script lang="ts" setup>
type Props = {
    photo_name: String,
    passport_name: String
}
const props = defineProps<Props>()

const host = 'https://mxf.laoevisa.gov.la'
const date = props.photo_name.substring(0, 8)

</script>
<template>
    <div>
        <v-row>
            <v-col md="4">
                <v-img :src="`${host}/photo/${date}/${props.photo_name}`"></v-img>
            </v-col>
            <v-col md="8">
                <v-img :src="`${host}/passport/${date}/${props.passport_name}`"></v-img>
            </v-col>
        </v-row>
        <VDivider />
    </div>
</template>
<style scoped></style>