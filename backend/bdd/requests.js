const getAllSchools = "\
    select nom, classement, annee_admission\
    from ecole\
    order by classement asc;\
";

const getOneSchool = "\
    select *\
    from ecole\
    where nom = $1;\
";

const getAllRegions = "\
    select *\
    from region\
    order by libelle_region asc;\
";

const addSchool = "\
    insert into ecole (\
        nom,\
        adresse,\
        alternance,\
        annales,\
        annee_admission,\
        classement,\
        contact,\
        modalites_concours_ecrit,\
        modalites_admission,\
        spes_proposees\
        ecole_region\
    ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);\
";

const updateSchool = "\
    update ecole set\
	nom = $1,\
    adresse = $2,\
    alternance = $3,\
    annales = $4,\
    annee_admission = $5,\
    classement = $6,\
    contact = $7,\
    modalites_concours_ecrit = $8,\
    modalites_admission = $9,\
    spes_proposees = $10\
    ecole_region = $11\
    where nom = $12;\
";

const deleteSchool = "\
    delete from ecole where nom = $1;\
";

module.exports = {
    getAllSchools,
    getOneSchool,
    getAllRegions,
    addSchool,
    updateSchool,
    deleteSchool
};