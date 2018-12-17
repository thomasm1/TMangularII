angular.module('app').component('dag', {
  templateUrl:  'views/dag.html',
  controller: function() {
    this.dag = 'Directed Acyclic Graph';
  
    this.toggleGreeting = function() {
      this.dag = (this.dag == 'TMM') ? 'DAG' :  'JSON DAG TOOL';
    }
  }
})
  