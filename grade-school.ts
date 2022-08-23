interface SchoolGrade {
    grade: string;
    students: string[];
}
interface SchoolGrades {
    items: SchoolGrade[];
}



export class GradeSchool {

    private schoolDb: Map<string, string[]>;

    constructor() {
        this.schoolDb = new Map<string, string[]>;
        // this.schoolDb = new Map([
        //     ['2', ['blue', 'red', 'green']],
        //     ['3', ['english', 'spanish', 'german']],
        // ]);
    }

    roster() {
        let db: SchoolGrades
        let items: SchoolGrade[] = [];
        this.schoolDb.forEach((value: string[], key: string) => {
            items.push(
                {
                    grade: key,
                    students: value
                });
        })
        db = {
            items: items
        }
        return db.items;
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






