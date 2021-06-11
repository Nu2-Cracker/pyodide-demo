import warker from './pysource/random_walk.py.js'


async function warkman(){
  globalThis.pyodide = await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full' });
  let result = await pyodide.runPythonAsync(warker);
  result = result.toJs()
  return result
}

async function display(){
  let result = await warkman();
  let data = {
    labels: Array.from(Array(10000), (v, k)=>k),
    datasets: [{
      label: 'random walk',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: result,
    }]
  }
  const config = {
    type: 'line',
    data
  };
  var random_walk_chart = new Chart(
    document.getElementById('random-walk-chart'),
    config
  );

}

display()

