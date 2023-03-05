// 2 crystal balls 
// 2 balls fall from the same building at a certain point during falling they both smash
// find the point where they both smash in the most optimised way.

// true = smashed , false = not
function crystalBalls(smashed: boolean[]) {

    // need to first find where the first ball smashes
    // can jump up the array by the square root to imporove Ologn

    let increment = Math.floor(Math.sqrt(smashed.length))
    let i = increment;
    for (; i < smashed.length; i+= increment) {
        if (smashed[i]) {
            break;
        }
    }

    i -= increment;

    // we then walk forward at most sqrt of n to find where it breaks
    
    for (let j = 0; j < increment && i < smashed.length; ++j, ++i) {
        if (smashed[i]) {
            return i
        }
    }

    return -1
}