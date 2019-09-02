<template>
    <div>
        <div class="container">
            <h1 class="title">
                Vuex store
            </h1>
            <h2 class="subtitle">
                Example on using Vuex without TypeScript.
            </h2>
        </div>
        <br>
        <div class="text-xs-center">
            <v-badge left>
                <template v-slot:badge>
                    <span>6</span>
                </template>
                <v-icon large
                        color="grey lighten-1">
                    shopping_cart
                </v-icon>
            </v-badge>

            <v-badge color="red">
                <template v-slot:badge>
                    <span>!</span>
                </template>
                <v-icon large
                        color="grey">
                    mail
                </v-icon>
            </v-badge>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-6">

                    <nav class="level">
                        <!-- Left side -->
                        <div class="level-left">
                            <div class="level-item">
                                <p>
                                    <strong>Count from store: {{ count }} </strong>
                                </p>
                            </div>
                        </div>

                        <!-- Right side -->
                        <div class="level-right">
                            <div class="level-item">
                                <a @click.prevent.stop="reset"
                                   class="button is-white">Reset</a>
                            </div>
                            <div class="level-item">
                                <a @click.prevent.stop="addCount"
                                   class="button is-primary pull-right is-pulled-right is-small shadow">Increase counter</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Counter',
    computed: {
        ...mapGetters('counterModule', [
            'count'
        ])
    },
    methods: {
        addCount() {
            this.$store.dispatch('counterModule/increaseCount')
        },
        reset () {
            this.$store.dispatch('counterModule/resetCount')
        }
    },
}
</script>

<style scoped>
</style>
