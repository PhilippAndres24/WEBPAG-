const API_URL = "http://127.0.0.1:8000/api/lista_obras";
Vue.use(Toasted);
Vue.filter("currency", value => {
    return "$".concat(parseFloat(value).toFixed(2));
});
new Vue({
    el: "#app",
    data: () => ({
        games: [],
    }),
    methods: {
        async getGames() {
            const url = API_URL + "/games";
            const r = await fetch(url);
            const games = await r.json();
            this.games = games;
        },
        edit(game) {
            window.location.href = "./edit.html?id=" + game[0];
        },
        async deleteGame(game) {
            const result = await Swal.fire({
                title: 'Delete',
                text: "Are you sure you want to delete this game?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#1f9bcf',
                cancelButtonColor: '#d9534f',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes, delete it'
            });

            if (!result.value) {
                return;
            }
            const r = await fetch(SERVER_URL + "/game/" + game[0], {
                method: "DELETE",
            });
            const response = await r.json();
            if (response) {
                this.$toasted.show("Deleted", {
                    position: "top-left",
                    duration: 1000,
                });
                await this.getGames();
            } else {
                this.$toasted.show("Something went wrong. Try again", {
                    position: "top-left",
                    duration: 1000,
                });
            }
        }
    },
    async mounted() {
        await this.getGames();
    }
});