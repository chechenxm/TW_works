//填空题分数
function completionScore() {
    let completionScore = 0;
    let completionAnswer = ["统一建模语言", "封装性", "继承性", "多态行"]
    let completion1 = document.getElementById("completion1").value;
    let completion21 = document.getElementById("completion21").value;
    let completion22 = document.getElementById("completion22").value;
    let completion23 = document.getElementById("completion23").value;
    let completion = [completion1, completion21, completion22, completion23];
    for (var i = 0; i < completionAnswer.length; i++) {
        if (completionAnswer[i] === completion[i]) {
            completionScore += 5;
        }
    }
    return completionScore;
}

//单选题分数
function singleChoiceScore() {
    let singleChoiceScore = 0;
    let single1 = document.getElementsByName("single-choice1");
    if ((single1[1].checked) && (single1[0].checked === false) && (single1[2].checked === false) && (single1[3].checked === false)) {
        singleChoiceScore += 10;
    }
    let single2 = document.getElementsByName("single-choice2");
    if ((single2[0].checked) && (single2[1].checked === false) && (single2[2].checked === false) && (single2[3].checked === false)) {
        singleChoiceScore += 10;
    }
    return singleChoiceScore;
}

//多选题分数
function multipleChoiceScore() {
    let multipleChoiceScore = 0;
    let multi1 = document.getElementsByName("multiple-choice1");
    if ((multi1[0].checked) && (multi1[1].checked) && (multi1[3].checked) && (multi1[2].checked === false)) {
        multipleChoiceScore += 10;
    }
    let multi2 = document.getElementsByName("multiple-choice2");
    if ((multi2[0].checked) && (multi2[1].checked) && (multi2[2].checked) && (multi2[3].checked === false)) {
        multipleChoiceScore += 10;
    }
    return multipleChoiceScore;
}

//判断题分数
function trueFalseScore() {
    let trueFalseScore = 0;
    let trueFalse1 = document.getElementsByName("true-false1");
    if ((trueFalse1[1].checked) && (trueFalse1[0].checked === false)) {
        trueFalseScore += 10;
    }
    let trueFalse2 = document.getElementsByName("true-false2");
    if ((trueFalse2[0].checked) && (trueFalse2[1].checked === false)) {
        trueFalseScore += 10;
    }
    return trueFalseScore;
}

//简答题分数
function shortAnswerScore() {
    let shortAnswerScore = 0;
    let rightAnswerText = "模型是对现实世界的简化和抽象，模型是对所有研究的系统，过程，事物或概念的一种表达形式，可以是物理实体；可以是某图形；或者是一种数学表达式。"
    let answerText = document.getElementById("answer-text").value;
    if (answerText === rightAnswerText) {
        shortAnswerScore += 20;
    }
    return shortAnswerScore;
}

// 计算总分
function allScore() {
    let allScore = completionScore() + singleChoiceScore() + multipleChoiceScore() + trueFalseScore() + shortAnswerScore();
    return allScore;
}
 
//输出分数
function outputScore() {
    document.getElementById("all-score").innerHTML = "得分：" + allScore();
    let studentClass = document.getElementById("student-class").value;
    let studentNumber = document.getElementById("student-number").value;
    let studentName = document.getElementById("student-name").value
    alert("班级：" + studentClass + "\n" + "学号：" + studentNumber + "\n" + "姓名：" + studentName + "\n" + "成绩：" + allScore());
}