$.ajax({
    url:"assets/json/albumi.json",
    method:"get",
    dataType:"json",
    success:function(){
        console.log("RADI");
    },
    error:function(){
        console.log("NE RADI");
    }
});