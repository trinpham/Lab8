const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon test', () => {
    test('volume over 66 is level 3', () => {
        expect(formatVolumeIconPath(100)).toContain('level-3');
    });

    test('volume under 67 and over 33 is level 2', () => {
        expect(formatVolumeIconPath(34)).toContain('level-2');
    });

    test('volume under 34 and over 0 is level 1', () => {
        expect(formatVolumeIconPath(1)).toContain('level-1');
    });

    test('volume at 0 is level 0', () => {
        expect(formatVolumeIconPath(0)).toContain('level-0');
    });
});