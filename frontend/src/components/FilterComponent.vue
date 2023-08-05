<template>
    <div class="card">
        <table class="table">
            <tbody>
                <tr>
                    <td>
                        <select v-model="region" @change="console.log(region)" class="form-select">
                            <option disabled value="">Régions</option>
                            <option v-for="(value, index) in regions" :key="index" :value="value">
                                {{ value }}
                            </option>
                        </select>
                    </td>
                    <td>
                        <div class="d-flex flex-row">
                            <p>Admission</p>
                            <div>
                                <input id="concours" name="admission" type="radio" value="Concours" v-model="admission">
                                <label for="concours">Concours</label>
                                <br>
                                <input id="dossier_entretient" name="admission" type="radio" value="Dossier & Entretient"
                                    v-model="admission">
                                <label for="dossier_entretient">Dossier & Entretient</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex flex-row">
                            <p>Classement</p>
                            <div>
                                <input id="top_10" name="admission" type="radio" value="top_10" v-model="classement">
                                <label for="top_10">Top 10</label>
                                <br>
                                <input id="top_20" name="classement" type="radio" value="top_20" v-model="classement">
                                <label for="top_20">Entre 10 et 20</label>
                                <br>
                                <input id="superieur_20" name="classement" type="radio" value="superieur_20"
                                    v-model="classement">
                                <label for="superieur_20">Supérieur à 20</label>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input class="form-control" placeholder="Nom" type="text" v-model="nom">
                    </td>
                </tr>
            </tbody>
        </table>

        <button @click="filter()" class="btn btn-success">Valider</button>
        <button class="btn btn-danger">Effacer</button>
    </div>
</template>

<script>
export default {
    name: 'FilterComponent',
    data: () => ({
        admission: null,
        classement: null,
        nom: null,
        region: null,
        regions: null
    }),
    created() {
        // axios.get("/getAllRegions")
        this.regions = ["alpes", "paca", "franche comté"]
    },
    methods: {
        filter() {
            console.log(this.admission, " ", this.classement, " ", this.nom, " ", this.region)
        }
    }
}
</script>

<style>
card {
    padding: 30px
}

.form-control {
    width: 50%
}

form-select {
    width: 25%
}

td {
    padding: 10px;
}
</style>