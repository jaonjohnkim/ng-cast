angular.module('video-player')

.component('app', {

  controller: function appCtrl() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    var context = this;
    this.selectVideo = (video) => {
      console.log('Before', context.currentVideo);
      context.currentVideo = video;
      console.log('After', context.currentVideo);
      
    };
    this.searchResults = function () {
    
    };
  },
  
  templateUrl: 'src/templates/app.html'
});

