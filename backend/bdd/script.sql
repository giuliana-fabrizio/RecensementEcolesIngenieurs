drop table if exists ecole;
drop table if exists region;

create table region (
    libelle_region varchar(100),
    constraint pk_region primary key libelle_region
);

create table ecole (
    nom                         varchar(50),
    adresse                     varchar(100),
    alternance                  varchar(3),
    annales                     varchar(1000),
    annee_admission             integer,
    classement                  integer,
    contact                     varchar(1000),
    modalites_concours_ecrit    varchar (100000),
    modalites_admission         varchar(10),
    spes_proposees              varchar(100000),
    ecole_region                varchar(100),
    constraint pk_ecole primary key nom,
    constraint fk_ecole_region foreign key ecole_region references region (libelle_region)
);

/copy region(libelle_region) from "./data_region.csv" delimiter as ',';
select * from region;