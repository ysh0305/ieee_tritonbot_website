---
title: Mainboard Design
---

# Mainboard Design

### Figure 5

![Overview of mainboard connections](/img/docusaurus.png)

*Fig. 5. Overview of mainboard connections.*

---

## System Architecture

Instead of relying on the RoboMaster Development Board Type A for motor control and power distribution and the ESP32-WROOM-32D we opted to design our own mainboard containing all subsystems on a single custom PCB.

The four-layer board layout allows us to reduce EMI, signal noise, and overheating. The first layer was designated for signals, middle two layers ground, and bottom layer GPIO traces to header pins and low speed signals. Each MCU has its own voltage regulator, allowing each to be powered independently, or at the same time from a single USB port for testing purposes; protection between battery and USB power is also implemented.

---

## ESP32 Subsystem

The **ESP32-S2-SOLO-2**, with integrated 2.4 GHz Wi-Fi, is responsible for wireless communication with the AI vision system. Similar to last year, the ESP32 MCU operates as a UDP server to receive vision data and trigger the kicker circuit.

To reduce computational and memory load on the less powerful processor, we integrated peripherals that had previously been connected to the ESP32 MCU with the STM32 MCU directly.

The ESP32 MCU subsystem retains USB functionality, a USB-to-UART interface for debugging, in-chip antenna, and GPIO header pins for further development. This design retains basic ESD protection, signal integrity, prevents EMI, and is primed for future designs.

---

## STM32 Control Subsystem

Alongside the ESP32 MCU, an **STM32F427** serves as the main control processor. It receives data from the ESP32, performs real-time control computations, and communicates commands over CAN bus to our ESCs. Operating at up to **120 MHz**, the STM32 provides low-latency processing for motor control.

Similar to the ESP32 MCU design, only essential components are retained, including power regulation, clock circuitry, IMU, SWD debugging, and CAN interfaces.

---

## Sensors and Communication

The inertial measurement unit (IMU) on the motherboard provides position and acceleration data with a 3-axis gyroscope and 3-axis accelerometer. The **MPU-6050** chip is used and communicates to the STM32 MCU over **I2C**.

A **TCAN322 CAN transceiver** chip facilitates CAN communication between the STM32 MCU and each of the motor controllers.
