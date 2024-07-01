import { describe, it, expect, vi } from 'vitest';
import { countSheeps } from './src/app.js';


const originalConsoleLog = console.log;
beforeEach(() => {
    console.log = vi.fn();
});

afterEach(() => {
    console.log = originalConsoleLog;
});

describe('countSheeps', () => {
    it('should count the number of sheep correctly', () => {
        countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]);
        expect(console.log).toHaveBeenCalledWith('There are 17 sheep in total');
    });

    it('should handle the case with no sheep', () => {
        countSheeps([false, false, false]);
        expect(console.log).toHaveBeenCalledWith('UPS!!! Wolfs eaten Sheeps');
    });

    it('should handle the case with all sheep', () => {
        countSheeps([true, true, true, true, true]);
        expect(console.log).toHaveBeenCalledWith('There are 5 sheep in total');
    });

    it('should handle the case with mixed wolves and sheep', () => {
        countSheeps([false, true, false, true, false, true]);
        expect(console.log).toHaveBeenCalledWith('There are 3 sheep in total');
    });

    it('should handle the case with all wolves', () => {
        countSheeps([false, false, false, false]);
        expect(console.log).toHaveBeenCalledWith('UPS!!! Wolfs eaten Sheeps');
    });

    it('should handle an empty list', () => {
        countSheeps([]);
        expect(console.log).toHaveBeenCalledWith('UPS!!! Wolfs eaten Sheeps');
    });

    it('should handle the case with one sheep', () => {
        countSheeps([true]);
        expect(console.log).toHaveBeenCalledWith('There are 1 sheep in total');
    });

    it('should handle the case with one wolf', () => {
        countSheeps([false]);
        expect(console.log).toHaveBeenCalledWith('UPS!!! Wolfs eaten Sheeps');
    });

    it('should handle the case with multiple sheep and wolves', () => {
        countSheeps([true, false, true, true, false, false, true]);
        expect(console.log).toHaveBeenCalledWith('There are 4 sheep in total');
    });
});
