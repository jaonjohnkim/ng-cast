angular.module('video-player')

.component('app', {

  controller: function appCtrl() {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = function (index) {
      console.log('before', this.currentVideo);
      //console.log(this.currentVideo);
      this.currentVideo = this.videos[index];
      console.log('after', this.currentVideo);
      
    };
    //console.log(this);
    //console.log(this.selectVideo, this.videos);
    this.searchResults = function () {
    
    };
  },
  
  templateUrl: 'src/templates/app.html'
});

