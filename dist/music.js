const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "グルグル",
        artist: '藤原さくら',
        url: 'http://music.163.com/song/media/outer/url?id=571340719.mp3',
        cover: 'http://p1.music.126.net/R1w94Ull54KSB6NaZim6bw==/109951163351347141.jpg?param=130y130',
      },
      {
        name: 'No Home',
        artist: '高梨康治',
        url: 'http://music.163.com/song/media/outer/url?id=529137.mp3',
        cover: 'http://p2.music.126.net/Y85i30sDIRCsrzCCR5mduA==/908196604543247.jpg?param=130y130',
      },
      {
        name: 'memories',
        artist: '17years after～',
        url: 'http://music.163.com/song/media/outer/url?id=424477092.mp3',
        cover: 'http://p2.music.126.net/groyO2EWS-7RDm7Al90Zjw==/3417282149451064.jpg?param=130y130',
      }
    ]
});