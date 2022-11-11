function formatDuration (seconds) {
  let time = {
    'year': 31536000,
    'day': 86400,
    'hour': 3600,
    'minute': 60,
    'second': 1
  }
  // Complete this function
  let true_time = {}
  for (prop in time) {
    while (seconds >= time[prop]) {
      true_time[prop] ? true_time[prop]++ : true_time[prop] = 1
      seconds -= time[prop]
    }
  }

  let output_str = ''
  for (key in true_time) {
    if (true_time[key] > 1) {
      output_str += `${true_time[key]} ${key}s, `
    } else {
      output_str += `${true_time[key]} ${key}, `
    }
  }

  // handling cases
  let strArr = output_str.split(',')
  if (strArr.length <= 2) {
    return output_str.slice(0, output_str.length - 2)
  }
  return output_str
}
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
console.log(formatDuration(7355220))

// assert.strictEqual(formatDuration(1), "1 second");
// assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
// assert.strictEqual(formatDuration(120), "2 minutes");
// assert.strictEqual(formatDuration(3600), "1 hour");
// assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
// });
// '85 days, 3 hours, 7 minutes ' to equal '85 days, 3 hours and 7 minutes'
