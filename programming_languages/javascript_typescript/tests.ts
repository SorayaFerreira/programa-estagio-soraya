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
        let dayStart = Number((entryDayStart.split(" "))[1]);

        let hhStart = Number((entryStart.split(" "))[0]);
        let mmStart = Number((entryStart.split(" "))[2]);
        let ssStart = Number((entryStart.split(" "))[4]);

        let dayEnd = Number((entryDayEnd.split(" "))[1]);

        let hhEnd = Number((entryEnd.split(" "))[0]);
        let mmEnd = Number((entryEnd.split(" "))[2]);
        let ssEnd = Number((entryEnd.split(" "))[4]);

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