angular.module('video-player')

.component('app', {

  controller: function appCtrl(youTube) {

    // this.videos = init.data.items;
    // this.currentVideo = exampleVideoData[0];
    var context = this;
    this.selectVideo = (video) => {
      console.log('Before', this.currentVideo);
      this.currentVideo = video;
      console.log('After', this.currentVideo);
      
    };
    this.searchResults = (query) => {
      var result = youTube.search(query);
      result.then((data) => {
        this.videos = data.data.items;
        this.currentVideo = data.data.items[0];
      });
    };
    this.searchResults('Turn Down For What');
  },
  
  templateUrl: 'src/templates/app.html'
});

