import { describe, test, expect } from '@jest/globals';
import {convertirCelsiusAFahrenheit } from '../core/celsiustofahrenheit';

describe ("celsiusfaheraint",()=>{
    
    
    it("deberia calcular el resultado correcto",()=>{
        const result= convertirCelsiusAFahrenheit(32);
        expect(result).toEqual(89.6)
    });


    it("deberia calcular el resultado para 100 celsius ",()=>{
        const result= convertirCelsiusAFahrenheit(100);
        expect(result).toEqual(212)
    });
    
    it("deberia calcular el resultado incorrecto",()=>{
        const result= convertirCelsiusAFahrenheit(32);
        expect(result).not.toEqual(30)
    });
     
});
