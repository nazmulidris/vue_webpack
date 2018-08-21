<template>
    <v-app>
        <v-toolbar app>
            <v-icon>{{app_icon}}</v-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <HelloWorld v-bind:msg="body_message"/>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <span>{{footer_message}}</span>
            <v-spacer></v-spacer>
        </v-footer>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import {appData} from "./main";

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data: () => {
            return appData;
        }
    };
</script>