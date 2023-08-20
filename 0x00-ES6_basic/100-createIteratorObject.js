export default function createIteratorObject(report) {
  let employees = [];
  for (let item of Object.values(report.employees)) {
    employees = [
      ...employees,
      ...item,
    ];
  }
  return employees;
}