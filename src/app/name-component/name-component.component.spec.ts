import { NameComponent } from './name-component.component';

describe('NameComponent', () => {
    //sanity check
    it('should add 1 + 1', () => {
       expect(1 + 1).toEqual(2);
    });

    // let component: NameComponent;
    // beforeEach(() => {
    //     //Arrange   
    //     component = new NameComponent(); 
    // });

    it('should be truthy', () => {
       let component = new NameComponent(); 
       expect(component).toBeTruthy();
    });

    it('should calculate the total as the sum of prices', () => {
       let component = new NameComponent(); 
       expect(component.total).toBe(3);
    });

    // it('should calculate the total as the sum of prices', () => {
    //    let component = new NameComponent(); 
    //    expect(component.total).toBe(3);
    // });

    it('should calculate the total', () => {
        let component = new NameComponent(); 

        component.items =  [
            {name: 'item1', price: 2},
            {name: 'item2', price: 4}
        ];
        component.total = 0;
        component.calculate();
        expect(component.total).toBe(6);        
    });

    
})