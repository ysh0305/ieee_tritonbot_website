---
title: ESP32 Kicker Control
---

# ESP32 Kicker Control Integration

Kicker control logic was migrated entirely to the ESP32 in the current system. Previously, kicking was handled indirectly through downstream controllers. In the updated design, the ESP32 directly manages solenoid charging and firing using GPIO control.

---

## State Machine Architecture

The kicker logic is implemented as a non-blocking state machine consisting of:

1. **Capacitor charging**  
2. **Ready state**  
3. **Firing pulse**  
4. **Cooldown interval**

---

## Timing Configuration

Timing parameters, including charge duration, firing pulse width, and cooldown time, are configurable at compile time. This design allows high-level software to trigger kicks using a single command while enforcing safety constraints at the embedded level.

Centralizing kicker control on the ESP32 also reduces coupling between motor control and high-voltage actuation logic.
