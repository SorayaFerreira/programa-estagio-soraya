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
        let dayStart = Number((entryDayStart.split(" "))[1] as unknown);

        let hhStart = Number((entryStart.split(" "))[0] as unknown);
        let mmStart = Number((entryStart.split(" "))[2] as unknown);
        let ssStart = Number((entryStart.split(" "))[4] as unknown);

        let dayEnd = Number((entryDayEnd.split(" "))[1] as unknown);

        let hhEnd = Number((entryEnd.split(" "))[0] as unknown);
        let mmEnd = Number((entryEnd.split(" "))[2] as unknown);
        let ssEnd = Number((entryEnd.split(" "))[4] as unknown);

        let days: number = 0;
        let hours: number = 0;
        let minutes: number = 0;
        let seconds: number = 0;
        
        if(hhStart) {
            ;
        } else {
            ;
        }

    } else {
        return;
    }

}
main();