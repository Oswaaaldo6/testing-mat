import { compute } from "./compute";

describe('compute test suit', ()=>{
    it('Should return 0 if input is negative', ()=>{
        let result=compute(-1);
        expect(result).toBe(0);
    })
    it('Should increment if it is positive', ()=>{
        let result=compute(1);
        expect(result).toBe(2);
    })
})