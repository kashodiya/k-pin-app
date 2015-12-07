/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

/*
Thing.find({}).removeAsync()
  .then(function() {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });
*/
Thing.find({}).removeAsync()
  .then(function() {
    Thing.create({
      name: 'Development Tools',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Small_rhombihexahedron.png/100px-Small_rhombihexahedron.png',
      userId: 'aaa'
    }, {
      name: 'Server and Client integration',
      imgSrc: 'https://yt3.ggpht.com/-QKfulJ3PzY8/AAAAAAAAAAI/AAAAAAAAAAA/flKHmNjSlbk/s100-c-k-no/photo.jpg',
      userId: 'aaa'
    }, {
      name: 'Smart Build System',
      imgSrc: 'http://www.smallworldfs.com/assets/images/logos/logo-small-world-greenBack.h100.png',
      userId: 'aaa'
    }, {
      name: 'Modular Structure',
      imgSrc: 'https://www.storagecraft.com/sites/default/files/images/product-icons/small-business-server-100x100.png',
      userId: 'aaa'
    }, {
      name: 'Optimized Build',
      imgSrc: 'https://yt3.ggpht.com/-XYP4tT-eMw8/AAAAAAAAAAI/AAAAAAAAAAA/HyPNn0fqRjk/s100-c-k-no/photo.jpg',
      userId: 'aaa'
    }, {
      name: 'Deployment Ready',
      imgSrc: 'http://www.smallbusinessadviceweek.co.uk/sites/default/files/styles/thumbnail/public/field/image/cipd.png?itok=n5vLZB_X',
      userId: 'aaa'
    });
  });

    
    
    



User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
