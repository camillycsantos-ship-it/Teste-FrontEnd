import {describe, it, expect, vi} from 'vitest';
import { calculator } from "./calculator";


describe(" Vitest Calculator", () => {

    it("should add two numbers ", () => {
    
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
    
})

    it.only("shows how mocking", () =>{
        const spy = vi.spyOn(calculator, "add").mockReturnValue(5)
        const result = calculator.add(2,3);

        expect(result).toBe(5);//se o resultado foi exatamente 5
        expect(spy).toHaveBeenCalledOnce(); // se o método foi chamado exatamente 1 vez
        expect(spy).toHaveBeenCalledWith(2,3); // se os argumentos foram exatamente 2,3
    })

});