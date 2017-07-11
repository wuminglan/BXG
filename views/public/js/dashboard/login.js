 define([
     'jquery',
     'cookie'
 ], function($, cookie) {
     $("#formData").submit(function(){
            var data = $(this).serializeArray();
            $.ajax({
                url:"/api/login",
                type:"post",
                data:data,
                success:function(result){
                    if(result.code==200){  
                    // alert('接收服务器数据成功');
                    $.cookie('resultRult',JSON.stringify(result.result));
                    console.log(result.result);
                    window.location.href='index';
                    }
                },
                error:function(){
                    alert("接收数据错误");
                }
            });   
            return false; 
        });
     
 });
 