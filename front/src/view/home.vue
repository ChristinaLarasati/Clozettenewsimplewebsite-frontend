<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 class="blue-text text-accent-2">
                <button class="mr-1" v-on:click="componentShow='compOne'">Componnent One">
                    <button class="mr-1" v-on:click="componentShow='compTwo'">Componnent Two">
                        <button class="mr-1" v-on:click="componentShow='compThre'">Componnent Three">
            </v-flex>
        </v-layout>
        </v-container>

</template>

<script>
import compOne from '@/components/compOne.vue'
import compTwo from '@/components/compTwo.vue'
import compThree from '@/components/compThree.vue'
export default {
    name: 'home',
    data(){
        return{
            componentShow:'compOne'
        }
    },
    components:{
        compOne,
        compTwo,
        compThree
    }
    
}
</script>


<style lang="scss">
    // $colorz:
    // {
    //     primary: #ffbbbb,
    //     secondary: #0969a2,
    // };
    // h4{
    //     color: map-get($colorz, primary)
    // }
</style>