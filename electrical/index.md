---
title: Electrical Team
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';

# Electrical Team

## Overview

As mentioned previously, the team has developed the MkII robot for the purposes of qualification and testing AI systems and the MkIII for competition. As a result MkII features electronics used in previous seasons.

---

## System Architecture

<Tabs groupId="electronics-version">

<TabItem value="mkii" label="MkII" default>

The MkII robot relies on the Robomaster Development Board Type A for power distribution and is a central hub for connections with our ESP32 module, electronic speed controllers, and kicker PCB.

For motor control the STM32F427 integrated within the Robomaster Development Board communicates with each C610 Motor Speed Controller through CAN protocol.

The STM32F27 receives commands from the ESP32-WROOM-32D development board through UART. The ESP32-WROOM-32D allows for wireless communication through Wifi and controls the operation of the kicker.

</TabItem>

<TabItem value="mkiii" label="MkIII">

The MkIII robot builds upon the development of MkIII through implementing ICs, microcontrollers, sensors, and motor drivers on custom PCBs for more reliable and cost effective sourcing and manufacturing of electronics. The majority of our communication protocols and systems remain unchanged.

Due to time constraints preliminary design of motor drivers and encoders is still ongoing. Following our research of BLDC motor driver ICs the team is considering switching communication protocols for motor control due to the requirement of a CAN bus converter for translating industry standard interfaces (i.e. I2C, SPI, UART) outputted by motor driver ICs.

</TabItem>

</Tabs>

---

## Subsections

<DocCardList />
