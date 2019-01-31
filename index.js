const log = console.log;
const app = new PIXI.Application();
document.body.appendChild(app.view);

const buttonsHolder = new PIXI.Container();
buttonsHolder.scale.set(0.5);
app.stage.addChild(buttonsHolder);

// buttonsHolder
const makeImageButton = (image, audioMP3, audioOGG, x=0, y=0, scale=1) =>
{
    const button = PIXI.Sprite.fromImage(image);
    const sound = new Howl({
      src: [audioMP3, audioOGG]
    });
    button.sound = sound;
    button.interactive = true;
    button.on('pointerdown', event => sound.play());
    // app.stage.addChild(button);
    buttonsHolder.addChild(button);
    button.x = x;
    button.y = y;
    button.scale.set(scale);
    return button;
};

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-g.wav',
  'sounds/piano/piano-g.wav',
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-a.wav',
  'sounds/piano/piano-a.wav',
  300,
  0
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-bb.wav',
  'sounds/piano/piano-bb.wav',
  600,
  0
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-b.wav',
  'sounds/piano/piano-b.wav',
  900,
  0
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-cc.wav',
  'sounds/piano/piano-cc.wav',
  1200,
  0
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-c.wav',
  'sounds/piano/piano-c.wav',
  0,
  250
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-d.wav',
  'sounds/piano/piano-d.wav',
  300,
  250
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-eb.wav',
  'sounds/piano/piano-eb.wav',
  600,
  250
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-e.wav',
  'sounds/piano/piano-e.wav',
  900,
  250
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-ff.wav',
  'sounds/piano/piano-ff.wav',
  1200,
  250
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-f.wav',
  'sounds/piano/piano-f.wav',
  0,
  500
)

makeImageButton(
  'images/git-er-done.jpg',
  'sounds/piano/piano-gg.wav',
  'sounds/piano/piano-gg.wav',
  300,
  500
)
