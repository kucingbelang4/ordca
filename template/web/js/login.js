$(document).ready(function(){
    
    var ajax = function(data){
     
        return $.ajax({
            
          url: data.url,
          type: data.type,
          dataType: "json",
          data: data
        })
        
    }
    
    
    var getMe = function(token){
        
        console.log('getMe exe')
        
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