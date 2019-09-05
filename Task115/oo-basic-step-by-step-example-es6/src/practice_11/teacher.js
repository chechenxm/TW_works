import Person from "./person.js";
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses === undefined) {
            return super.introduce() + ' I am a ' + Teacher.name + '. I teach No Class.';
        } else {
            return super.introduce() + ' I am a Teacher. I teach Class ' +
                this.klasses[0].number + ', ' + this.klasses[1].number + '.';
        }
    }

    isTeaching(student){
        if(this.klasses !== undefined){
            if(this.klasses[0].isIn(student) || this.klasses[1].isIn(student)){
            //if(student.klass.number === this.klasses[0] || student.klass.number === this.klasses[1]){
                return true;
            }
        }
        return false;
    }
}

export default Teacher;
