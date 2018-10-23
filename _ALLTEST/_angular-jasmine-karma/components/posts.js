angular.module('tmm').component('posts', {
  bindings: { posts: '<' }, 
  template: '<h3>August:</h3>' +
            '<ul>' +
            '  <li ng-repeat="post in $ctrl.posts">' +
            '    <a ui-sref="post({ postId: post.id })">' +
            '      {{post.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>' 
           
          });
 