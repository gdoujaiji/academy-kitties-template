var colors = Object.values(allColors())

function headColor(code, id){
    var color = colors[code]
    $('#head' + id + ', #chest' + id).css('background', '#' + color)
}

function mouthAndBelly(code, id){
    var color = colors[code]
    $('#mouth-contour' + id + ', #tail' + id + ', #chest_inner' + id).css('background', '#' + color)
}

function eyeColor(code, id){
    var color = colors[code]
    $('#catEye' + id).find('span').css('background', '#' + color)
}

function earsAndPaw(code, id){
    var color = colors[code]
    //$('#leftEar' + id + ', #rightEar' + id + ', #paw' + id).css('background', '#' + color)
}

