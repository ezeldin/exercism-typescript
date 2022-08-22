export interface schoolDb {
  [key: number]: string[];
}

export class GradeSchool {
  private store: schoolDb;

  constructor() {
    this.store = {};
  }

  roster(): schoolDb {
    let newStore: schoolDb = {};
    for (const [grade, students] of Object.entries(this.store)) {
      newStore[parseInt(grade)] = students.slice();
    }
    return newStore;
  }

  add(name: string, gradeNumber: number) {
    this.store[gradeNumber] = this.store[gradeNumber] || [];
    this.store[gradeNumber].push(name);
  }

  grade(gradeNumbr: number) {}
}

let school = new GradeSchool();
console.log(school.roster());
school.add('zelafy', 1);
console.log(school.roster());
// console.log(school.grade(3));
