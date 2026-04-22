---
title: 2.5 Dribbler
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2.5 Dribbler

The dribbler subsystem is responsible for receiving and maintaining control of the ball while working in conjunction with the kicker. It is composed of three main parts: a roller that directly contacts the ball, a body that supports the roller shaft, bearings, and motor, and a mount that attaches the assembly to the base plate. The MkII design supported only adjustable heights for testing of optimal heights based on playing surface while MkIII design features a torsion spring damping system for reliable intake of the ball.

---

## Gear Ratio

<Tabs groupId="dribbler-gear">
  <TabItem value="mkii" label="MkII" default>
    The MKII design made use of a **1:2 gear ratio** to achieve faster rpms at the cost of torque. Testing of the device revealed that the roller would often stall with the setup.
  </TabItem>

  <TabItem value="mkiii" label="MkIII">
    MKIII will make use of a **1:1 ratio** of gears to solve the issue, while adopting a new dribbler motor capable of providing higher rpm at the same or greater torque.
  </TabItem>
</Tabs>

---

## Torsion Spring Testing

The team is currently testing the system with torsion springs of different stiffness for reliable intake of the ball by evaluating impact at different speeds and rotations. The springs provide a restorative torque at the pivot point of the dribbler, which resists the incoming ball’s push. Once testing is complete, the team will determine if the torsion spring system provides sufficient damping or if it needs to be adapted or substituted.

---

## Rule Constraint

RoboCup rules limit ball obstruction to **20 percent** of the ball’s projected area. Modeling the ball as a sphere of radius $R = 21.5\,\text{mm}$, the covered region is treated as a circular segment with area

$$
A_{\text{seg}}=\frac{R^2}{2}(\theta-\sin\theta)\le 0.2\pi R^2
$$

Leads to a conservative solution of **$2\,\text{rad}$**. This corresponds to a maximum allowable coverage depth of

$$
d \approx 0.45R = 9.675\,\text{mm}
$$

---

## Roller Geometry and Placement

The roller has an overall cylindrical profile lofted to match the ball surface, increasing the contact area while improving damping of incoming balls.

The smallest radius occurs at the roller center (**7 mm**), with the outer radius increasing to **8.5 mm**; the total length is **60 mm**, chosen to maximize contact width while remaining compatible with the kicker plunger and surrounding components.

Angled grooves along the roller help guide the ball toward the robot’s centerline.

Based on a free-body analysis of the ball, the roller is positioned as close as possible to the top of the ball (**within the 9.675 mm coverage limit**) so that the horizontal component of the normal force is reduced while still providing sufficient tangential force to generate backspin, thereby favoring rotational control over forward translation during reception.

---

## MkIII Damped Assembly

The MkIII dribbler further introduces a two-degree-of-freedom damped assembly: the dribbler rotates about an axis and is backed by damping foam to absorb impact when the ball is received or intercepted. Geometric construction using the **7 mm roller radius**, **9.6 mm allowable coverage**, and **7 mm plunger clearance** yields a vertical placement height of approximately **21.3 mm** for the roller relative to the ball center, ensuring both visibility compliance and mechanical clearance with the kicker.

---

### Figure 4

![MkII dribbler](/img/docusaurus.png)

*Fig. 4. MkII dribbler.*
