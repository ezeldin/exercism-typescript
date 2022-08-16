
export interface ISchoolDb {
    gradeNumbr: string;
    students: string[]
}

export class GradeSchool {

    private schoolDb: Map<string, string[]>;

    constructor() {
        this.schoolDb = new Map([
            ['colors', ['blue', 'red', 'green']],
            ['languages', ['english', 'spanish', 'german']],
        ]);
    }

    roster() {
        return Object.fromEntries(this.schoolDb)
    }

    // add(name: string, gradeNumber: number) {
    //     let mygrade = this.schoolDb.find(g => g.gradeNumbr = gradeNumber);

    //     if (!mygrade) {
    //         this.schoolDb.push({ gradeNumbr: gradeNumber, students: [name] });
    //     }
    //     else {
    //         this.schoolDb = this.schoolDb.map(g => {
    //             if (g.gradeNumbr == gradeNumber) {
    //                 return {
    //                     gradeNumbr: g.gradeNumbr,
    //                     students: [...g.students, name],
    //                 }
    //             }
    //             else {
    //                 return {
    //                     gradeNumbr: g.gradeNumbr,
    //                     students: g.students,
    //                 }
    //             }
    //         });
    //     }
    // }

    // grade(gradeNumbr: number) {
    //     return this.schoolDb.find(g => g.gradeNumbr == gradeNumbr)?.students;
    // }
}


let school = new GradeSchool();
console.log(school.roster());
// school.add("zelafy", 1);
// console.log(school.roster());
// console.log(school.grade(3));






