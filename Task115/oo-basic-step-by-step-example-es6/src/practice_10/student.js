import Person from "./person.js";
import Class from "./class.js";
class Student extends Person{

    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader === undefined || this.klass.leader.id !== this.id){
            return super.introduce() + ' I am a ' + Student.name + '. I am at ' + this.klass.getDisplayName() +'.';
        }
        return super.introduce() + ' I am a ' + Student.name + '. I am Leader of ' + this.klass.getDisplayName() +'.';
    }
}
export default Student;
