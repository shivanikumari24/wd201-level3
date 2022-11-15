/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

const oneDayinMs = 60 * 60 * 24 * 1000;
const today_date = new Date();
const yesterday_date = new Date(today_date.getTime() - 1 * oneDayinMs);
const tomorrow_date = new Date(today_date.getTime() + 1 * oneDayinMs);

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    expect(all.length).toBe(0);
  });

  test("Should add new tests correctly.", () => {
    const length = all.length;
    add({
      title: "service bike",
      dueDate: yesterday_date.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(length + 1);
  });

  test("Should mark a task as completed.", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should return overdue tasks.", () => {
    const overduelen = overdue().length;
    add({
      title: "return pen",
      dueDate: yesterday_date.toLocaleDateString("en-CA"),
    });
    expect(overdue().length).toBe(overduelen + 1);
  });

  test("Should return tasks due today.", () => {
    const duetodaylen = dueToday().length;
    add({
      title: "bakery",
      dueDate: today_date.toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(duetodaylen + 1);
  });

  test("Should return tasks due later.", () => {
    const duelaterlen = dueLater().length;
    add({
      title: "meditate",
      dueDate: tomorrow_date.toLocaleDateString("en-CA"),
    });
    expect(dueLater().length).toBe(duelaterlen + 1);
  });
});
