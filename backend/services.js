const requests = require("./bdd/requests.js");
const pool = require("./bdd/db.js");

exports.getAllSchools = async(callback) => {
    await pool.query(requests.getAllSchools, (error, results) =>{
        if (error) return callback(error);
        return callback(null, results);
    });
};

exports.filterAllSchools = async(
    nom,
    region,
    modalites_inscription,
    classement,
    annee_admission,
    alternance,
    callback
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

exports.getOneSchool = async(nom, callback) => {
    await pool.query(requests.getOneSchool, [nom], (error, result) =>{
        if (error) return callback(error);
        return callback(null, result);
    });
};

exports.getAllRegions = async(callback) => {
    await pool.query(requests.getAllRegions, (error, results) =>{
        if (error) return callback(error);
        return callback(null, results);
    });
};

exports.addSchool = async(
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
    callback
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

exports.updateSchool = async(
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
    ancien_nom,
    callback
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

exports.deleteSchool = async(nom, callback) => {
    await pool.query(requests.deleteSchool, [nom], (error, result) => {
        if (error) return callback(error);
        return callback(null, result); // TODO return suppression reussie
    });
};