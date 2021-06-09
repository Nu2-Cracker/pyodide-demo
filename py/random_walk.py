import random
import matplotlib.pyplot as plt


def walker():
    position = 0
    walk = [position]
    steps = 100
    for i in range(steps):
        step = 1 if random.randint(0, 1) else -1
        position += step
        walk.append(position)
    # plt.plot(walk)
    # plt.show()
    # return walk
import numpy as np
nsteps = 1000
draws = np.random.randint(0, 2, size=nsteps)
steps = np.where(draws>0, 1, -1)

walk = steps.cumsum()
plt.plot(walk)
plt.show()



# if __name__ == "__main__":
#     print(walker())
