---
title: Introduction
sidebar_position: 1
---

# TritonBots FC 2025

This section describes the development of our overall robot design, including developments over the past year and the assembly of functional autonomous robots aiming to compete in the 2025 RoboCup Small Size League tournament in Salvador, Brazil. This year’s development added more capabilities to our robots. These include, but are not limited to, improvements to the offensive and defensive positioning and formation algorithm, ball placement, smooth deceleration, switching platforms from Raspberry Pi to ESP32, a full mechanical design rework, development of PCBs, and accurate PID tuning. We continued to prioritize improving basic functionality before complex tasks.

---

## Organization

University of California, San Diego, Institute of Electrical and Electronics Engineers
rrada@ucsd.edu1  
y2tai@ucsd.edu2

---

## Team Members

<details>
<summary>View Full Author List</summary>

Raymond Rada1, Terri Tai2, Daniel Bonkowsky, Pedro Pinela

</details>

---

![Fig. 1: CAD Rendering of v2025 Robot](/img/team2.png)

Fig. 1: CAD Rendering of v2025 Robot

---

## Season Summary

The 2025-2026 season is the Tritons’ fifth attempt at participating in the RoboCup
Small-Size League competition. The hardware and software leads joined in the
fall of last year, working together to improve the structure of the team. This
change allowed us to engineer and develop the most functional robots in our
program’s history. There have been redesigns to the mechanical design of the
dribbler, kicker, and chassis of the robot, steady development on PCB and kicker
driving circuit design, porting code to ESP32 for more efficient programming, and
performing body-to-wheel velocity calculations on the ESP32. Our AI continues
to utilize a Behavior Tree instead of a Skill System this year and has been given
improvements to basic robot functionality [1].
