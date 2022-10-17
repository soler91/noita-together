<template>
    <div class="content">
        <vRoomCreation
            v-if="showRoomCreation"
            @createRoom="createRoom"
            @close="closeCreationModal"
        />
        <vRoomPassword
            v-if="showPasswordModal"
            :room="clickedRoom"
            @join="joinRoom"
            @close="closePasswordModal"
        />
        <div class="lobby-header">
            <h1>Rooms</h1>
            <div class="lobby-controls">
                <vInput v-model="roomFilter" label="filter" />
                <div>
                <vButton @click="openRoomCreation">
                    <template slot="icon">
                        <i class="fas fa-plus-square"></i>
                    </template>
                    Create
                </vButton>
                <vButton @click="refreshRooms">
                    <template slot="icon">
                        <i
                            class="fas fa-spinner fa-spin fa-pulse"
                            v-if="refreshing"
                        ></i>
                        <i class="fas fa-sync" v-else></i>
                    </template>
                    Refresh
                </vButton>
                </div>
            </div>
        </div>

        <div class="lobbies-wrapper scroll-y">
            <table class="lobbies">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Mode</th>
                        <th>Users</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="rooms.length == 0">
                        <td id="no-rooms" colspan="4">No rooms</td>
                    </tr>
                    <tr
                        v-else
                        v-for="room in filteredRooms"
                        :key="room.id"
                        @dblclick="joinRoom(room)"
                    >
                        <td>
                            <i class="fas fa-ban" v-if="room.locked"> </i>
                            <i class="fas fa-lock" v-if="room.protected"> </i>
                            <span>{{ room.name }}</span>
                        </td>
                        <td>{{room.owner}}</td>
                        <td>{{ gamemode(room.gamemode) }}</td>
                        <td>{{ room.curUsers }}/{{ room.maxUsers }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import vButton from "../components/vButton.vue";
import vInput from "@/components/vInput.vue";
import vRoomCreation from "../components/vRoomCreation.vue";
import vRoomPassword from "../components/vRoomPassword.vue";
export default {
    components: {
        vButton,
        vRoomCreation,
        vRoomPassword,
        vInput
    },
    data() {
        return {
            showPasswordModal: false,
            showRoomCreation: false,
            refreshing: false,
            clickedRoom: undefined,
            roomFilter: ""
        };
    },
    beforeCreate() {
        try {
            const unsub = this.$store.subscribe((mutation) => {
                if (mutation.type == "setRoom") {
                    unsub();
                    this.$router.replace({ path: "/room" });
                }
            });
            this.$store.dispatch("requestRooms");
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        rooms() {
            return this.$store.state.lobbies;
        },
        filteredRooms() {
            const filterKey = this.roomFilter && this.roomFilter.toLowerCase()
            let data = this.rooms
            data = data.filter(room => {
                return room.name.toLowerCase().includes(filterKey) || room.owner.toLowerCase().includes(filterKey)
            })

            return data
        }
    },
    methods: {
        openRoomCreation() {
            this.showRoomCreation = true;
        },
        closeCreationModal() {
            this.showRoomCreation = false;
        },
        openPasswordModal() {
            this.showPasswordModal = true;
        },
        closePasswordModal() {
            this.showPasswordModal = false;
        },
        joinRoom(room, password) {
            if (room.protected && !password) {
                this.clickedRoom = room;
                this.openPasswordModal();
                return;
            }
            try {
                this.$store.dispatch("joinRoom", {
                    id: room.id,
                    password: password ? password : undefined,
                });
            } catch (error) {
                console.log(error);
            }
        },
        gamemode(id) {
            return this.$store.state.gamemodes[id];
        },
        createRoom(payload) {
            this.$store.dispatch("createRoom", payload);
        },
        refreshRooms() {
            this.refreshing = true;
            try {
                const unsub = this.$store.subscribe((mutation) => {
                    if (mutation.type == "setRooms") {
                        this.refreshing = false;
                        unsub();
                    }
                });
                this.$store.dispatch("requestRooms");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style>
.lobby-header {
    display: flex;
    align-items: center;
}

.lobby-controls {
    display: flex;
    flex-flow:  row wrap;
    margin-left: auto;
}

.lobby-controls .labeled-input{
    min-width: 20%;
    margin-top: auto;
    padding-bottom: 0;
    margin-right: 0;
}

.lobbies-wrapper {
    max-height: 90%;
}

.lobbies-wrapper > thead {
    position: sticky;
}

#no-rooms {
    width: 100%;
    text-align: center;
}

.lobbies-wrapper table td i {
    margin: 0 0.2rem;
}

.lobbies-wrapper table td:nth-child(1n + 0) {
    width: 50%;
}

.lobbies-wrapper table td:nth-child(2n + 0) {
    width: 25%;
}

.lobbies-wrapper table td:nth-child(3n + 0) {
    width: 25%;
}
</style>