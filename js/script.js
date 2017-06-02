// JavaScript Document
window.onload = function(){
  console.log('Junior developer test.');

  // declare your variables here.
  var background;
  var products;
  var skyLogo;
  var fr1Txt1;
  var fr1Txt2;
  var fr2Txt1;
  var fr2Txt2;
  var stamp;
  var button;
  var fr3Txt1;
  var fr3Txt2;
  var fr3Txt3;
  var fr3Txt4;

  // store a reference to the canvas which we will draw on.
  var stage = new createjs.Stage('stage');

  // register the stage to handle mouse events.
  stage.enableMouseOver(10);

  // register the Ticker to listen for the tick event.
  createjs.Ticker.addEventListener('tick', handleTick, false);

  // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
  function handleTick(event) {
    stage.update();
  }

  // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);

  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);

  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
    {id: 'background', src: 'images1/background.png'},
    {id: 'products', src: 'images1/products.png'},
    {id: 'logo', src: 'images1/sky_logo.png'},
    {id: 'frame1text1', src: 'images1/fr1txt1.png'},
    {id: 'frame1text2', src: 'images1/fr1txt2.png'},
    {id: 'frame2text1', src: 'images1/fr2txt1.png'},
    {id: 'frame2text2', src: 'images1/fr2txt2.png'},
    {id: 'stamp', src: 'images1/stamp.png'},
    {id: 'button', src: 'images1/button.png'},
    {id: 'frame3text1', src: 'images1/fr3txt1.png'},
    {id: 'frame3text2', src: 'images1/fr3txt2.png'},
    {id: 'frame3text3', src: 'images1/fr3txt3.png'},
    {id: 'frame3text4', src: 'images1/fr3txt4.png'}
  ]);

  function handleAllImagesLoaded() {
    console.log('All the images have loaded.');
    drawTheBannerBackground();
    addSkyLogo();
  }

  function drawTheBannerBackground() {
    console.log('draw and animate the background.');

    // provide the loader result for the item with id == 'background'
    // as a bitmap which will be stored in our background variable.
    background = new createjs.Bitmap( loader.getResult( 'background' ) );

    // set the background bitmap alpha to zero.
    background.alpha = 0;

    // add background to the display list.
    stage.addChild( background );

    // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
    createjs.Tween.get( background ).to( {alpha: 1}, 1000 );

    // after the background is drawn on the canvas draw and animate the content for frame 1.
    setTimeout(frame1, 100);
  }

  function addSkyLogo() {
    //console.log('skyLogo');
    skyLogo = new createjs.Bitmap( loader.getResult( 'logo' ));
    skyLogo.x = 20;
    skyLogo.y = 205;
    stage.addChild(skyLogo);
    stage.update();
  }

  function frame1() {
    console.log('draw and animate frame one.');
    // refer to the creative brief, frame 1 for guidance.
    products = new createjs.Bitmap( loader.getResult( 'products' ));
    products.x = 55;
    products.y = 115;
    stage.addChild(products);
    createjs.Tween.get(products)
    .wait(4000)
    .to({alpha: 0},1000);

    fr1Txt1 = new createjs.Bitmap( loader.getResult( 'frame1text1' ));
    fr1Txt1.x = 50;
    fr1Txt1.y = 20;
    fr1Txt1.alpha = 0;
    stage.addChild(fr1Txt1);
    createjs.Tween.get(fr1Txt1)
    .to({alpha: 1},1000)
    .wait(3000)
    .to({alpha: 0},1000);

    fr1Txt2 = new createjs.Bitmap( loader.getResult( 'frame1text2' ));
    fr1Txt2.x = 50;
    fr1Txt2.y = 45;
    fr1Txt2.alpha = 0;
    stage.addChild(fr1Txt2);
    createjs.Tween.get(fr1Txt2)
    .wait(1000)
    .to({alpha: 1}, 1000)
    .wait(2000)
    .to({alpha: 0},1000);

    // createjs.Ticker.setFPS(60);
    // createjs.Ticker.addEventListener("tick", stage);

    // after a timeout and the animations have completed, draw frame 2.
    setTimeout(frame2, 5000);
  }

  function frame2() {
    console.log('draw and animate frame two.');

    // refer to the creative brief, frame 2 for guidance.
    fr2Txt1 = new createjs.Bitmap( loader.getResult( 'frame2text1' ));
    fr2Txt1.x = 40;
    fr2Txt1.y = 30;
    fr2Txt1.alpha = 0;
    stage.addChild(fr2Txt1);
    createjs.Tween.get(fr2Txt1)
    .to({alpha: 1},1000)
    .wait(2700)
    .to({alpha: 0},1000);

    fr2Txt2 = new createjs.Bitmap( loader.getResult( 'frame2text2' ));
    fr2Txt2.x = 120;
    fr2Txt2.y = 218;
    fr2Txt2.alpha = 0;
    stage.addChild(fr2Txt2);
    createjs.Tween.get(fr2Txt2)
    .wait(1000)
    .to({alpha: 1},1000)
    .wait(1700)
    .to({alpha: 0},1000);

    stamp = new createjs.Bitmap( loader.getResult( 'stamp' ));
    stamp.x = 65;
    stamp.y = -140;
    stage.addChild(stamp);
    createjs.Tween.get(stamp)
    .wait(1000)
    .to({y: 65}, 300, createjs.Ease.getPowInOut(4))
    .to({y: 25}, 200, createjs.Ease.getPowInOut(2))
    .to({y: 65}, 200, createjs.Ease.getPowInOut(2))
    .to({y: 45}, 200, createjs.Ease.getPowInOut(2))
    .to({y: 65}, 200, createjs.Ease.getPowInOut(2))
    .to({y: 55}, 150, createjs.Ease.getPowInOut(2))
    .to({y: 65}, 150, createjs.Ease.getPowInOut(2))
    .to({y: 60}, 150, createjs.Ease.getPowInOut(2))
    .to({y: 65}, 150, createjs.Ease.getPowInOut(2))
    .wait(1000)
    .to({alpha: 0},1000);

    // after a timeout and the animations have completed, draw frame 3.
    setTimeout(frame3, 5000);
  }

  function frame3() {
    console.log('draw and animate frame three.');

    // refer to the creative brief, frame 3 for guidance.
    button = new createjs.Bitmap( loader.getResult( 'button' ));
    button.x = 140;
    button.y = 195;
    stage.addChild(button);
    stage.update();

    fr3Txt1 = new createjs.Bitmap( loader.getResult( 'frame3text1' ));
    fr3Txt1.x = 10;
    fr3Txt1.y = 30;
    fr3Txt1.alpha = 0;
    stage.addChild(fr3Txt1);
    createjs.Tween.get(fr3Txt1)
    .wait(500)
    .to({alpha: 1},1000)

    fr3Txt2 = new createjs.Bitmap( loader.getResult( 'frame3text2' ));
    fr3Txt2.x = 35;
    fr3Txt2.y = 87;
    fr3Txt2.alpha = 0;
    stage.addChild(fr3Txt2);
    createjs.Tween.get(fr3Txt2)
    .wait(1500)
    .to({alpha: 1},1000)

    fr3Txt3 = new createjs.Bitmap( loader.getResult( 'frame3text3' ));
    fr3Txt3.x = 70;
    fr3Txt3.y = 140;
    fr3Txt3.alpha = 0;
    stage.addChild(fr3Txt3);
    createjs.Tween.get(fr3Txt3)
    .wait(2500)
    .to({alpha: 1},1000)

    fr3Txt4 = new createjs.Bitmap( loader.getResult( 'frame3text4' ));
    fr3Txt4.x = 80;
    fr3Txt4.y = 180;
    fr3Txt4.alpha = 0;
    stage.addChild(fr3Txt4);
    createjs.Tween.get(fr3Txt4)
    .wait(3500)
    .to({alpha: 1},1000)

// add sheen to button - could be done using a filter possibly...



  }
  // setTimeout(10000, console.log('finito'));

};
