
# Important files

* `make-player.sh`
* `play-music-player.command`

## Create Local Production Version

```
cd /Users/jv/Desktop/MyDevelopment/github/projects/music-player
./make-player.sh
```

which builds the system in `/Users/jv/tmp/music-player`

and copies the production system to `/Users/jv/Desktop/OtherTools/music-player`

## Use Mac Automator to create Music-Player.app

* Open Finder
* Applications
* Automator (or Automator.app)
	- Application
	- Choose (button)
	- Run Shell Script (middle pane, big list of options)
		- Shell: /bin/bash
		- Pass input: as arguments

Enter the following

```
/Users/jv/Desktop/MyDevelopment/github/projects/music-player/play-music-player.command
```

* File, Save:
	- Save as: Music-Player
	- Where: Applications

saves Music-Player.app in Applications as `/Applications/Music-Player.app`

Note that `Music-Player.app` is the server part of the application.

## Run MyTunes

* Execute `Music-Player.app` to start the server.

To run the client

* `http://localhost:9000` or
* select MyTunes from the new tab

# Other

## Material-UI 4.0 Typgraphy

https://material-ui.com/system/typography/



## Node memory

```
node --max-old-space-size=1024 index.js #increase to 1gb
node --max-old-space-size=2048 index.js #increase to 2gb
node --max-old-space-size=3072 index.js #increase to 3gb
node --max-old-space-size=4096 index.js #increase to 4gb
node --max-old-space-size=5120 index.js #increase to 5gb
node --max-old-space-size=6144 index.js #increase to 6gb
node --max-old-space-size=7168 index.js #increase to 7gb
node --max-old-space-size=8192 index.js #increase to 8gb
```

Using the environment

```
NODE_OPTIONS="--max-old-space-size=4096"
```

## Audio

```
<AudioBox>
	<audio
		controls
		ref={audio => {
			this.audioElement = audio;
		}}
	>
		<track kind="captions" />
		<source src="" type="audio/mpeg" />
		Your browser does not support the audio element.
	</audio>
</AudioBox>
```

Note `controls`. Remove this and the audio player will be invisible.


## Html audio properties

* https://www.w3schools.com/tags/ref_av_dom.asp
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

## Symbolic Link

This works.

```
ln -s file link

cd /Users/jv/Desktop/MyDevelopment/github/repo-react/music-player/src/music
ln -s /Users/jv/tmp/jv.mp3 music.mp3
```

## React players

* https://dev.to/ma5ly/lets-make-a-little-audio-player-in-react-p4p

* [react-sound](https://github.com/leoasis/react-sound)

* https://codesandbox.io/s/4jn966p950

* https://www.fullstackreact.com/react-daily-ui/009-music-player/

* https://github.com/lijinke666/react-music-player

See react-electron/music-players

players:

* https://reactjsexample.com/maybe-the-best-beautiful-html5-responsive-player-component-for-react/




