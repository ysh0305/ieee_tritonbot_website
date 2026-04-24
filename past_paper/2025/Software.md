---
title: Software
sidebar_position: 5
---

# Software

## 5.1 General Setup

The general software setup continues to be the same as last year’s, as illustrated in Figure 7. Both TritonSoccerAI and TritonBots use a simplified Publisher-Subscriber system for convenient inter-modular communications, facilitated via RabbitMQ and User Datagram Protocol (UDP).

![Figure 7](/img/past_paper/software/fig7.png)

Figure 7

## 5.2 TritonSoccerAI Software (Java)

While continuing our Behavior Tree-based system with a multi-agent approach, which allowed for greater speed and efficiency, we have made significant progress on improving baseline gameplay with changes to our offensive and defensive formation, deceleration, implementation of ball placement, and more.

## 5.3 Offensive Positioning

The objective of this algorithm is to move the fielder to an advantageous spot on the field to increase the team’s overall chance of shooting the goal, while the other fielders move to guard foes and maintain an open trajectory.

This algorithm is designed to generate a plan for all ally fielders, and execute it for our specific fielder. It should be run repetitively during offense, as it assumes and depends on the positions of the enemies, the allies, and the ball.

For each fielder robot f, define a circle Cf centered around its current location with radius r in which it can move (so that its displacement is realistic given the time span where the game conditions don’t change too much). Uniformly sample n (currently taken as πr²/1000) points, v_f1, v_f2, ... , v_fn, in Cf for each robot f as candidate vertices.

First, determine the most hopeful trajectory. In this case, a hopeful trajectory would be a close proximity to a desired location like the goal or an ally.

Given a path from the ball to the gate P, we give a score to P in the following way:

`reward = 5000 / d(P, enemies) + 10000 / l(P)`

Here, d(P, enemies) denotes the closest distance from any enemy to the path; l(P) denotes the total length of the path.

UC San Diego IEEE Student Branch 8

Team TritonsRCSC

We find a “good” trajectory, in other words, a successful pass with no obstacles, from the ball to the gate by choosing the path with the highest reward from the following configurations:

1. Let the robot in possession of the ball be f0. We consider all straight lines from any of v_f0_i to the gate.
2. For each fielder f != f0, we consider the two-part jagged line from any of v_f0_i to v_f_j, and then to the gate.

After this, we should have assigned one (if a type-1 path wins) or two (if a type-2 path wins) fielders to the trajectory.

We assign all other fielders to pick a foe to guard. For this, we use the same strategy as in defense (check out software/figures/8-defensePassCoverageDiagram.png).

![8-defensePassCoverageDiagram](/img/past_paper/software/fig8-defensePassCoverageDiagram.png)

For any foe g on the field, if g is the a-th closest foe to f and f is the b-th closest ally to g, then g has a proximity score of sf(g) = a + b. We select the foe with the lowest proximity score.
