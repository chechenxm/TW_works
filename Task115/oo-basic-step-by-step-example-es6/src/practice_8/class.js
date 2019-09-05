class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }

    assignLeader(student) {
        if (student.klass.getDisplayName() === this.getDisplayName()) {
            this.leader = student;
        }
    }
}
export default Class;