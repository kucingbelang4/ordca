$(document).ready(function(){
    
    function getHashValue(key) {
      return window.location.hash;
    }
    
    (function(){
        
        if(!($.cookie('me'))){ 
            if(window.location.hash !== '#fail') window.location.href= '/';
        }
        
    })()
    
    var ajax = function(data){
     
        return $.ajax({
            
          url: data.url,
          type: data.type,
          dataType: "json",
          data: data
          
        })
        
    }

    var getMe = function(token){
        
        console.log(':: login.js :: 30 :: getMe')
        
        var url = '/me?token='+$.cookie('auth');
        
        var type = 'GET';
        
        var iData = {
            url: url,
            type: type
        }
        
        $.when(ajax(iData)).done(function(data) {
            
            if(data.response == 'success'){
                
                $.cookie('me', data.data);
                
                window.location.href = '/';
                
            }
            
        })
        
    }
    
    $('#auth').on('submit', function(){
        
        if(!$('#username').val()) {
            
            alert('fill ur username !')
            
            return false
            
        } 
        
        var username = $('#username').val();
        
        var iData = {
            
            url: "/login?username="+username,
            type: "POST"
            
        }
        
        $.when(ajax(iData)).done(function(data){
            
            if(data.response == 'success') {
                
                $.cookie('auth', data.data);
         
                getMe();
                
            }
            
        });
        
        return false;
        
    });
    
});