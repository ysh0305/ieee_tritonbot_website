---
title: Power Distribution
---

# Power Distribution

The Power Distribution Board was designed to condition the 6S LiPo battery (nominal **24V**) and provide regulated power to high-current actuators and sensitive logic. Design prioritized reliability during impacts and brownouts, low EMI, and thermal margin.

---

## Input Protection and Inrush Control

The battery enters through an XT-style connector with a blade/MIDI fuse placed close to the entry point to minimize unfused trace length. Inrush current control is achieved through the **LTC423** protecting upstream fuses and avoiding brownouts on plug-in. Reverse polarity and transient suppression use ideal-diode MOSFETs and TVS diodes rated for pack voltage and expected surge profiles.

---

## Telemetry and Monitoring

For telemetry, the **INA226** was used as it is a high-side current shunt with an I2C monitor that reports current, bus voltage, and power [?]. Powered by the **+3.3 V rail**, the shunt sits on the battery feed before branching rails to capture total robot current. Alarms are programmed for over-current, under-voltage, and over-power in firmware.

---

## DC-DC Conversion

Synchronous buck converters step down battery voltage to **+12 V** and **+5 V** for efficiency and thermal margin. The **LMR23630** (one for each voltage rail) with soft-start and spread-spectrum features reduce conducted EMI [5]. Its wide **4–36 V input range** supports the 6S LiPo voltage across charge states, while the integrated loop compensation and peak-current-mode control simplify design and ensure stable operation under dynamic load conditions.

PCB layout was optimized for minimizing switching loop area.

---

## Low-Noise Logic Rail

The **+3.3 V rail** uses the **LT3080 Low Dropout Regulator** [6] with additional LC filters or ferrites at noise-sensitive loads to provide a low-noise, well-regulated rail for sensitive logic.
