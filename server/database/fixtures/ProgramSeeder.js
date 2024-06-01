const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },

      //   Quête 07
      {
        title: "Blade Runner 2049",
        synopsis:
          "Trente ans après les événements du premier film, un nouveau blade runner, l'officier K de la LAPD, découvre un secret enfoui qui pourrait plonger ce qui reste de la société dans le chaos.",
        poster:
          "https://www.imdb.com/title/tt1856101/mediaviewer/rm2677875712/?ref_=tt_ov_i",
        country: "USA",
        year: 2017,
        category_id: this.getRef("category_Futuriste").insertId,
      },
      {
        title: "Interstellar",
        synopsis:
          "Alors que la Terre se meurt, un groupe d'explorateurs utilise un trou de ver nouvellement découvert pour dépasser les limites du voyage spatial humain et conquérir les vastes distances d'un voyage interstellaire.",
        poster:
          "https://www.imdb.com/title/tt0816692/mediaviewer/rm4043724800/",
        country: "USA",
        year: 2014,
        category_id: this.getRef("category_Espace").insertId,
      },
      {
        title: "Inception",
        synopsis:
          "Un voleur qui possède la capacité de pénétrer dans les rêves des gens et de voler leurs secrets de leur subconscient voit sa compétence sollicitée pour une tâche plus difficile: l'implantation d'une idée dans l'esprit d'une personne.",
        poster:
          "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/",
        country: "USA",
        year: 2010,
        category_id: this.getRef("category_Reve").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program);
    });
  }
}

module.exports = ProgramSeeder;
