---
title: Firmware Refactor & Protocol

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmware Refactor & Protocol

During the 2025-2026 development cycle, the ESP32 firmware was fully refactored to improve maintainability, determinism, and runtime efficiency. While system functionality remains equivalent to the previous implementation, the internal structure was redesigned to improve modularity, readability, and debugging efficiency.

---

## Communication Protocol Redesign

:::info Major Architectural Change
A major architectural change was the replacement of Protocol Buffers (Protobuf) with a lightweight, text-based command protocol for communication between the off-field AI system and the ESP32.
:::

<Tabs groupId="protocol-comparison">

<TabItem value="previous" label="Previous (Protobuf)" default>

In prior implementations, Protobuf parsing introduced unnecessary complexity and memory overhead for a resource-constrained microcontroller environment.

</TabItem>

<TabItem value="current" label="Current (ASCII UDP)">

The new protocol transmits compact ASCII commands over UDP multicast and is parsed incrementally on the ESP32.

Each command is identified by a single-character opcode, enabling constant-time dispatch without string comparisons. This significantly reduces parsing latency and simplifies extensibility. The current command set uses only a small subset of the available alphabet, leaving room for future expansion without redesigning the protocol.

</TabItem>

</Tabs>

---

## Deterministic Control Loop

The ESP32 executes the following operations in a deterministic loop:

1. **Receive packets** — Receive and buffer incoming UDP packets  
2. **Discard stale data** — Process only the most recent command  
3. **Decode command** — Decode the command opcode and parameters  
4. **Compute wheel targets** — Convert desired robot velocities into individual wheel velocities  
5. **Transmit to STM32** — Forward motor targets via UART  
6. **Update actuators** — Update kicker and dribbler state machines  


---

## Network Robustness Strategy

This “latest-packet-only” strategy minimizes control jitter under high network load and improves responsiveness during rapid command updates.
