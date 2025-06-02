import * as calculator from './calculator';
import * as business from '../business';

describe('Calculator Tests', () => {
  afterEach(() => {
    // Reset all mocks after each test
    vi.restoreAllMocks();
  });

  it('should add two positive numbers (5 + 3 = 8)', () => {
    // Arrange
    const a = 5;
    const b = 3;
    // Act
    const result = calculator.add(a, b);

    // Assert
    // expect(result).toBe(8); ----> toBe compara la direccion de memoria
    // expect({ id: 1 }).toStrictEqual({ id: 1 }); -> toStrictEqual compara el valor y la estructura del objeto
    expect(result).toEqual(8); // -> toEqual compara el valor
  });

  it('should call to isLowerThanFive adding two positive numbers', () => {
    // Arrange
    const a = 2;
    const b = 2;
    // const isLowerThanFive = vi.fn(); // Spy
    vi.spyOn(business, 'isLowerThanFive').mockImplementation((result) => {
      console.log(`isLowerThanFive called with: ${result}`);
    }); // Stub

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(business.isLowerThanFive).toHaveBeenCalled();
    expect(business.isLowerThanFive).toHaveBeenCalledWith(4);
  });
});

//Otras agrupaciones de pruebas
// describe('Add', () => {
//   it('numbers > 0', () => {
//     //Arrange

//     // Act

//     // Assert
//     expect(true).toBeTruthy();
//   });

//   it('numbers < 0', () => {
//     //Arrange

//     // Act

//     // Assert
//     expect(true).toBeTruthy();
//   });
// });
// ----------------------------------------------
// describe('Calculator Tests', () => {
//   describe('Add', () => {
//     it('should add two positive numbers', () => {
//       // Arrange
//       const a = 5;
//       const b = 3;

//       // Act
//       const result = calculator.add(a, b);

//       // Assert
//       expect(result).toBe(8);
//     });

//     it('should add two negative numbers', () => {
//       // Arrange
//       const a = -5;
//       const b = -3;

//       // Act
//       const result = calculator.add(a, b);

//       // Assert
//       expect(result).toBe(-8);
//     });

//     it('should add a positive and a negative number', () => {
//       // Arrange
//       const a = 5;
//       const b = -3;

//       // Act
//       const result = calculator.add(a, b);

//       // Assert
//       expect(result).toBe(2);
//     });
//   });
// });
