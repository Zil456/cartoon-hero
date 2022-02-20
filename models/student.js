class Student {
  // Attributes
  #firstName;
  #lastName;
  #courseId;
  
  constructor(firstName, lastName, courseId) {
  
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#courseId = courseId;
  }

  getFormattedName() {
      return this.#firstName + ' ' + this.#lastName;
  }

  get firstName() {
      return this.#firstName;
  }

  get lastName() {
      return this.#lastName
  }

  set firstName(firstName) {
      this.#firstName = firstName;
  }

  set lastName(lastName) {
      this.#lastName = lastName;
  }
}



module.exports = {
    Student
}
