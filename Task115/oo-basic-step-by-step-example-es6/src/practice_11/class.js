class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }

    assignLeader(student) {
        if (this.isIn(student)) {
            this.leader = student;
            if(this.teacherName !== undefined){
                console.log("I am " + this.teacherName + ". I know " + student.name +" become Leader of Class "+ this.number +".");
            }
        }else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
        if(this.teacherName !== undefined) {
            console.log("I am " + this.teacherName + ". I know " + student.name + " has joined Class " + this.number + ".");
        }
    }
    isIn(student){
        if (student.klass.getDisplayName() === this.getDisplayName()) {
            return true;
        }
        return false;
    }
    registerAssignLeaderListener(teacher){
        this.teacherName = teacher.name;
    }
    registerJoinListener(teacher){
        this.teacherName = teacher.name;
    }

}
export default Class;

