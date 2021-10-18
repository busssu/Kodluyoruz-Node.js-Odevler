const arguments = process.argv.slice(2);

function cirlceArea(radius){
    area = Math.PI * radius * radius;
    fixedArea = area.toFixed(2);

    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${fixedArea}`);
}

cirlceArea(arguments[0]*1);