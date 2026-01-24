import { describe, expect } from '@jest/globals';
import { GradeConversor, GradeType } from '../core/grade-conversor';

describe ('grade-conversor', () => {
    let gradeConversor: GradeConversor;
    
    beforeEach(() => {
        gradeConversor = new GradeConversor();
    });

    it('should return the correct result for 32 Celsius to Fahrenheit', () => {
        const result = gradeConversor.convert(32, GradeType.Celsius, GradeType.Fahrenheit);
        expect(result).toEqual(89.6)
    });

    it('should calculate the correct result for 100 Celsius to Fahrenheit', () => {
        const result = gradeConversor.convert(100, GradeType.Celsius, GradeType.Fahrenheit);
        expect(result).toEqual(212)
    });
    
    it('should not calculate the result for 32 Celsius when the expected result is incorrect', () => {
        const result = gradeConversor.convert(32, GradeType.Celsius, GradeType.Fahrenheit);
        expect(result).not.toEqual(30)
    });

    it('should return the correct result for 32 Celsius to Kelvin', () => {
        const result = gradeConversor.convert(32, GradeType.Celsius, GradeType.Kelvin);
        expect(result).toEqual(305.15)
    });
});
