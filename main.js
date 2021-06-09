import warker from "./py/random_walk.py.js" //これが必要になります


let output_pane = document.getElementById("output");
async function main(){
  await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
  pyodide.loadPackage(['matplotlib', 'pillow','cycler', 'six', 'kiwisolver', 'numpy', 'pyparsing', 'python-dateutil', 'pytz']);
  let result = await pyodide.runPythonAsync(warker);
  output_pane.src = result + '\n';

}

main()
