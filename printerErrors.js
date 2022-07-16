// using a template literal to format a string I needed to build

function printerError(s) {
    // your code
  let errors = 0;
  s.split('').forEach((char, index) => {
    if (s.charCodeAt(index) > 109) {
      errors++
    }
  })
  return `${errors}/${s.length}` 
}