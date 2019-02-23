var photosynthesiseSunlight,
    echolocation,
    nightVision,
    halveNeedForSleep,
    limbRegeneration,
    noWrinkles,
    moodDependantIrisColour,
    superhumanStrength,
    superhumanVision,
    superhumanColourVision,
    photographicMemory,
    increaseLucidDream,
    fastReactionTime;

var userName;

var svgDefault = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.14 317.75"><defs><style>.cls-1{fill:none;stroke:#3fa9f5;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:#3fa9f5;}</style></defs> <path id="side-face" class="user-skin-default" d="M48.64,315.53s30.8-16,12.8-67c-6.61-18.72-25.3-40-25.3-67.5v-52.5c0-58,47.47-105.5,105.5-105.5h0c42.47,0,76.42,33.62,99,81.5,8.27,17.54,27,34.56,27,56l-22,5,11,27L246.46,212l.68,27.51c0,16-8.74,27.83-66.77,27.83,0,0-4.08,35.17.53,44.5"></path><ellipse id="eye" class="user-eye-blue" cx="219.14" cy="131.53" rx="3.5" ry="7"></ellipse><line id="eyebrow-default" class="cls-1" x1="184.64" y1="108.53" x2="229.64" y2="108.53"></line><path id="hair-default" class="cls-2" d="M87.16,28.7C93.9,9.36,137.34-.64,148.89,0,136.44,8,138,8.08,138,8.08s43.79-9.73,81.65,20.62C237.1,42.7,249.1,76,249.1,76s-16.92-4.67-24.46-6c-2.43,12.82-26.87,24.33-40.2,33-4.8-13.76-12.5-17.5-12.5-17.5s-31,62.72-41,85c-2.67-15.91-12.44-50.42-12.44-50.42S67.77,107.93,69.77,152c.73,16.07,18.87,49.38,30.08,77.38C68,220.36,63.21,206.54,62,210.69c-5.36,18-12.16,31.82-16.21,37.84-12.63-29.17-26-75.17-26.67-90.12-7.33,12.12-11.33,12.12-11.33,12.12S3.33,84.44,33.14,68c-9.09-4-18.6-7.85-18.6-7.85S53.89,27.36,87.16,28.7Z"></path><g id="ear-1" class="cls-1"><path d="M114.64,134.53c-9.5-9.5-33-2-33,12s9,40,23,40c9,0,10-6,10-6"></path><path d="M103.64,152.53c-9.55-4.29-9,18,2,18,8,0,7-6,7-6"></path><path d="M88.64,144.53c5-5,17-8,21-3s-1,15-8,16"></path></g></svg>'

