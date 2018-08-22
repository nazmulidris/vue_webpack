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
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <h3 class="mb-3">{{msg}}</h3>
                <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
                <ul>
                    <li><a href="http://tinyurl.com/ybhm9zq4"
                           target="_blank">Webpack</a></li>
                    <li><a href="https://vuetifyjs.com/en/"
                           target="_blank">Vuetify</a></li>
                    <li><a href="https://vuejs.org/"
                           target="_blank">Vue.js</a></li>
                </ul>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
