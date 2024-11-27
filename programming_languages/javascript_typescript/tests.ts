// Arquivo direcionado à resolução de exercícios pontuais.
/*

https://judge.beecrowd.com/pt/

Exercícios BeeCrowd já resolvidos:
> 1061: aprendi .split(), casting e entrada pelo console.
>
*/


function main(): void {

    const entryDayStart = prompt();
    const entryStart = prompt();
    const entryDayEnd = prompt();
    const entryEnd = prompt();

    if(entryDayStart && entryStart && entryDayEnd && entryEnd) {

        let dayStart, hhStart, mmStart, ssStart, dayEnd, hhEnd, mmEnd, ssEnd;

        [dayStart, hhStart, mmStart, ssStart, dayEnd, hhEnd, mmEnd, ssEnd] = [
            Number((entryDayStart.split(" "))[1]),
            Number((entryStart.split(" "))[0]),
            Number((entryStart.split(" "))[2]),
            Number((entryStart.split(" "))[4]),
            Number((entryDayEnd.split(" "))[1]),
            Number((entryEnd.split(" "))[0]),
            Number((entryEnd.split(" "))[2]),
            Number((entryEnd.split(" "))[4]),
        ]

        let days: number = 0;
        let hours: number = 0;
        let minutes: number = 0;
        let seconds: number = 0;
        
        if(hhStart < hhEnd) {
            ;
        } else if(hhStart == hhEnd) {
            ;
        }

    } else {
        return;
    }

}

main();