<!--
  - Copyright 2018 Nazmul Idris All rights reserved.
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
    <v-app dark>
        <v-toolbar app dark color="primary">
            <v-icon>{{app_icon}}</v-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <HelloWorld v-bind:msg="body_message"/>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <span class="surface--text">{{footer_message}}</span>
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
            return appData
        }
    };
</script>