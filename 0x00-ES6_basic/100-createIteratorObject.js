export default function createIteratorObject(report) {
  const employees = [];
  for (const dep of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[dep]) {
      employees.push(employee);
    }
  }

  return employees;
}
