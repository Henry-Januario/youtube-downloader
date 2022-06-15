$(".btn").click(()=>{
    let link = $("#link").val();
    let format = $("#format").children("option:selected").val();
    let src = "" + link + "=" + format + "";
    download(link,format);
});

function download(link, format){
    $("#btn-container").html('<iframe style="height:50px; border:none; overflow:hidden;" src="https://loader.to/api/button/?url='+ link + '&f=' + format +'"><?iframe>');
}
