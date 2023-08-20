export default function createIteratorObject(report) {
  let employees = [];
  for (const item of Object.values(report.employees)) {
    employees = [
      ...employees,
      ...item,
    ];
  }
  return employees;
}