---
title: Kicker
---

# Kicker

The kicker electronics are heavily inspired by the Tigers Mannheim v2020 Kicking Module PCB with some notable differences [2]. To maximize the impulse needed for a strong kick of the ball we determined an electronic push-pull solenoid system was necessary.

---

## Operating Principle

The strength of the kick delivered by the solenoid is proportional to the current resulting from a voltage drop across the coil in a short period of time. This allows for a fast change of electrical potential energy to kinetic energy of the solenoid plunger.

To achieve this a **2700uF capacitor** is charged to **180V** then discharged through the coil using an IGBT for rapid switching. Capacitor voltage was determined experimentally through adjusting the output of the capacitor charger then observing the velocity of the ball following successful kicks. For the purposes of qualification speed was limited to **110V** for half-field play.

---

## Charging Circuit

The design was optimized for two main aspects, charge time and speed of discharge. Fast charging of the capacitors is achieved through the **LT3751 Capacitor Charger IC** which utilizes a flyback converter topology [3]. The flyback converter topology was chosen for its higher efficiency at high voltage conversion ratios and galvanic isolation between high and low voltage.

---

## Discharge and Protection

For quick turn on of the IGBT the **UCC27517 IC Low Side Gate Driver** delivers **4A peak current** capability for charging of the gate capacitor. Fast discharge times introduce flyback when switching an inductive load however. In response the **MBR40250G schottky diode** was added in parallel to clamp flyback.
