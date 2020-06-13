import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      { text: "Say Hello", isCompleted: true },
      { text: "Say goodbye", isCompleted: false },
      { text: "Climb Everest", isCompleted: false },
    ];

    const expected = [{ text: "Say Hello", isCompleted: true }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
