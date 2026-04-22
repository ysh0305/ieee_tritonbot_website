---
title: STM32 PID Controller
---

# STM32 PID Controller Redesign

The STM32 motor control firmware was revised to improve low-speed controllability and robustness across varying field surfaces. The updated design introduces a time-aware control formulation with explicit modeling of low-speed friction behavior.


---

## Error Definition

Let the wheel velocity tracking error be defined as

$$
e(t) = \omega_{\text{target}}(t) - \omega_{\text{measured}}(t),
$$

where $\omega_{\text{target}}$ is the commanded wheel velocity and $\omega_{\text{measured}}$ is obtained from motor encoder feedback.

The controller explicitly accounts for variable loop timing by computing the elapsed time

$$
\Delta t = t_k - t_{k-1}.
$$

---

## Friction Compensation

:::info Low-Speed Compensation
A low-speed friction compensation term $u_f$ is applied to mitigate wheel stiction in the near-zero velocity regime, with the compensation reduced during velocity sign changes to limit overshoot.
:::

---

## Control Law

The controller computes a proportional–integral (PI) response based on the wheel velocity tracking error:

$$
u_{\text{out}} = K_p e(t) + K_i \int e(t)\,dt + u_f.
$$

The resulting command is clipped to fixed minimum and maximum values to respect actuator limits. A derivative term is currently omitted due to sensitivity to encoder noise at low wheel speeds, and is reserved for future evaluation if operating conditions warrant it. [9]


---


## Result

This formulation improves low-speed responsiveness and reduces dead-zone behavior, resulting in more consistent wheel control across robots and field surfaces.
