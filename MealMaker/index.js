const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
      name: dishName,
      price: dishPrice
    }
     this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const index = Math.floor(Math.random() * dishes.length);
     return dishes[index]; //generates array of dish + price under selected courseName
  },
  generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse("appetizers");
      const mains = this.getRandomDishFromCourse("mains");
      const desserts = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Clam Chowder", 5.25);
menu.addDishToCourse("appetizers", "Garlic Toast", 1.25);

menu.addDishToCourse("mains", "Steak", 24.25);
menu.addDishToCourse("mains", "Ribs", 27.50);
menu.addDishToCourse("mains", "Lobster", 35.25);

menu.addDishToCourse("desserts", "Ice Cream", 2.25);
menu.addDishToCourse("desserts", "Cake", 3.25);
menu.addDishToCourse("desserts", "Cream Puff", 1.25);

console.log(menu.generateRandomMeal());

/*
honeslty no idea what this is meant for...
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
 get appetizers() {

  },
  set appetizers(dish) {

  },
  get mains() {

  },
  set mains(dish) {

  },
  get desserts() {

  },
  set desserts(dish) {

  },
  */
