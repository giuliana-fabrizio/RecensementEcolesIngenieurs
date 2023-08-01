const services = require("./services.js");

const getAllSchools = async(req, res) => {
    try {
        const allSchools = await services.getAllSchools;
        console.log(typeof allSchools, ". ", allSchools)
        res.status(200).send(allSchools); // TODO a mettre format json ?
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const filterAllSchools = async(req, res) => {
    try {
        const allSchools = await services.filterAllSchools(
            req.query.nom,
            req.query.region,
            req.query.modalites_admission,
            req.query.classement,
            req.query.annee_admission,
            req.query.alternance
        );
        console.log(allSchools)
        res.status(200).send(allSchools); // TODO a mettre format json ?
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const getOneSchool = async(req, res) => {
    try {
        const oneSchool = await services.getOneSchool(req.params.nom);
        res.status(200).send(oneSchool);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const getAllRegions = async(req, res) => {
    try {
        const allRegions = await services.getAllRegions;
        res.status(200).send(allRegions);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const addSchool = (req, res) => {
    try {
        const scholl = services.addSchool(
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
            req.params.ecole_region
        );
        res.status(201).send(school);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const updateSchool = (req, res) => {
    try {
        const scholl = services.updateSchool(
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
            req.params.ancien_nom
        );
        res.status(200).send(school);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const deleteSchool = (req, res) => {

}; 