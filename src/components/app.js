angular.module('video-player')

.component('app', {

  controller: function appCtrl() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    var context = this;
    this.selectVideo = (video) => {
      console.log('Before', this.currentVideo);
      this.currentVideo = video;
      console.log('After', this.currentVideo);
      
    };
    this.searchResults = function () {
    
    };
  },
  
  templateUrl: 'src/templates/app.html'
});

