$(function(){ 

    //再開園予定日を設定
    var openDay = new Date('2020/04/20 00:00');

    //日付を取得
    var today =new Date();
    
    //開園日までの日数を表示
    if(today > openDay){
        $('.title-date').text('もう開園してるよーーん');
    }else if(today == openDay){
        $('.title-date').text('今日開園！');
    }else{
        var leasttime = openDay - today;
        var leastDay = Math.ceil(leasttime / 1000 / 60 / 60 / 24);
        $('.title-date').text('再開園まで後　' + leastDay + '日');
    }

    //ボタン押下回数をカウント
    var count = 0;

    //ボタン押下時の処理
    $('#btn-character').click(function(){
        
        //画面の幅を取得
        var windowWidth = $(window).width();
        var minWidth = 1000

        if(count > 13){
            //画面の幅に対応する背景を設定
            if(windowWidth > minWidth){
                $('.back').css('background-image', 'url(castle_forPC.jpg)').css('background-size', 'cover')
            }else{
                $('.back').css('background-image', 'url(castle.jpg)').css('background-size', 'cover')
            }

            //文字の色、テキストを変更
            $('.title-date').css('color', 'yellow')
            $('.btn').text('行きたいね！')
        }
           
        //ボタン押下ごとにキャラクターを表示する
        switch(count){
            case 0:
                $('.pluto').fadeIn(250);
                break;

            case 1:
                $('.mickey').fadeIn(300);
                break;

            case 2:
                $('.minnie').fadeIn(300);
                break;

            case 3:
                $('.donald').fadeIn(300);
                break;

            case 4:
                $('.goofy').fadeIn(300);
                break;
                
            case 5:
                $('.chipndale').fadeIn(300);
                break;

            case 6:
                $('.dasy').fadeIn(300);
                break;

            case 7:
                $('.alice').fadeIn(300);
                break;
                
            case 8:
                $('.chindlella').fadeIn(300);
                break;

            case 9:
                $('.roger').fadeIn(300);
                break;

            case 10:
                $('.smee').fadeIn(300);
                break;
                
            case 11:
                $('.melida').fadeIn(300);
                break;

            case 12:
                $('.ariel').fadeIn(300);
                break;
                
            case 13:
                $('.carpet').fadeIn(300);
                break;
			
		    default:
			    $('.mickey').fadeIn(300);
			    break;
        }

        count ++;
    });
});
