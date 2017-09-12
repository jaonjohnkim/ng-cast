angular.module('video-player')


.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    selectVideo: '<',
    currentVideo: '<'
  },
  controller: function() {
    //console.log(this);
    //console.log(this.videos);
    this.onClick = function(video) {
      //console.log(video);

      this.selectVideo(video);
    };
    // setTimeout(() => {
    //   //console.log(this.videos);
    //   //console.log(this.selectVideo);
    // });
    
  }
});
