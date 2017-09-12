angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = (query) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query || 'Turn Down for What',
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY
      }
    });
  };
});
