export enum GradeType {
    Celsius = 'Celsius',
    Fahrenheit = 'Fahrenheit',
    Kelvin = 'Kelvin'
}

export class GradeConversor {
    convert(grade: number, fromGradeType: GradeType, toGradeType: GradeType): number {
        if (fromGradeType === GradeType.Celsius) {
            if (toGradeType === GradeType.Fahrenheit) {
                return this.convertCelsiusToFahrenheit(grade);
            } else if (toGradeType === GradeType.Kelvin) {
                return this.convertCelsiusToKelvin(grade);
            }
        }

        if (fromGradeType === GradeType.Fahrenheit) {
            if (toGradeType === GradeType.Celsius) {
                return this.convertFahrenheitToCelsius(grade);
            } else if (toGradeType === GradeType.Kelvin) {
                return this.convertFahrenheitToKelvin(grade);
            }
        }

        if (fromGradeType === GradeType.Kelvin) {
            if (toGradeType === GradeType.Celsius) {
                return this.convertKelvinToCelsius(grade);
            } else if (toGradeType === GradeType.Fahrenheit) {
                return this.convertKelvinToFahrenheit(grade);
            }
        }
    }

    convertCelsiusToFahrenheit(celsius: number): number {
        return celsius *9 / 5.0 + 32;
    }

    convertCelsiusToKelvin(celsius: number): number {
        return celsius + 273.15;
    }

    convertFahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - 32) * 5.0 / 9.0;
    }

    convertFahrenheitToKelvin(fahrenheit: number): number {
        return (fahrenheit - 32) * 5.0 / 9.0 + 273.15;
    }

    convertKelvinToCelsius(kelvin: number): number {
        return kelvin - 273.15;
    }

    convertKelvinToFahrenheit(kelvin: number): number {
        return (kelvin - 273.15) * 9.0 / 5.0 + 32;
    }
}
