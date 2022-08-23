

export type Db = Map<string, number>
export type Roster = { [key: number]: string[] }


export class GradeSchool {

    private db: Db;

    constructor() {
        this.db = new Map();
    }

    roster(): Roster {
        const roster: Roster = {};
        this.db.forEach((grade, student) => {
            if (roster[grade] == null)
                roster[grade] = [];
            roster[grade].push(student);
        });

        for (const studentArr of Object.values(roster)) {
            studentArr.sort();
        }

        return roster;
    }

    add(name: string, grade: number) {
        this.db.set(name, grade);
    }

    grade(gradeNumbr: number): string[] {
        let students: string[] = [];
        this.db.forEach((grade, student) => {
            if (grade == gradeNumbr) {
                students.push(student)
            }
        });
        return students.sort();
    }
}


let school = new GradeSchool();

console.log(school.roster());

school.add('ezeldin', 1);
school.add('ahmed', 1);
school.add('heba', 1);
school.add('ibrahim', 2);
school.add('ismail', 2);

console.log(school.roster());
console.log(school.grade(1));







