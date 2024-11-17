//Review JavaScript Fundamentals by Building a Gradebook App

function getAverage(scores) {
    // recebe uma lista de notas e retorna a média

    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      total += scores[i];
    }

    return total/scores.length;
}

function getGrade(score) {
    // Recebe uma nota e classifica entre A++ e F

    if(score < 60) {
        return "F";
    } else if (score < 70 ) {
        return "D";
    } else if (score < 80) {
        return "C";
    } else if (score < 90) {
        return "B";
    } else if (score < 100) {
        return "A";
    } else {
        return "A++";
    }
}

function hasPassingGrade(score) {
    
    const grade = getGrade(score);

    if (grade === "F") {
        return false;
    } else {
        return true;
    }
}

function studentMsg(totalScores, studentScore) {
    //Retorna mensagem, informando se o aluno passou ou não.

    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const ok = hasPassingGrade(studentScore);

    if (ok === true) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else if (ok === false) {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));