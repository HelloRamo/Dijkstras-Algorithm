/**
 * @jest-environment jsdom
 */
const { validateInput } = require('./pq');

describe('validateInput', () => {
    beforeEach(() => {
        // Mock the prompt function
        window.prompt = jest.fn();
        window.alert = jest.fn();
        document.getElementById = jest.fn().mockReturnValue({ value: '' });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should validate user input correctly', () => {
        // Mock the correct distances
        const correctDistances = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
        };

        // Mock the user input
        window.prompt.mockReturnValueOnce('0'); // User input for node B
        window.prompt.mockReturnValueOnce('1'); // User input for node C
        window.prompt.mockReturnValueOnce('2'); // User input for node D
        window.prompt.mockReturnValueOnce('3'); // User input for node E

        validateInput();

        expect(window.prompt).toHaveBeenCalledTimes(4);
        expect(window.alert).toHaveBeenCalledTimes(4);
        expect(document.getElementById).toHaveBeenCalledTimes(4);
        expect(document.getElementById).toHaveBeenCalledWith('distanceToB');
        expect(document.getElementById).toHaveBeenCalledWith('distanceToC');
        expect(document.getElementById).toHaveBeenCalledWith('distanceToD');
        expect(document.getElementById).toHaveBeenCalledWith('distanceToE');
        expect(document.getElementById('distanceToB').value).toBe('0');
        expect(document.getElementById('distanceToC').value).toBe('1');
        expect(document.getElementById('distanceToD').value).toBe('2');
        expect(document.getElementById('distanceToE').value).toBe('3');
    });
});