import Person from "./person.js";
class Teacher extends Person{
    constructor(name, age, klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass === undefined){
            return super.introduce() + ' I am a '+Teacher.name+'. I teach No Class.';
        }else {
            return super.introduce() + ' I am a Teacher. I teach '+this.klass.getDisplayName()+'.';
        }
    }

    introduceWith(student){
        if(student.klass === this.klass){
            return super.introduce() + ' I am a Teacher. I teach Jerry.';
        }else {
            return super.introduce() + ' I am a Teacher. I don\'t teach Jerry.';
        }
    }
}
export default Teacher;
