import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const options = {
    //audio lists model
    audioLists: [
        // {
        //     name: "后来的我们",
        //     singer: "五月天",
        //     cover: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=1cb4a5bc00f3d7ca18fb37249376d56c/b3119313b07eca80e1aedb659d2397dda044838d.jpg",
        //     musicSrc: "http://www.ytmp3.cn/down/49444.mp3"
        // },
        // {
        //     name: "往后余生",
        //     singer: "王良",
        //     cover: 'https://m10.music.126.net/20180811031914/1ba45c0574e9e7eb52970aa0d89c1e87/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3',
        //     musicSrc: "http://www.ytmp3.cn/down/50539.mp3"
        // },
        {
            name: "Lemon",
            singer: "よねづ けんし",
            cover: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=0fd61bdbfc1f3a295ac8d2c8a11edb0c/e824b899a9014c08ed8492a0067b02087bf4f47c.jpg",
            musicSrc: "http://m10.music.126.net/20190323195132/10faa220f5a497be63846542d6a5682c/ymusic/6eed/4ef2/d8ae/b85b958a70552f7e002e33d35075086c.mp3"
        },
        {
            name: "小さな恋のうた",
            singer: "Koda Kumi",
            cover: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1598803801,1033614357&fm=58&bpow=500&bpoh=500",
            musicSrc: "http://dl.stream.qqmusic.qq.com/C400001VCvMr3xQP5s.m4a?vkey=FE47646533C49938710E2BCE79D5EDDEEA53AB1778899837963518D34654DA8F86E0A821093D0F066C9C92DD65F11D5CCB0D3631DAFE1245&guid=679379360&fromtag=66"
        },
        {
            name: "Wherever you are",
            singer: "ONE OK ROCK",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnXHc3ETErnUD03g0NdO-GwUCYeD0PPlBA9_i7uFrwmMyMJqV",
            musicSrc: "http://m10.music.126.net/20190323195301/ba914ebce09b07c366023005abd16216/ymusic/d11d/d442/a123/8e92e9a5719ce6b6cd5993fe91e4aaf6.mp3"
        },
    ],

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        bottom: 20,
        left: 20
    },

    // play mode text config of the audio player
    playModeText: {
        order: "Order",
        orderLoop: "Random",
        singleLoop: "Single Loop",
        shufflePlay: "Shuffle"
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "Open",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "Close",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "On",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "Off",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "No Music",

    panelTitle: "Play list ",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: true,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    //Music is downloaded handle

};

export default class Music extends React.Component {

    render() {
        return (
            <div>
                <ReactJkMusicPlayer {...options} />
            </div>
        );
    }
}