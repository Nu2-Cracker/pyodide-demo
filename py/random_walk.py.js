let warker = `import random
import io, base64
import matplotlib.pyplot as plt
import numpy as np
import sys, os, subprocess


print(sys.path)
print(os.listdir("/lib/python3.8/site-packages"))
#print(subprocess.run(["cat", "/lib/python3.8/site-packages/README.txt"]))
with open("/lib/python3.8/site-packages/README.txt",mode="r", encoding="utf-8") as fr:
    text = fr.read()
    print(text)

import micropip
await micropip.install('pyrtl')
#await micropip.install('jupyterlab')
print(os.listdir("/lib/python3.8/site-packages"))

def walker():
    nsteps = 1000
    draws = np.random.randint(0, 2, size=nsteps)
    steps = np.where(draws>0, 1, -1)

    walk = steps.cumsum()
    plt.plot(walk)

    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
    return img_str

walker()
`


export default warker