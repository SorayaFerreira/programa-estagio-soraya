//Review JavaScript Fundamentals by Building a Gradebook App

function getAverage(scores: number[]): number {
    // recebe uma lista de notas e retorna a média

    let total: number = 0;
    for (let i: number = 0; i < scores.length; i++) {
      total += scores[i];
    }

    return total/scores.length;
}

function getGrade(score: number): string {
    // Recebe uma nota e classifica entre A++ e F

    /*
        Aqui, seria mais "idiomático" do js
        ter feito um switch case. Parece que o JS
        aceita comparações dentro dos cases, ao contrário
        da linguagem C, que compara apenas valores constantes.
    */

    if(score < 60) {
        return "F";
    }
    if (score < 70 ) {
        return "D";
    }
    if (score < 80) {
        return "C";
    }
    if (score < 90) {
        return "B";
    } 
    if (score < 100) {
        return "A";
    } else {
        return "A++";
    }
}

function hasPassingGrade(score: number): boolean {
    
    const grade: string = getGrade(score);

    if (grade === "F") {
        return false;
    } else {
        return true;
    }
}

// union type
function studentMsg(totalScores: number[], studentScore: number): string | void {
    //Retorna mensagem, informando se o aluno passou ou não.

    const average: number = getAverage(totalScores);
    const grade: string = getGrade(studentScore);
    const ok: boolean = hasPassingGrade(studentScore);

    if (ok === true) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else if (ok === false) {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
    }
}

//let nome: string = prompt("Digite seu nome: ");

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));