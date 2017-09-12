angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },

  controller: function () {
    // $ctrl.video.url = 'https://www.youtube.com/embed/' + this.video.id.videoId;
    // setTimeout(() => {
      //console.log(this);
      // this.video.url = 'https://www.youtube.com/embed/' + this.video.id.videoId;
      //console.log(this.video.url);
      // $sce.trustAsResourceUrl()
    // });
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
