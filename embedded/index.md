---
title: Embedded Team
sidebar_position: 5
---

# Embedded Team

## Overview

The robot’s embedded architecture utilizes a dual-microcontroller system. An ESP32-WROOM-32 [7] serves as the primary communication node, handling high-level Wi-Fi commands from the AI client and managing the kicker subsystem. A RoboMaster Development Board (STM32F427 [8]) acts as the dedicated motion controller, executing the dribbler and drivetrain control loops.

This separation of concerns ensures that the computationally intensive network handling does not interfere with the real-time requirements of motor control.

---

## System Roles

### Communication MCU — ESP32-WROOM-32

- Handles Wi-Fi communication with AI client  
- Processes high-level commands  
- Manages kicker subsystem  

### Motion Control MCU — STM32F427

- Executes dribbler control loop  
- Executes drivetrain control loop  
- Maintains real-time deterministic motor control  