$(function () {
    
    $('.portrait-container').html(svgDefault);
    $("form").submit(function() { return false; });

    $('#moaf-logo').mouseenter(function () {
        TweenMax.staggerFromTo(".logo-text", 1.5, {
            scale: 0,
            opacity: 0,
            ease: Elastic.easeOut,
            force3D: true
        }, {
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    });
    $('#moaf-logo').mouseleave(function () {
        TweenMax.staggerTo(".logo-text", 1.5, {
            scale: 0,
            opacity: 0,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    });
    //    https://greensock.com/stagger


    /* ============================================================================================================== */
    /* ============================================================================================================== */
    /* ================================================ LANDING PAGE ================================================ */
    /* ============================================================================================================== */
    /* ============================================================================================================== */
    
    /* ======================================= Landing page drifting elements ======================================= */
    /* https://codepen.io/chuckrector/pen/bpLBKE */
    var cells = [
      'images/float-1.svg',
      'images/float-2.svg',
      'images/float-3.svg',
      'images/float-4.svg',
      'images/float-5.svg',
      'images/float-6.svg',
      'images/float-7.svg',
      'images/float-8.svg',
      'images/float-9.svg',
      'images/float-10.svg',
      'images/float-11.svg',
    ];

    var scatterCells = document.querySelector('.scatter-cells');
    cells.forEach(function (cell) {
        var cellContainerEl = document.createElement('div');
        cellContainerEl.classList.add('cell-container');

        var cellEl = document.createElement('img');
        cellContainerEl.appendChild(cellEl);

        cellEl.classList.add('cell');
        cellEl.src = cell;

        var deg = Math.random() * 360;
        if (Math.floor(Math.random() * 2) === 0) {
            deg *= -1;
        }

        var spin = Math.floor(Math.random() * 2);
        cellEl.setAttribute('data-spin', spin ? 'backward' : 'forward');

        var x = Math.random() * 100;
        var y = Math.random() * 100;
        var topRange = 25;
        var bottomRange = 15;
        var width = bottomRange + Math.round(Math.random() * (topRange - bottomRange));


        cellEl.style.width = width + 'px';
        cellContainerEl.style.transform = 'rotate(' + deg + 'deg) ';
        cellContainerEl.style.left = x + '%';
        cellContainerEl.style.top = y + '%';


        scatterCells.appendChild(cellContainerEl);
    });

    TweenMax.staggerFrom(".cell", 2, {
        scale: 0,
        opacity: 0,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);

    /* ======================================= Landing page wave effect ======================================= */

    TweenMax.to("#shape-1", 15, {
        rotation: 360,
        transformOrigin: "50% 50%",
        ease: Linear.easeNone,
        repeat: -1
    });
    TweenMax.to("#shape-2", 10, {
        delay: -1,
        rotation: -360,
        transformOrigin: "50% 50%",
        ease: Linear.easeNone,
        repeat: -1
    });

    /* ======================================= Landing page abilities display ======================================= */
    var abilitiesIcons = [
      'images/photosynthesise_sunlight.png',
      'images/superhuman_vision.png',
      'images/superhuman_strength.png',
      'images/superhuman_colour_vision.png',
      'images/photographic_memory.png',
      'images/no_wrinkles.png',
      'images/night_vision.png',
      'images/mood_dependant_iris_colour.png',
      'images/limb_regeneration.png',
      'images/halve_need_for_sleep.png',
      'images/fast_reaction_time.png',
      'images/echolocation.png'
    ];
    var abilitiesNames = [
      'Photosynthesise sunlight',
      'Have superhuman vision',
      'Have superhuman strength',
      'Have superhuman colour vision',
      'Have photographic memory',
      'Have no wrinkles',
      'Have night vision',
      'Have mood dependant iris colour',
      'Regenerate limbs',
      'Halve need for sleep',
      'Have fast reaction time',
      'Echolocate'
    ];
    var $abilityIcon = $('#ability-icon');
    var indexCount = 1;


    var iconTimer = setInterval(displayIcons, 1000);

    function displayIcons() {
        $abilityIcon.attr({
            'src': abilitiesIcons[indexCount],
            'title': abilitiesNames[indexCount]
        });
        indexCount < abilitiesIcons.length - 1 ? indexCount += 1 : indexCount = 0;
    }

    $abilityIcon.mouseenter(function () {
        clearInterval(iconTimer)
    });
    $abilityIcon.mouseout(function () {
        iconTimer = setInterval(displayIcons, 1000);
    });


    /* ======================================= Landing page scroll ======================================= */

    var controller = new ScrollMagic.Controller();

    var scrollScene = new ScrollMagic.Scene({
            triggerElement: "#trait-icon",
            duration: 300,
            triggerHook: 0.3,
            duration: '60%'
        })
        .setTween("#will-i", {
            x: '-50vw',
            opacity: '0'
        })
        //    .addIndicators({
        //        name: "start"
        //    })
        .addTo(controller);


    /* ======================================= Landing-quiz page scroll ======================================= */

    var scrollMy = new ScrollMagic.Scene({
            triggerElement: "#quiz-page",
            duration: 300,
            triggerHook: 1,
            duration: '60%'
        })
        .setTween("#my", {
            x: '-10vw',
            opacity: '0'
        })
        .addTo(controller);

    var scrollFuture = new ScrollMagic.Scene({
            triggerElement: "#quiz-page",
            duration: 300,
            triggerHook: 0.8,
            duration: '60%'
        })
        .setTween("#future", {
            x: '-10vw',
            opacity: '0'
        })
        .addTo(controller);

    var scrollGene = new ScrollMagic.Scene({
            triggerElement: "#quiz-page",
            duration: 300,
            triggerHook: 0.6,
            duration: '60%'
        })
        .setTween("#gene", {
            x: '-10vw',
            opacity: '0'
        })
        .addTo(controller);

    var scrollGeneLogo = new ScrollMagic.Scene({
            triggerElement: "#quiz-page",
            duration: 300,
            triggerHook: 0.6,
            duration: '60%'
        })
        .setTween("#my-future-gene-logo", {
            scale: '0',
            opacity: '0'
        })
        .addTo(controller);
    
    
    /* ============================================================================================================== */
    /* ============================================================================================================== */
    /* ================================================= QUIZ PAGE ================================================== */
    /* ============================================================================================================== */
    /* ============================================================================================================== */

    /* ======================================= Name form ======================================= */

    $('#quiz-name').css({
        'opacity': '1',
        'visibility': 'visible'
    });
    $('#submitName').on('click', function () {
        if ($('#name').val()) {
            userName = $('#name').val();
            console.log(userName);
            $('#result-name').text(userName);
            $('#quiz-name').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
            $('#quiz-avatar').css({
                'opacity': '1',
                'visibility': 'visible'
            });
        } else {
            $('#name').focus();
        }
    });
    $('#name').keyup(function(event){
        event.preventDefault();
          if (event.keyCode === 13) {
    // Trigger the button element with a click
     $('#submitName').click();
    }});


    /* ======================================= Avatar======================================= */

    $('#quiz-avatar .option-container').on('click', function () {
        $('#quiz-avatar').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-eye-colour').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    });

    /* ======================================= Eye colour======================================= */

    $('#quiz-eye-colour .option-container').on('click', function () {
        $('#quiz-eye-colour').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-skin-colour').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    });

    /* ======================================= Skin tone======================================= */

    $('#quiz-skin-colour .option-container').on('click', function () {
        $('#quiz-skin-colour').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-hair-colour').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    });

    /* ======================================= Hair colour ======================================= */

    $('#quiz-hair-colour .option-container').on('click', function () {
        $('#quiz-hair-colour').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-ear-shape').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    });

    /* ======================================= Ear shape ======================================= */

    $('#quiz-ear-shape .option-container').on('click', function () {
        $('#quiz-ear-shape').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-eyebrow-shape').css({
            'opacity': '1',
            'visibility': 'visible'
        });
    });

    /* ======================================= Eyebrow shape ======================================= */
    /* ======================================= Show results ======================================= */

    $('#quiz-eyebrow-shape .option-container').on('click', function () {
        $('#quiz-eyebrow-shape').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('#quiz-result').css({
            'visibility': 'visible'
        });
        $('.portrait-container svg').css({
            'left': '70%'
        })
    });

});

/* ======================================= Calculate scores ======================================= */

var eyeScore,
    skinScore,
    hairScore,
    earScore,
    eyebrowScore,
    finalScoreVal = {
        "photosynthesise_sunlight": 0,
        "echolocation": 0,
        "night_vision": 0,
        "halve_need_for_sleep": 0,
        "limb_regeneration": 0,
        "no_wrinkles": 0,
        "mood_dependant_iris_colour": 0,
        "superhuman_strength": 0,
        "superhuman_vision": 0,
        "superhuman_colour_vision": 0,
        "photographic_memory": 0,
        "increase_lucid_dream": 0,
        "fast_reaction_time": 0
    },
    keyTrait,
    displayNames = {
        "photosynthesise_sunlight": 'Photosynthesise Sunlight',
        "echolocation": 'Echolocation',
        "night_vision": 'Night vision',
        "halve_need_for_sleep": 'Halve need for sleep',
        "limb_regeneration": 'Limb Regeneration',
        "no_wrinkles": 'Ageless Skin',
        "mood_dependant_iris_colour": 'Mood-Colour Iris',
        "superhuman_strength": 'Super Strength',
        "superhuman_vision": 'Eagle Vision',
        "superhuman_colour_vision": 'Expanded Colour Vision',
        "photographic_memory": 'Photographic Memory',
        "increase_lucid_dream": 'Enhanced Lucid Dreaming',
        "fast_reaction_time": 'Fast Reaction Time'
    };

var userAvatar,
    userEye,
    userSkin,
    userHair,
    userEar,
    userEyebrow;


function calcScore(element) {
    var $item = $(element),
        $section = $item.parent();

    if ($section.data('property') == 'avatar') {
        userAvatar = $item.data('property');
        console.log(userAvatar);
    }
    if ($section.data('property') == 'eye_colour') {
        eyeScore = data[$section.data('property')][$item.data('property')];
        userEye = $item.data('property');
    }
    if ($section.data('property') == 'skin_colour') {
        skinScore = data[$section.data('property')][$item.data('property')];
        userSkin = $item.data('property');
    }
    if ($section.data('property') == 'hair_colour') {
        hairScore = data[$section.data('property')][$item.data('property')];
        userHair = $item.data('property');
    }
    if ($section.data('property') == 'ear_shape') {
        earScore = data[$section.data('property')][$item.data('property')];
        userEar = $item.data('property');
    }
    if ($section.data('property') == 'eyebrow_shape') {
        eyebrowScore = data[$section.data('property')][$item.data('property')];
        userEyebrow = $item.data('property');
        calcFinalScore();
    }

    updatePortrait();
};


function calcFinalScore() {
    var scoreArray = [eyeScore, skinScore, hairScore, earScore, eyebrowScore];
    for (var i = 0; i < scoreArray.length; i++) {
        for (var property in scoreArray[i]) {
            if (scoreArray[i].hasOwnProperty(property)) {
                finalScoreVal[property] += parseInt(scoreArray[i][property], 10);
            }
        }
    }
//    console.log(finalScoreVal);
    var keysSorted = Object.keys(finalScoreVal).sort(function (a, b) {
        return finalScoreVal[b] - finalScoreVal[a]
    })
    //    https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
    keyTrait = keysSorted[0];
    console.log(keyTrait);

    $('#result-trait-img').attr('src', 'images/' + keyTrait + '-blue.png');
    $('#result-trait-name').text(displayNames[keyTrait]);
    $('#quiz-result').css({'opacity': '1','visibility': 'visible'});
}

/* ======================================= Switch between questions ======================================= */

function getChildIndex(elem){
    var  i= 0;
    while((elem=elem.previousElementSibling)!=null) ++i;
    // getting the index of an element in the nodelist of its parent
    //^https://stackoverflow.com/questions/4649699/is-it-possible-to-get-elements-numerical-index-in-its-parent-node-without-loopi
    function elemToShow(){  // match the dot selected and the corresponding question
        var questionIndex = Math.abs(i - $('.quiz-questions').length) - 1;  // reverse the order
        var questionToShow = $('.quiz-questions')[questionIndex];
        return questionToShow;
    }
    return elemToShow();
}
    
    
$('.quiz-questions ol li').on('click', function(){
        $('.quiz-questions').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $(getChildIndex(this)).css({
            'opacity': '1',
            'visibility': 'visible'
        });
});
    

/* ======================================= Background music ======================================= */

var bgmusic = document.getElementById("bgmusic");
//^ beaware of using jQuery here https://stackoverflow.com/questions/23048153/audio-clip-paused-is-undefined-when-using-jquery

function togglePlay() {
    
    //  https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
    if (bgmusic.paused) {
        bgmusic.play();
        $('#bgmusic-icon g line').css({'animation':'initial', 'stroke-dasharray': '200'});
        $('#bgmusic-icon g line:nth-child(1)').css({'animation':'dash 8s linear forwards infinite', 'stroke-dasharray': '200'});
        $('#bgmusic-icon g line:nth-child(2)').css({'animation':'dash 8s  0.1s linear forwards infinite', 'stroke-dasharray': '200'});
        $('#bgmusic-icon g line:nth-child(3)').css({'animation':'dash 8s  0.2s linear forwards infinite', 'stroke-dasharray': '200'});
        $('#bgmusic-icon g line:nth-child(4)').css({'animation':'dash 8s  0.3s linear forwards infinite', 'stroke-dasharray': '200'});
        $('#bgmusic-icon g line:nth-child(5)').css({'animation':'dash 8s  0.4s linear forwards infinite', 'stroke-dasharray': '200'});
    } else {
        bgmusic.pause();
        $('#bgmusic-icon g line').css({'animation':'none', 'stroke-dasharray': '0'});
    }

};

/* ======================================= Corner icon colour ======================================= */

function toggleIconColour() {
    if ($('.corner-icon-stroke-style').css('stroke') == 'rgb(255, 255, 255)') {
//        alert('stroke col change to black');
        $('.corner-icon-stroke-style').css('stroke', '#000');
    } else {
//        alert('stroke col change to white');
        $('.corner-icon-stroke-style').css('stroke', '#fff');
    }
    
    if ($('.corner-icon-shape-style').css('fill') == 'rgb(255, 255, 255)') {
        $('.corner-icon-shape-style').css('fill', '#000');
//        alert('shape col change to black');
    } else {
        $('.corner-icon-shape-style').css('fill', '#fff');
//        alert('shape col change to white');
    }
}


/* ======================================= Update portrait ======================================= */

var
    userSkinSvg = 'user-skin-default',
    userEyeSvg = 'user-eye-blue',
    userHairColourSvg = 'cls-2',
    userEyebrowSvg = '<line id="eyebrow-default" class="cls-1" x1="184.64" y1="108.53" x2="229.64" y2="108.53"/>',
    userHairSvg = '<path id="hair-default" class="user-hair-blue" d="M87.16,28.7C93.9,9.36,137.34-.64,148.89,0,136.44,8,138,8.08,138,8.08s43.79-9.73,81.65,20.62C237.1,42.7,249.1,76,249.1,76s-16.92-4.67-24.46-6c-2.43,12.82-26.87,24.33-40.2,33-4.8-13.76-12.5-17.5-12.5-17.5s-31,62.72-41,85c-2.67-15.91-12.44-50.42-12.44-50.42S67.77,107.93,69.77,152c.73,16.07,18.87,49.38,30.08,77.38C68,220.36,63.21,206.54,62,210.69c-5.36,18-12.16,31.82-16.21,37.84-12.63-29.17-26-75.17-26.67-90.12-7.33,12.12-11.33,12.12-11.33,12.12S3.33,84.44,33.14,68c-9.09-4-18.6-7.85-18.6-7.85S53.89,27.36,87.16,28.7Z"/>',
    userSkinStrokeSvg = "cls-1",
    userEarSvg = '<g id="ear-1" class="' + userSkinStrokeSvg + '"><path d="M114.64,134.53c-9.5-9.5-33-2-33,12s9,40,23,40c9,0,10-6,10-6"/><path d="M103.64,152.53c-9.55-4.29-9,18,2,18,8,0,7-6,7-6"/><path  d="M88.64,144.53c5-5,17-8,21-3s-1,15-8,16"/></g>';


function updatePortrait() {
    //have to update hair value before avatar so that it immediately shows instead of waiting for the next round
    if (userHair != null) {
        userHairColourSvg = 'user-hair-' + userHair;
        userHairColourStrokeSvg = 'user-hair-stroke-' + userHair;
        userEyebrowSvg = '<line id="eyebrow-default" class="user-eyebrow-' + userHair + '" x1="184.64" y1="108.53" x2="229.64" y2="108.53"/>'
    }
    
    if (userAvatar == "default") {
        userHairSvg = '<path id="hair-default" class="' + userHairColourSvg + '" d="M87.16,28.7C93.9,9.36,137.34-.64,148.89,0,136.44,8,138,8.08,138,8.08s43.79-9.73,81.65,20.62C237.1,42.7,249.1,76,249.1,76s-16.92-4.67-24.46-6c-2.43,12.82-26.87,24.33-40.2,33-4.8-13.76-12.5-17.5-12.5-17.5s-31,62.72-41,85c-2.67-15.91-12.44-50.42-12.44-50.42S67.77,107.93,69.77,152c.73,16.07,18.87,49.38,30.08,77.38C68,220.36,63.21,206.54,62,210.69c-5.36,18-12.16,31.82-16.21,37.84-12.63-29.17-26-75.17-26.67-90.12-7.33,12.12-11.33,12.12-11.33,12.12S3.33,84.44,33.14,68c-9.09-4-18.6-7.85-18.6-7.85S53.89,27.36,87.16,28.7Z"/>';
    } else if (userAvatar == "male") {
        userHairSvg = '<path id="hair-male" class="' + userHairColourSvg + '" d="M141,17c73.5-3.67,73.62,26.5,98.42,18.5C227.94,47.53,218,58.11,204,56c-6.38,8.69-37.92,14.07-49.25,24.67C147.84,87.18,158.1,102,158.1,102l-20.66,28.25-8.7,31L115,117s-41,4-45.5,28.5c-4.47,24.34-15,103-15,103s-25.09-72.85-34.58-87.27C3.44,152-4.56,138.53,2.68,103,16.89,33.4,76.1,20.27,141,17Z"/>'
    } else if (userAvatar == "female") {
        userHairSvg = '<path id="hair-female" class="' + userHairColourSvg + '" d="M142.14,17c83,0,100.29,48.32,105.66,73.93-42,0-91.16,13.07-91.16,13.07v89.5l-34-18-5.85-52.65s-38.35.87-42.85,25.37C69.47,172.59,78.79,184,90.16,210c12.47,28.5,32.78,48.5,32.78,48.5l-74.3,7S4.14,215,4.14,134,77.14,17,142.14,17Z"/>';
    };
    
    if (userSkin != null) {
        userSkinSvg = 'user-skin-' + userSkin.replace("_", "-");
        if (userSkin == "very_fair"||"fair"||"olive"){ //change the stroke colour of ear depending on what skin colour they have  
          userSkinStrokeSvg = "user-skin-stroke-light";  
        } else if (userSkin == "brown"||"black"){
            userSkinStrokeSvg = "user-skin-stroke-light";  
        }
        userEarSvg = '<g id="ear-1" class="' + userSkinStrokeSvg + '"><path d="M114.64,134.53c-9.5-9.5-33-2-33,12s9,40,23,40c9,0,10-6,10-6"/><path d="M103.64,152.53c-9.55-4.29-9,18,2,18,8,0,7-6,7-6"/><path  d="M88.64,144.53c5-5,17-8,21-3s-1,15-8,16"/></g>';
    }


    if (userEye != null) {
        userEyeSvg = 'user-eye-' + userEye.replace("_", "-");
    }
    
    if (userEar == "ear_1") {
      userEarSvg = '<g id="ear-1" class="' + userSkinStrokeSvg + '"><path d="M114.64,134.53c-9.5-9.5-33-2-33,12s9,40,23,40c9,0,10-6,10-6"/><path d="M103.64,152.53c-9.55-4.29-9,18,2,18,8,0,7-6,7-6"/><path d="M88.64,144.53c5-5,17-8,21-3s-1,15-8,16"/></g>';
    } else if (userEar == "ear_2") {
        userEarSvg = '<g id="ear-2" class="' + userSkinStrokeSvg + '"><path d="M114.7,135.57C93.38,122.43,77.87,143,77.87,156.36c0,6.68,7,12.88,12.12,18.42s8.48,10.43,15.16,10.43c8.59,0,9.55-5.73,9.55-5.73"/><path d="M104.2,152.75c-9.12-4.1-8.59,17.18,1.91,17.18,7.63,0,6.68-5.72,6.68-5.72"/><path d="M102.29,157.53c6.68-1,11.45-10.5,7.64-15.28s-15.38-2-20.05,2.87-7.17,7.85-4.26,12.21"/></g>';
    } else if (userEar == "ear_3") {
        userEarSvg = '<g id="ear-3" class="' + userSkinStrokeSvg + '"><path d="M108.59,138.34c-3.79-3.79-6.16-8.59-12.11-8.79-15-.48-12.6,10.64-12.6,18.43,0,6.68,1,23.66,4.36,28.11S92.36,188,99.05,188c8.59,0,9.54-5.73,9.54-5.73"/><path d="M98.09,155.52c-9.12-4.1-8.33,14.87,1.91,17.18,8.6,1.94,10.54-4.36,10.54-4.36"/><path d="M90.18,138.76c4.77-4.77,9.76,1.53,13.58,6.31s-.9,14.27-7.58,15.22"/></g>';
    } else if (userEar == "ear_4") {
        userEarSvg = '<g id="ear-4" class="' + userSkinStrokeSvg + '"><path d="M114.64,136.62c-4.53-4.53-10.22-10.62-17-8.29-3,1-7.75,5.66-11.15,8.24-4.19,3.17-10.18,6.49-10.18,10.18,0,10,5.07,16.26,15,24.24,3.32,2.66,4.09,14.5,7.27,15.51,9.21,2.91,16-6,16-6"/><path d="M104.14,153.8C95,149.71,95.55,171,106.05,171c7.63,0,6.68-5.73,6.68-5.73"/><path d="M102.23,158.58c6.68-1,9.45-14.82,5.63-19.59s-15.1-1.38-19.87,3.39-6.3,6.79-3.88,10.67"/></g>';
    } else if (userEar == "ear_5") {
        userEarSvg = '<g id="ear-5" class="' + userSkinStrokeSvg + '"><path d="M111.41,136.65c-9.06-9.06-31.5-1.91-31.5,11.46,0,6-1.22,15,1.94,22.42,3.83,8.93,15.47,16,22.79,16,8.59,0,8.24-10.18,8.24-10.18"/><path d="M101.82,152.48c-8.17-3.67-7.7,15.39,1.71,15.39,6.83,0,6-5.13,6-5.13"/><path d="M89,145.64c4.27-4.27,14.53-6.84,17.94-2.56s-.85,12.82-6.83,13.67"/></g>';
    };
    
    if (userEyebrow == "no_eyebrow") {
        userEyebrowSvg = '<g class="' + userHairColourSvg +'" id="eyebrow-none"><circle cx="197.78" cy="113.03" r="1.5"/><circle cx="207.96" cy="109.11" r="1.5"/><circle cx="220.33" cy="109.11" r="1.5"/><circle cx="230.77" cy="112.93" r="1.5"/></g>';
    } else if (userEyebrow == "straight") {
        userEyebrowSvg = '<path id="eyebrow-straight" class="' + userHairColourStrokeSvg + '" d="M189.12,110.83c7.51-3.47,30.1-2.63,42.77,0"/>';
    } else if (userEyebrow == "rounded") {
        userEyebrowSvg = '<path id="eyebrow-rounded" class="' + userHairColourStrokeSvg + '" d="M187.6,113.14c6.15-5,11.41-8.34,21.92-9.13,11.12-.83,16.48,3.23,23.15,7.36"/>';
    } else if (userEyebrow == "angled_arch") {
        userEyebrowSvg = '<polyline id="eyebrow-angled" class="' + userHairColourStrokeSvg + '" points="187.14 112.22 202.01 103.7 234.54 113.37"/>';
    } else if (userEyebrow == "s_shape") {
        userEyebrowSvg = '<path id="eyebrow-s" class="' + userHairColourStrokeSvg + '" d="M182.89,112.67s8.47-9,16.57-8.47,12.33,10.21,27.93,8.47"/>';
    };

    
    var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.14 317.75"><defs><style>.cls-1{fill:none;stroke:#3fa9f5;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:#3fa9f5;}</style></defs> <path id="side-face" class="' + userSkinSvg + '"d="M48.64,315.53s30.8-16,12.8-67c-6.61-18.72-25.3-40-25.3-67.5v-52.5c0-58,47.47-105.5,105.5-105.5h0c42.47,0,76.42,33.62,99,81.5,8.27,17.54,27,34.56,27,56l-22,5,11,27L246.46,212l.68,27.51c0,16-8.74,27.83-66.77,27.83,0,0-4.08,35.17.53,44.5"/><ellipse id="eye" class="' + userEyeSvg + '" cx="219.14" cy="131.53" rx="3.5" ry="7"/>' + userEyebrowSvg + userHairSvg + userEarSvg;

//    alert("updatePortrait");
    console.log(svgHtml);
    $('.portrait-container').html(svgHtml);
}

/* ======================================= Redo quiz ======================================= */
function redoQuiz(){
    // reset all values
    eyeScore,
    skinScore,
    hairScore,
    earScore,
    eyebrowScore,
    finalScoreVal = {
        "photosynthesise_sunlight": 0,
        "echolocation": 0,
        "night_vision": 0,
        "halve_need_for_sleep": 0,
        "limb_regeneration": 0,
        "no_wrinkles": 0,
        "mood_dependant_iris_colour": 0,
        "superhuman_strength": 0,
        "superhuman_vision": 0,
        "superhuman_colour_vision": 0,
        "photographic_memory": 0,
        "increase_lucid_dream": 0,
        "fast_reaction_time": 0
    };
    
    userSkinSvg = 'user-skin-default';
    userEyeSvg = 'user-eye-blue';
    userHairColourSvg = 'cls-2';
    userEyebrowSvg = '<line id="eyebrow-default" class="cls-1" x1="184.64" y1="108.53" x2="229.64" y2="108.53"/>',
    userHairSvg = '<path id="hair-default" class="user-hair-blue" d="M87.16,28.7C93.9,9.36,137.34-.64,148.89,0,136.44,8,138,8.08,138,8.08s43.79-9.73,81.65,20.62C237.1,42.7,249.1,76,249.1,76s-16.92-4.67-24.46-6c-2.43,12.82-26.87,24.33-40.2,33-4.8-13.76-12.5-17.5-12.5-17.5s-31,62.72-41,85c-2.67-15.91-12.44-50.42-12.44-50.42S67.77,107.93,69.77,152c.73,16.07,18.87,49.38,30.08,77.38C68,220.36,63.21,206.54,62,210.69c-5.36,18-12.16,31.82-16.21,37.84-12.63-29.17-26-75.17-26.67-90.12-7.33,12.12-11.33,12.12-11.33,12.12S3.33,84.44,33.14,68c-9.09-4-18.6-7.85-18.6-7.85S53.89,27.36,87.16,28.7Z"/>',
    userSkinStrokeSvg = "cls-1";
    userEarSvg = '<g id="ear-1" class="' + userSkinStrokeSvg + '"><path d="M114.64,134.53c-9.5-9.5-33-2-33,12s9,40,23,40c9,0,10-6,10-6"/><path d="M103.64,152.53c-9.55-4.29-9,18,2,18,8,0,7-6,7-6"/><path  d="M88.64,144.53c5-5,17-8,21-3s-1,15-8,16"/></g>';
    
    userAvatar = userEye = userSkin = userHair = userEar = userEyebrow = undefined;
    
    // hide the result section and show the initial question
    $('#quiz-result').css({'opacity': '0','visibility': 'hidden'});
    updatePortrait();
    $('#quiz-name').css({'opacity': '1','visibility': 'visible'});
}


/* ============================================================================================================== */
/* ============================================================================================================== */
/* =============================================== RESEARCH PAGE =============================================== */
/* ============================================================================================================== */
/* ============================================================================================================== */

/* ======================================= Research page switch tab ======================================= */

function tab1(element){
    $('.research-tab').not($(element)).removeClass('tabOnFocus');
    $(element).addClass('tabOnFocus');
    $('#signup1,#signupHeading1').css('display', 'block');
    $('#signup2,#signupHeading2').css('display', 'none');
    $('#signup3,#signupHeading3').css('display', 'none');
}
function tab2(element){
    $('.research-tab').not($(element)).removeClass('tabOnFocus');
    $(element).addClass('tabOnFocus');
    $('#signup2,#signupHeading2').css('display', 'block');
    $('#signup1,#signupHeading1').css('display', 'none');
    $('#signup3,#signupHeading3').css('display', 'none');
}
function tab3(element){
    $('.research-tab').not($(element)).removeClass('tabOnFocus');
    $(element).addClass('tabOnFocus');
    $('#signup3,#signupHeading3').css('display', 'block');
    $('#signup2,#signupHeading2').css('display', 'none');
    $('#signup1,#signupHeading1').css('display', 'none');
}

/* ============================================================================================================== */
/* ============================================================================================================== */
/* ============================================== MORE EXHIB PAGE ============================================== */
/* ============================================================================================================== */
/* ============================================================================================================== */

/* ======================================= Museums page hover ======================================= */

function musMouseOver(element) {
    $('#balckOverlay').css('opacity','0.5');
    $('#museums-page > h2, #museums-page > h3').css('opacity','0.3');
    $('.mus').not($(element)).css('filter', 'grayscale(100%) brightness(50%)');
}
function musMouseOut(element) {
    $('#balckOverlay').css('opacity','0');
    $('#museums-page > h2, #museums-page > h3').css('opacity','1');
    $('.mus').not($(element)).css('filter', 'grayscale(0%) brightness(100%)');
}

/* ======================================= Scroll jacking ======================================= */

//var scrollOffset = 0;
//
//
//function setScrollOffset( thisHash, targetHash ) {
//    var scrollPosition = $( thisHash ).scrollTop || document.body.scrollTop;
//    var scrollDistance = Math.round( scrollOffset - scrollPosition );
//    
////    click.preventDefault();
//    document.body.scrollTop = $( targetHash ).offset().top;
//    
//    
////    if( scrollDistance > 0 ) {
////        scrollPosition += Math.ceil( scrollDistance / 10 );
////    } else if (scrollDistance < 0) {
////        scrollPosition += Math.floor( scrollDistance / 10 );
////    }
//    
//    console.log($( targetHash ).offsetTop);
//    
////    document.documentElement.scrollTop = scrollPosition;
////    document.body.scrollTop = scrollPosition;
//}