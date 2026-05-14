const { Vibrant } = require('node-vibrant/node');

Vibrant.from('./public/images/logo.png').getPalette().then((palette) => {
  console.log("Vibrant:", palette.Vibrant?.hex);
  console.log("Muted:", palette.Muted?.hex);
  console.log("DarkVibrant:", palette.DarkVibrant?.hex);
  console.log("DarkMuted:", palette.DarkMuted?.hex);
  console.log("LightVibrant:", palette.LightVibrant?.hex);
  console.log("LightMuted:", palette.LightMuted?.hex);
}).catch(console.error);
