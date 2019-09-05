module.exports = () => {
    var iconv = require('iconv-lite');
    var readlineSync = require('cli-interact');
    var menu = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
    var exit = "3";
    var students = new Array();
    do{
        var choise = readlineSync.question(menu,{encoding:'utf8'});
        switch (choise){
            case "1":
                console.log("已进入 1");
                addStudentInfo();
                break;
            case "2":
                console.log("已进入 2");
                getScoreMenu();
                break;
            case "3": console.log("您已退出");break;
            default : console.log("bad input !");break;
        }
    }while(choise !== exit);

    function addStudentInfo() {
        let prompt = "请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：";
        let studentInfo = readlineSync.question(prompt);
        let reg = /[\u4e00-\u9fa5]{1,4}/;
        console.log(reg.test(studentInfo));
        //studentInfo = split(/,/);
        students = addStudent(studentInfo);
    }

    function addStudent() {

    }
    function getScoreMenu() {
        let prompt = "请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交："
        let stuId = readlineSync.question(prompt);
       if(stuId.indexOf(",") >= 0){
            stuId = stuId.split(/,/);
            printScoreMenu(stuId);
        }
    }
    function printScoreMenu(stuId){
        let ScoreMenu = "成绩单\n" +
            "姓名|数学|语文|英语|编程|平均分|总分 \n" +
            "================================\n";
        for(let i = 0; i < stuId.length; i++){
            let sum = 0;

        }
    }
}