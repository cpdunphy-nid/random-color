import { randomColor } from "../src/index.js";

describe("randomColor", () => {
  test("returns a valid hex color string", () => {
    expect(randomColor()).toMatch(/^#[0-9A-Fa-f]{6}$/);
    console.log("Generated color:", randomColor());
  });
});
