# videojs-errors

A video.js plugin to display errors compatible with versions 4.x and 5.x

## Installation
[Node.js](https://nodejs.org)
```bash
[sudo] npm install
```

## Starting

Compile files
```bash
gulp dist
```

Watch files
```bash
gulp watch
```

View example
```bash
npm start
```

## Using
```js
var player = videojs('my-video');

// add error
player.errors().add('Ops...');

// remove error
player.errors().remove();

// get error
var error = player.errors().get();
```

## License

[Licence](https://github.com/danielrohers/videojs-errors/blob/master/LICENSE) © Daniel Röhers Moura
