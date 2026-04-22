---
title: Introduction
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

This year the team has developed the first iteration of the robot with full competition capabilities. Due to team management, leadership issues, poor work quality, and subpar documentation past designs have failed to carry over from previous years. Robot design has been overhauled for more custom hardware that builds on work from other teams’ research and development in the league. A major outcome of this year’s work is custom PCB design and physical analysis of the robot’s functionality for mechanical design. This allowed for reliable operation of our kicker and dribbler. The software for making robot decisions has shifted from traditional programming to a machine learning approach. Following the software shift, the communication protocol to microcontrollers has been simplified, producing a more robust robot hardware control system.


<div style={{ textAlign: "center" }}>
  <img
    src="/img/logo.png"
    alt="CAD rendering of v2026 MkII robot"
    style={{ width: "40%" }}
  />
  <p><em>Fig. 1. CAD rendering of v2026 MkII robot. Cover is transparent for view of components.</em></p>
</div>

---

## Robot Hardware Specifications

<Tabs groupId="robot-version">
  <TabItem value="mkii" label="MkII" default>

| Spec | Value |
|---|---|
| Robot Version | MkII |
| Dimensions | 170 mm × 150 mm |
| Total weight | 1722 g |
| Max. ball coverage | Variable (adaptable mechanism height) |
| Wheel diameter | 50 mm |
| Drivetrain motor | M2006 P36 BLDC Motor |
| Gear ratio (drivetrain) | 1:1 |
| Roller diameter | 18.5 mm |
| Dribbler motor | M2006 P36 BLDC Motor |
| Gear ratio (dribbler) | 2:1 |
| Kicker charge | $2700\,\mu\mathrm{F}\ @\ 180\,\mathrm{V}\ (43.7\,\mathrm{J})$ |
| Microcontroller (Motor) | STM32F427 |
| Microcontroller (Comms) | ESP32-D0WD |
| Battery | Ovonic 6s1p 1550 mAh |

  </TabItem>

  <TabItem value="mkiii" label="MkIII">

| Spec | Value |
|---|---|
| Robot Version | MkIII |
| Dimensions | 170 mm × 150 mm |
| Total weight | TBD |
| Max. ball coverage | 9.6 mm |
| Wheel diameter | 50 mm |
| Drivetrain motor | EC-45 flat 50W |
| Gear ratio (drivetrain) | 1:1 |
| Roller diameter | 17 mm |
| Dribbler motor | TBD |
| Gear ratio (dribbler) | 1:1 |
| Kicker charge | $2700\,\mu\mathrm{F}\ @\ 240\,\mathrm{V}\ (77.8\,\mathrm{J})$ |
| Microcontroller (Motor) | STM32F427 |
| Microcontroller (Comms) | ESP32-S2-SOLO2 |
| Battery | Ovonic 6s1p 1550 mAh |

  </TabItem>
</Tabs>
