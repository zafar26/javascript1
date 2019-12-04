const playlist =require('./bollywoodPlaylist.js');
var totalDuration = 0;
obj = {};
for(let i =0; i<playlist.songs.length;i++){
    var duration = playlist.songs[i].track.duration_ms;
    for(let j = 0; j <playlist.songs[i].track.album.artists.length; j++){
        var name = playlist.songs[i].track.album.artists[j].name;
        var albumName = playlist.songs[i].track.album.name;

        totalDuration += duration;
        
        if (obj[name]){
            obj[name].push(albumName)
        }else{
            obj[name] = []
            obj[name].push(albumName)
        }
    }

}
console.log("Total Duration of playlist: ",totalDuration)
console.log(obj)
