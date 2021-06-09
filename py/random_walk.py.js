let warker = `import random
import io, base64
import matplotlib.pyplot as plt
import numpy as np

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