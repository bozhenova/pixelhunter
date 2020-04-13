import { expect } from "chai";
import { resize, Sizes } from "../utils/resize";

const createTestForFrame = (frame: Sizes) => {
  const testRatio = (given: Sizes, expected: Sizes) => {
    const actual = resize(frame, given);
    expect(actual).to.deep.equal(expected);
  };

  const createTest = (expected: Sizes, multiplier: number) => {
    const given = {
      width: Math.floor(expected.width * multiplier),
      height: Math.floor(expected.height * multiplier),
    };
    it(`shrink ${multiplier}x: ${given.width}x${given.height} => ${expected.width}x${expected.height}`, () => {
      testRatio(given, expected);
    });
  };

  const sequence = (expected: Sizes) => {
    createTest(expected, 8);
    createTest(expected, 7);
    createTest(expected, 5);
    createTest(expected, 4);
    createTest(expected, 3);
    createTest(expected, 2);
    createTest(expected, 1);
  };

  describe(`Resize into frame: ${frame.width}x${frame.height}`, () => {
    describe(`when "width === height"`, () => {
      sequence({ width: frame.width, height: frame.height });
    });

    describe(`when "width > height"`, () => {
      sequence({ width: frame.width, height: Math.floor(frame.height / 2) });
    });

    describe(`when "width < height"`, () => {
      sequence({ width: Math.floor(frame.width / 2), height: frame.height });
    });
  });
};

createTestForFrame({ width: 256, height: 256 });
createTestForFrame({ width: 256, height: 128 });
createTestForFrame({ width: 200, height: 128 });
createTestForFrame({ width: 468, height: 458 });
createTestForFrame({ width: 705, height: 455 });
createTestForFrame({ width: 304, height: 455 });
