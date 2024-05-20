# [live preview](https://wildaxewappears.github.io/Etch_A_Sketch/)
# Etch-a-Sketch

This is JavaScript Dynamic Grid Creator allows you to dynamically create a grid of cells within a specified container element on a webpage. Each cell in the grid changes its background color randomly upon mouseover, creating a dynamic visual effect.

## Functionality

### Grid Creation

The `createNewGrid()` function dynamically generates a grid within the specified container element. Each cell in the grid is a `<div>` element with a default white background color and a black border. The grid size is calculated based on the provided `grids` parameter.

### Mouseover Effect

Upon mouseover of a cell, the arrow function generates 3 random rgb values using `const r = Math.floor(Math.random() * 256)` and changes its background color to a randomly selected color from a predefined array (`['red', 'blue', 'green']`). This creates a dynamic visual effect as the user interacts with the grid.

### Darkening Effect

After changing the background color of a cell, I implemented a progressive darkening effect by giving them a default value for brightness of 100 ` div.dataset.brightness = 100`, so that with each interaction the divs would darken by 10%. The objective was to achieve a completely black square with only ten interactions. 

### User Interaction

The `createNewGrid()` function allows users to input a new number of grids (between 1 and 100) via a prompt dialog. If the input is valid, it removes the existing grid and creates a new grid with the specified number of grids.

The `reset()` function resets all the colored grids to its initial state by whitening all the preexisting divs and changing their brightness back to 100.
