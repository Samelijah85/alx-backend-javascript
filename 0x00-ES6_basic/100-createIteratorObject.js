export default function createIteratorObject(report) {
  const employees = [];
  Object.values(report.allEmployees).forEach((value) => {
    employees.push(...value);
  });

  return employees[Symbol.iterator]();
}
