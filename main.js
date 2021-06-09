import warker from "./py/random_walk.py.js" //これが必要になります


let output_pane = document.getElementById("output");
async function main(){
  await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
  pyodide.loadPackage(['pillow','cycler', 'six', 'kiwisolver', 'numpy', 'pyparsing', 'python-dateutil', 'pytz']);
  // let result = await pyodide.loadPackagesFromImports(warker)
  // await pyodide.loadPackage('numpy');
  let result = await pyodide.runPythonAsync(warker);
  // console.log(result);
  output_pane.src = result + '\n';

}




main();
// document.addEventListener('DOMContentLoaded', (event) => {
//   await result;
//   let output_pane = document.getElementById("output");
//   output_pane.value  = "ffffffffffff" + '\n';

//   output_pane.value += result + '\n';
//   console.log("ok")
// });





