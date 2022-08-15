
export class GradeSchool {

    private schoolDb: Map<number, Array<string>> =
        new Map([
            [1, ["test"]],
            [2, ["test2"]]
        ]);

    roster() {
        return this.schoolDb;
    }

    add(grade: number, name: string) {
        this.schoolDb.set(grade, ...[this.schoolDb.get(grade), name]);
    }

    grade() {
        throw new Error('Remove this statement and implement this function')
    }
}


let school = new GradeSchool();
console.log(school.roster());
school.add(1, "test3");
console.log(school.roster());
console.log('end');





