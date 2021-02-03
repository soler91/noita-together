<template>
    <div class="content">
        <div class="lobby-header">
            <h1>Rooms</h1>
            <div class="lobby-controls">
                <v-btn disabled>Create</v-btn>
                <v-btn>Refresh</v-btn>
            </div>
        </div>
        <div class="lobbies-wrapper scroll-y">
            <table class="lobbies">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mode</th>
                        <th>Users</th>
                    </tr>
                </thead>
                <tbody>
                    <div v-if="rooms.length == 0">No rooms</div>
                    <tr v-else v-for="room in rooms" :key="room.id" @dblclick="joinLobby(room.id)">
                        <td>{{ room.name }}</td>
                        <td>{{ gamemode(room.gamemode) }}</td>
                        <td>{{room.users}}/{{ room.maxUsers }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
    components: {
        "v-btn": Button,
    },
    computed: {
        rooms() {
            const test = [];
            for (let i = 0; i < 100; i++) {
                const obj = {
                    id: Math.floor(Math.random() * 10000) + 1000,
                    name: Math.floor(Math.random() * 10000) + 1000,
                    protected: Math.random() > 0.5 ? true : false,
                    maxUsers: Math.floor(Math.random() * 30) + 5,
                    gamemode: Math.floor(Math.random() * 3),
                }
                obj.users = Math.floor(Math.random() * obj.maxUsers) + 1
                test.push(obj);
            }
            return test;
            //return this.$store.state.lobbies;
        },
    },
    methods: {
        joinLobby(id) {
            console.log(`Join lobby ${id}`)
        },
        gamemode(id) {
            return this.$store.state.gamemodes[id]
        }
    }
};
</script>

<style>
</style>