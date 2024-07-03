interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    console.log("Working from home");
    return "Working from home";
  }

  getCoffeeBreak(): string {
    console.log("Getting a coffee break");
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    console.log("Getting to director tasks");
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) return new Teacher();

  return new Director();
}

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let message;

  if (isDirector(employee)) {
    message = employee.workDirectorTasks();
  } else {
    message = employee.workTeacherTasks();
  }

  console.log(message);
  return message;
}

type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}
