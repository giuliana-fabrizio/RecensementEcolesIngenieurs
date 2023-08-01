const requests = require("./bdd/requests.js");
const pool = require("./bdd/db.js");

const getAllSchools = async() => {
    await pool.query(requests.getAllSchools, (error, results) =>{
        if (error) return callback(error);
        return callback(null, results);
    });
};

const filterAllSchools = async(
    nom,
    region,
    modalites_inscription,
    classement,
    annee_admission,
    alternance
) => {
    try {
        var allSchools = await getAllSchools;

        if (nom !== "") {
            allSchools = allSchools.filter(school => school.nom === nom);
        }
        if (region !== "") {
            allSchools = allSchools.filter(school => school.ecole_region === region);
        }
        if (modalites_admission != "") {
            allSchools = allSchools.filter(school => school.modalites_admission === modalites_admission);
        }
        if (classement !== "") {
            allSchools = allSchools.filter(school => school.classement === classement);
        }
        if (annee_admission !== "") {
            allSchools = allSchools.filter(school => school.annee_admission === annee_admission);
        }
        if (alternance !== "") {
            allSchools = allSchools.filter(school => school.alternance === alternance);
        }

        return callback(null, allSchools);
    } catch (e) {
        return callback(e);
    }
};

const getOneSchool = async(nom) => {
    await pool.query(requests.getOneSchool, [nom], (error, result) =>{
        if (error) return callback(error);
        return callback(null, result);
    });
};

const getAllRegions = async() => {
    await pool.query(requests.getAllRegions, (error, results) =>{
        if (error) return callback(error);
        return callback(null, results);
    });
};

const addSchool = async(
    nom,
    adresse,
    alternance,
    annales,
    annee_admission,
    classement,
    contact,
    modalites_concours_ecrit,
    modalites_admission,
    spes_proposees,
    ecole_region
) => {
    await pool.query(requests.addSchool, [
        nom,
        adresse,
        alternance,
        annales,
        annee_admission,
        classement,
        contact,
        modalites_concours_ecrit,
        modalites_admission,
        spes_proposees,
        ecole_region
    ], (error, result) => {
        if (error) return callback(error);
        console.log(result)
        return callback(null, result); // TODO return ajout reussi
    });
};

const updateSchool = async(
    nom,
    adresse,
    alternance,
    annales,
    annee_admission,
    classement,
    contact,
    modalites_concours_ecrit,
    modalites_admission,
    spes_proposees,
    ecole_region,
    ancien_nom
) => {
    await pool.query(requests.updateSchool, [
        nom,
        adresse,
        alternance,
        annales,
        annee_admission,
        classement,
        contact,
        modalites_concours_ecrit,
        modalites_admission,
        spes_proposees,
        ecole_region,
        ancien_nom
    ], (error, result) => {
        if (error) return callback(error);
        return callback(null, result); // TODO return modification reussie
    });
};

const deleteSchool = async(nom) => {
    await pool.query(requests.deleteSchool, [nom], (error, result) => {
        if (error) return callback(error);
        return callback(null, result); // TODO return suppression reussie
    });
};