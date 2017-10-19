$(document).ready(function(){

  var ResearchFindings = {

    init: function(){
      this.displayText();
      this.seeAllContent();
    },

    displayText: function() {
      $('.toggle').click(function(e){
        e.preventDefault();
        $(this).next('.text').removeClass('hidden');
        $(this).addClass('toggle-clear');
        $(this).parent('.content').addClass('shown');
      });
    },

    seeAllContent: function() {
      $('.see-all-content').click(function(e){
        console.log('Show All');
        e.preventDefault();
        $('.text').removeClass('hidden');
        $('.toggle').addClass('toggle-clear');
        $('.content').addClass('shown');
      });
    }


  }

  ResearchFindings.init();

});
