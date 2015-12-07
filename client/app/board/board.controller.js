'use strict';

(function() {

class BoardCtrl {

  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.things = [];
    this.name = 'aaa';
    this.imgSrc = 'http://www.residenthippy.com/files/2013/01/small-football1.jpg';
    this.getCurrentUser = Auth.getCurrentUser;


    $http.get('/api/things/myThings').then(response => {
      this.things = response.data;
      socket.syncUpdates('thing', this.things, this.getCurrentUser()._id);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.name) {
      var that = this;
      this.$http.post('/api/things', { name: this.name, imgSrc: this.imgSrc }).success(function(){
        console.log('Item dadded');
        that.name = '';
        that.imgSrc = '';
      });
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('appApp')
  .controller('BoardCtrl', BoardCtrl);
 
})();

    /*
    https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Small_rhombihexahedron.png/100px-Small_rhombihexahedron.png
    https://yt3.ggpht.com/-QKfulJ3PzY8/AAAAAAAAAAI/AAAAAAAAAAA/flKHmNjSlbk/s100-c-k-no/photo.jpg
    http://www.smallworldfs.com/assets/images/logos/logo-small-world-greenBack.h100.png
    
    
    http://www.planwallpaper.com/static/images/Free-Wallpaper-Nature-Scenes.jpg
    http://www.planwallpaper.com/static/images/Beauty-of-nature-random-4884759-1280-800_nqwrrog.jpg
    http://hdwallpapershdfree.com/wp-content/uploads/2015/10/nature-images-02.jpg
    https://wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg
    http://www.planwallpaper.com/static/images/nature-wallpapers-1.jpg
    http://www.planwallpaper.com/static/images/Nature-Wallpaper-daydreaming-34811098-1024-768.jpg
    */            
