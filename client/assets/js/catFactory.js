
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthAndBelly(color,code) {
    $('.cat__mouth-contour, .cat__tail, .cat__chest_inner').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.cat__eye').find('span').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earsAndPaw(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw--left, .cat__paw--right, .cat__paw-left-inner, .cat__paw-right-inner').css('background', '#' + color)  //This changes the color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Look Up')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('')/////////
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('')/////////
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('')/////////
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Wonder Up')
            eyesType6()
            break
        case 8:
            normalEyes()
            $('#eyeName').html('Circle')
            eyesType7()
            break
        default:
            console.log("Should be between 1 and 8")
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            $('#decorationName').html('Inverted')
            decorationType1()
            break
        case 3:
            $('#decorationName').html('Twisted')
            decorationType2()
            break
        case 4:
            $('#decorationName').html('Uniform')
            decorationType3()
            break
        case 5:
            $('#decorationName').html('Uniform Twist')
            decorationType4()
            break
        case 6:
            $('#decorationName').html('Tribal')
            decorationType5()
            break
        case 7:
            $('#decorationName').html('Propeller')
            decorationType6()
            break
        case 8:
            $('#decorationName').html('Single')
            decorationType7()
            break
        
    }
}

function animationVariation(num){
    $('#dnaanimation').html(num);
    switch (num){
        case 1:
            animationType1();
            break;
        case 2:
            animationType2();
            break;
    }
}

function animationType1(){
    requestAnimationFrame();
    $('#head').addClass('movingHead');
}

function animationType2(){
    requestAnimationFrame();
    // Add new animation......
    $('#head').addClass('movingHead');
}

function resetAnimation(){
    $('#head').removeClass('movingHead');
    ////////////////// Add new remove animation.......
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css({'border-top': '15px solid', 'border-bottom': '15px solid'})
}

async function eyesType4() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')//////
}

async function eyesType5() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')//////
}

async function eyesType6() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')//////
}

async function eyesType7() {
    await $('.cat__eye').find('span').css('border', '15px solid')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType1() {
    normaldecoration()
    $('.cat__head-dots').css("transform", "rotate(180deg)")
    $('.cat__head-dots_first').css("transform", "rotate(0deg)")
    $('.cat__head-dots_second').css("transform", "rotate(0deg)")
}

async function decorationType5() {
    normaldecoration()
    $('.cat__head-dots').css({"transform": "rotate(180deg)", "height":"50px", "border-right":""})
    $('.cat__head-dots_first').css({"transform":"rotate(35deg)", "height":"40px"})////
    $('.cat__head-dots_second').css({"transform":"rotate(-35deg)", "height":"40px"})
}

async function decorationType6() {
    normaldecoration()
    $('.cat__head-dots').css({"transform": "rotate(180deg)", "height":"50px", "border-right":""})
    $('.cat__head-dots_first').css({"transform":"rotate(135deg)", "height":"45px"})////
    $('.cat__head-dots_second').css({"transform":"rotate(-135deg)", "height":"45px"})
}

async function decorationType7() {
    normaldecoration()
    var dots2 = $('.cat__head-dots_first')
    var dots3 = $('.cat__head-dots_second')
    dots2.css("height", "0px")
    dots3.css("height", "0px")
}
