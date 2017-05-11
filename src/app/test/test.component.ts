//numbers
export function compute(number: any){
    if(number < 0)
        return 0;

    return number + 1;
}

//strings
export function greet(name: string){
    return `Good Morning ${name}`;
}

//arrays
export function getCurrencies(){
    return ['USD', 'AUD', 'EUR'];
}

//arrays
// export function getCompleteAssessment(){
//     let locationGroup: any[];
//     this.locationGroup.push({'CompleteAssessment': 'NATCAT'});
//     return this.locationGroup[0].CompleteAssessment;
// }


export class VoteComponent {
    totalVotes = 0;

    constructor() { }

    ngOnInit() { }

    upVote(){
        this.totalVotes++;
    }

    downVote(){
        this.totalVotes--;
    }
}
