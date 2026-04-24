---
title: Electronics
sidebar_position: 3
---

# Electronics

## 3.1 PCB Design

![Fig. 4: Overview of Main Electronic Components and Connections](/img/past_paper/electrical/fig4.png)

Fig. 4: Overview of Main Electronic Components and Connections

To step away from using over-the-shelf components and transition into a
modular and customizable system for future work that contains the necessary
peripherals and power outputs needed to drive our robot. We are currently reverse
engineering a development board [RoboMaster Development Board Kit Type A]
that was used for previous iterations of our robot to determine the layout and
necessary ports for the current prototype.

After acquiring the schematic for the development board and the power
tree, aspects of power systems, IO ports, and communication ports needed for
operation of the robot were implemented in the PCB. Additional footprints were
designed for the motor and speed controllers used for dribbling and movement.
A footprint for the C610 Robomaster motor controller to integrate it into our
custom PCB. The motor controller was applied directly to the main PCB and

UC San Diego IEEE Student Branch 4

Team TritonsRCSC

![Fig. 5: Power Input and Output [2]](/img/past_paper/electrical/fig5.png)

Fig. 5: Power Input and Output [2]

improved overall board organization. Through analyzing the C610 datasheet/user
guide, the necessary dimensions of the C610 were found to factor in the 3-phase
cable port, power supply terminals, and CAN cable. Similarly our ICQUANZX
BLHeli S6s 35A electronic speed controller for dribbler motor control was added
to the PCB using the same methods.

## 3.2 Kicker Circuit

![Fig. 6: Kicker Circuit](/img/past_paper/electrical/fig6.png)

Fig. 6: Kicker Circuit

The kicker circuit operates by charging a high capacitance capacitor then
quickly discharging through a solenoid linear actuator, allowing the mechanism
to kick with high impulse. Key design considerations include minimizing size,
safe operation, maintaining reliability under repeated high-voltage switching
conditions, and minimal charge time.

Our implementation utilizes the LT3751 Capacitor Charger IC with the 42A
Capacitor Charger application detailed in the datasheet. This application was

UC San Diego IEEE Student Branch 5

Team TritonsRCSC

![Fig. 7: Capacitor Charger [3]](/img/past_paper/electrical/fig7.png)

Fig. 7: Capacitor Charger [3]

selected for its low charge time at high voltages and capacitances. The output
voltage of the circuit could also be set allowing the adjustment of the electric
potential energy in each kick. For fast switching we utilized the IRF740 power
NMOS driven by the IR2110 low side MOSFET gate driver with decoupling
capacitors for noise reduction.

For circuit protection it was deemed necessary to read the capacitors fully
charged prior to kicking. The LM393 comparator IC was utilized to apply an
output voltage when the capacitors were detected to be fully charged. This
logic high would then be fed into the microcontroller to indicate full charge.
Additionally an metal oxide varistor was applied in parallel with the NMOS to
protect from voltage transients and current sense resistor circuit for overcurrent
protection.

Our next steps involve fabricating a custom solenoid that best meets size and
force parameters and electrical characteristics along with completing the PCB
design to house other necessary functionalities for the robot.
