//<![CDATA[ 
var key="1rk1C0Insapzq3lBVm_SKA9dsLld9jCJ5X-aHczG-WW8";
var formkey='dFZ2ZUlPaFpxekJBcTRacWFwd3JjQmc6MQ';
var sheet="od6";
    
var talking = [];

$(window).load(function(){   
	
    var talk_timer = setInterval(talkingbox, 10000);
    function talkingbox() {    
        if($("#ukagaka_msgbox").css("display") != 'none')
        $("#ukagaka_msgbox").fadeOut(500,function(){
            $(this).html(talking[Math.floor(Math.random()*talking.length)]).fadeIn(500)});
    }
});
$(function() {
	google.charts.load('current');
	google.charts.setOnLoadCallback(reloadtalking);
    
    $("#ukagaka_panel").draggable();
    $("span#ukagaka_btn_display").click(function() {$("#ukagaka_panel").fadeToggle(1000);});
    $("span#ukagaka_btn_menu").click(function() {$(".ukagaka_box div").fadeOut(500);$("#ukagaka_menubox").delay(500).fadeIn(500);});
    $("span#menu_btn_exit").click(function(){$(".ukagaka_box div").fadeOut(500);$("#ukagaka_msgbox").delay(500).fadeIn(500);});
    $("span#menu_btn_addstring").click(function(){$(".ukagaka_box div").fadeOut(500);$("#ukagaka_stringinput").delay(500).fadeIn(500);});
    $("span#menu_btn_renewlist").click(function(){$(".ukagaka_box div").fadeOut(500);$("#ukagaka_renewlist").delay(500).fadeIn(500);});
    $("span#addmenu_add").click(function(){
	    var add = $("input#addstring").val();
        if(!((add.length<=1)||add.indexOf('script')>-1||add.indexOf('body')>-1||
            add.indexOf('style')>-1||add.indexOf('link')>-1||add.indexOf('iframe')>-1||add.indexOf('head')>-1||
            add.indexOf('nav')>-1||add.indexOf('object')>-1||add.indexOf('embed')>-1)){
            $.ajax({
                type: 'POST',
                url: 'https://docs.google.com/spreadsheet/formResponse?formkey=' + formkey + '&amp;ifq',
                data: { "entry.0.single": add },
                success: function() {
                    alert("偽春菜學會了！");
                    $("input#addstring").attr("value","");
                    reloadtalking();},
                error:   function() {alert("糟糕！偽春菜出錯了！");}
            });
        }else{alert("OOPS！偽春菜不接受這個字串喔！");}
    });
});

function reloadtalking(){
    /* JSON / load string from database */
    function initialize() {
        var opts = {sendMethod: 'auto'};

        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1rk1C0Insapzq3lBVm_SKA9dsLld9jCJ5X-aHczG-WW8/edit#gid=0', opts);
        query.setQuery('select B');

        query.send(handleQueryResponse);
    }

    function handleQueryResponse(response) {
        if(!response.isError()){
            var JSONdata = JSON.parse(response.getDataTable().toJSON());

            console.log(JSONdata);
            var dataList = JSONdata.rows;

            for (var i in dataList) {
                talking[i] = dataList[i].c[0].v;
            }
            
		    $('input#addstring').attr('placeholder', '目前春菜學會了' + talking.length + '個字彙');
        }
    }
    initialize();
};

//]]>
