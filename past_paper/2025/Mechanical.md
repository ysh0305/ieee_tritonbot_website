---
title: Mechanical Design
sidebar_position: 2
---

# Mechanical Design

The robot has 2 layers to house components for the major functions of the robot;
general movement, kicking, and dribbling. The first layer consists of the base
plate to which wheels, motors, and the kicker solenoid are mounted. Above this
lies the second layer, a plate mounted to the base plate which carries the dribbler
system, and all of the electronics. All 3D-printed parts were manufactured using
standard PLA.

![Fig. 2: Robot Exploded View](/img/past_paper/mechanical/fig2.png)

Fig. 2: Robot Exploded View

UC San Diego IEEE Student Branch 2

Team TritonsRCSC

## 2.1 Chassis

The base plate was designed to fit the necessary constraints of a competition
robot in size and diameter. A circular plate was modified with specific slots to
be cut for the placement of the wheels and kicker. The angles of the front wheels
are aligned at 30 degrees from the horizontal of the robot with the rear wheels
aligned 60 degrees from the horizontal. From our research of other teams in the
Small Size League, this configuration was selected for more efficient movement in
the forward direction [2].

![Fig. 3: Deflection Analysis with AA-6061 Aluminum Alloy](/img/past_paper/mechanical/fig3.png)

Fig. 3: Deflection Analysis with AA-6061 Aluminum Alloy

To reduce the power consumption of the robot, we determined it would
need the lightest and most resistant material to deflection. With our general
layout finalized, several virtual deflection analyses were performed in order to
determine the material to use based on our criteria. In order to reduce weight
while maximizing stiffness, 4.09-mm thick aluminum alloy was selected to be
laser cut.

## 2.2 Dribbler

For robot possession of the ball, the dribbler subsystem relies on spinning the
ball towards the robot. This solution has been adopted by all teams in the league.
We implemented this design using a simple gear train that transfers power to the
roller. A 2:1 gear ratio was designed for higher speed and more space-efficient
component placement. The assembly is mounted on a pivot to allow for damping
of the subsystem. By having the height of the dribbler slightly shorter than the
optimal height for contact with the ball and the kicker, gravity and tension are
applied to the ball. This gives the robot more traction with the ball, preventing
it from slipping away while rotating. The XING-E Pro 2207 Motor was selected
for its small dimensions, low weight, high speed, and immediate availability.
Through testing, the optimal RPM of the motor was determined for minimal
power consumption and sufficient control of the ball.

UC San Diego IEEE Student Branch 3

Team TritonsRCSC

## 2.3 Kicker

The kicker is composed of 4 distinct components: One solenoid, two base mounts,
a kicker plunger, and a kicker bracket. The FJ-Z05 solenoid is the only aftermarket
component not designed by the team. The mechanism functions through the
pushing force of the solenoid, which drives the kicker plunger and the plate to
strike the ball. A bearing slider system was designed to minimize friction and
align the plunger so that it’s oriented parallel to the ground. The solenoid is
fixed to the chassis through the base mounts, located on the sides of the solenoid
parallel to the shaft.
