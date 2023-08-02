const services = require("./services.js");

const getAllSchools = async(req, res) => {
    await services.getAllSchools((error, results) => {
        if (error) return res.status(500).send(error.message);
        return res.status(200).send(results); // TODO a mettre format json ?
    });
};

const filterAllSchools = async(req, res) => {
    await services.filterAllSchools(
        req.query.nom,
        req.query.region,
        req.query.modalites_admission,
        req.query.classement,
        req.query.annee_admission,
        req.query.alternance,
        (error, results) => {
            if (error) return res.status(500).send(error.message);
            return res.status(200).send(results); // TODO a mettre format json ?
    });
};

const getOneSchool = async(req, res) => {
    await services.getOneSchool(req.params.nom, (error, result) => {
        if (error) return res.status(500).send(error.message);
        return res.status(200).send(result);
    });
};

const getAllRegions = async(req, res) => {
    await services.getAllRegions((error, results) => {
        if (error) return res.status(500).send(error.message);
        return res.status(200).send(results);
    });
};

const addSchool = async(req, res) => {
    await services.addSchool(
        req.params.nom,
        req.params.adresse,
        req.params.alternance,
        req.params.annales,
        req.params.annee_admission,
        req.params.classement,
        req.params.contact,
        req.params.modalites_concours_ecrit,
        req.params.modalites_admission,
        req.params.spes_proposees,
        req.params.ecole_region,
        (error, result) => {
            if (error) return res.status(500).send(error.message);
            return res.status(200).send(result);
    });
};

const updateSchool = async(req, res) => {
    await services.updateSchool(
        req.params.nom,
        req.params.adresse,
        req.params.alternance,
        req.params.annales,
        req.params.annee_admission,
        req.params.classement,
        req.params.contact,
        req.params.modalites_concours_ecrit,
        req.params.modalites_admission,
        req.params.spes_proposees,
        req.params.ecole_region,
        req.params.ancien_nom,
        (error, result) => {
            if (error) return res.status(500).send(error.message);
            return res.status(200).send(result);
    });
};

const deleteSchool = async(req, res) => {
    await services.deletedSchool(req.params.nom, (error, result) => {
        if (error) return res.status(500).send(error.message);
        return res.status(200).send(result);
    });
};

module.exports = {
    getAllSchools,
    filterAllSchools,
    getOneSchool,
    getAllRegions,
    addSchool,
    updateSchool,
    deleteSchool
};