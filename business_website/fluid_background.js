

window.onload = () =>{

    getGradient = () => {
    // get the image
    // let sourceImage = document.querySelector("img");
    let sourceImage = document.querySelector("header").background;
    console.log
    // get the background element
    let background = document.querySelector(".background");
    // initialize colorThief
    let colorThief = new ColorThief();
    // get the dominant color 
    const color = colorThief.getColor(sourceImage);
    // Get the brightest color 
    const brightestColor = getBrightestPaletteColor(colorThief.getPalette(sourceImage));
    // set the background color
    background.style.setProperty('background', 'linear-gradient(70deg, ' + 'rgb(' + brightestColor + ')'+ ',' + 'rgb(' + color + ')'+ ')', 'important');
    }
    getGradient();
}


function getBrightestPaletteColor(arrays) {
    // due to how rgb works; the higher the values the brighter the color, 
    // so the color with the highest sum is the brightest.


    // Calculate the sum for each nested array
    const sums = arrays.map(innerArray => innerArray.reduce((acc, value) => acc + value, 0));

    // Create an array of indices [0, 1, 2, ...] to preserve the original order
    const indices = Array.from({ length: arrays.length }, (_, i) => i);

    // Sort the indices based on the corresponding sums
    indices.sort((a, b) => sums[b] - sums[a]);

    // Use the index of the highest sum to get the corresponding array
    return arrays[indices[0]];
}