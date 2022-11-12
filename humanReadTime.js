function formatDuration (seconds) {
  if(seconds === 0) {
    return 'now'
  }
  
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
  } else if (strArr.length === 3) {
      //pop off last item
      strArr.pop()
      return strArr.join(' and')
  } else {
      // pop off last item, add the 'and', retain commas before and
      strArr.pop()
      // you can slice a list too
      let pre = strArr.slice(0, strArr.length - 1).join(',')
      let post = strArr.slice(strArr.length - 1)
      return `${pre} and${post.join('')}`
  }
}