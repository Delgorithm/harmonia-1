const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      { name: "Comédie" },
      { name: "Science-Fiction" },
      { name: "Futuriste" },
      { name: "Espace" },
      { name: "Reve" },
    ];

    categories.forEach((category) => {
      const categoryWithRefName = {
        ...category,
        refName: `category_${category.name}`,
      };

      this.insert(categoryWithRefName); // insert into category(name) values (?)
    });
  }
}

module.exports = CategorySeeder;
