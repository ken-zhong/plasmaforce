# PlasmaForce

Welcome to **PlasmaForce**!
[live link](https://ken-zhong.github.io/plasmaforce/)

<div style="text-align: center">
  <img src="./docs/plasmaforce_gif.gif" />
</div>
<br>

PlasmaForce is a 2d side-scrolling space shooter (also known as a 'bullet hell') game.

### Features
- Multiple enemy types, and difficulty progression from easy to chaotic the longer the player stays alive.
- Local high score storage. Eventually, I would like to add a Node/Express backend for global high scores.
- Randomly generated enemy waves after a few fixed waves.
- Audio mute/unmute; starts off muted.
- Smooth 60 fps gameplay on relatively low end computer hardware. Some performance tweaks:
  - Caching sprites and images in an ES6 singleton module.
  - Using Howler.js audio library to cache sound effects.
  - Layering three canvas elements on top of each other and rendered the background, game, and UI elements separately. By redrawing the background and UI at a lower refresh rate, I was able to reduce the number of total re-draws.
  - Calculating player bullet and enemy bullet collision checks separately, reducing the total number of costly collision checks.

### Future Directions
- Node/Express backend for global high scores
- More enemy types.
- Player item pickups, e.g. HP restore items and weapon upgrades.


##### Credits:
Code: Ken Zhong

Assets:
- Background image: Satur9, https://opengameart.org/content/space-background-01
- Ship Assets by surt, https://opengameart.org/content/shmup-ships
- Lasers and Beams by Rawdanitsu, https://opengameart.org/content/lasers-and-beams
- Font, 'Arcade Classic' by PizzaDude, https://www.dafont.com/arcade-classic-pizz.font
- Sound effects:
  - Iwan Gabovitch https://opengameart.org/content/synthesized-explosion
  - Blender Foundation https://opengameart.org/content/big-explosion
