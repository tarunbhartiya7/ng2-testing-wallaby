import { compute, greet, getCurrencies, VoteComponent } from './test.component';

//describe() - suite-> group of tests
//it() - spec-> single unit test
describe('Component: DetailsPageComponent', () =>{ 
    // let component;
    // beforeEach(() => {
    //     component = new DetailsPageComponent(null, null, null, null, null, null, null, null);
    // })

    it('should add 1 + 1', () => {
       expect(1 + 1).toEqual(2);
    });

    // it('should get value from CompleteAssessment', () => {
    //     console.log(this.component.locationGroups);
    //     //expect(component.).toEqual(4);
    // });

    it('compute: should return 0 if input is negative', () => {        
        const result = compute(-2);
        expect(result).toBe(0);
    });

    it('compute: should return incremented value of input if input is positive', () => {
        const result = compute(4);
        expect(result).toBe(5);
    });
  
    it('greet: should return greeting with the name', () => {       
        expect(greet('Mike')).toContain('Mike');
    });

    it('getCurrencies: should return supported currencies', () => { 
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });

    it('getCompleteAssessment: should return Yes/No/NATCAT', () => { 
        //const result = getCompleteAssessment();
        // let locationGroup: any[] = [{{'CompleteAssessment': 'Yes'}}];
        // this.locationGroup.push({'CompleteAssessment': 'NATCAT'});
        // const result = 'NATCAT';
        // expect(result).toMatch(/('a' | 'NATCAT')/);      
    });

    let component: VoteComponent;
    beforeEach(() => {
        //Arrange   
        component = new VoteComponent(); 
    })
           
    it('upVote: should increment total votes', () => {      
        //Act
        component.upVote();
        //Assert
        expect(component.totalVotes).toBe(1);
    });

    it('downVote: should decrement total votes', () => {               
        //Act
        component.downVote();
        //Assert
        expect(component.totalVotes).toBe(-1);
    });

    //beforeEach - executed before each test(set up)
    //afterEach - executed after each test(tear down)
    //beforeAll - executed once before all tests
    //afterAll - executed once after all tests        
});