delete from ecole;
delete from region;

insert into region (libelle_region)
values ('paca'),
       ('franche comte'),
       ('auvergne rhone alpes');

insert into ecole (
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
)
values ('tutu', 'tutu', 'oui', 'tutu.fr', 1, 13, '0744564213', 'tutu', 'tutu', 'tutu', 'paca'),
       ('tata', 'tata', 'oui', 'tata.fr', 2, 16, '0744564213', 'tata', 'tata', 'tata', 'auvergne rhone alpes'),
       ('titi', 'titi', 'non', 'titi.fr', 1, 1, '0744564213', 'titi', 'titi', 'titi', 'franche comte');