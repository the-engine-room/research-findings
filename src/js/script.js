$(document).ready(function(){

  var ResearchFindings = {

    init: function(){
      this.displayText();      
    },

    displayText: function() {
      $('.toggle').click(function(e){
        e.preventDefault();
        if( $(this).parent('.content').hasClass('shown') ){
          $(this).next('.text').addClass('hidden');
          $(this).removeClass('toggle-clear');
          $(this).parent('.content').removeClass('shown');
        } else {
          $(this).next('.text').removeClass('hidden');
          $(this).addClass('toggle-clear');
          $(this).parent('.content').addClass('shown');
        }

      });
    },

  }

  ResearchFindings.init();

});
