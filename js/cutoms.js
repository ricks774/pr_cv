$(document).ready(function() {

  // header color chang
  $(window).on("scroll", function() {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header");
    if (scrollDistance > 80) {
      $header.addClass("header--colored");
    } else {
      $header.removeClass("header--colored");
    }
  })

  //logo
  const logo = document.querySelectorAll('.logo-svg__item path');
  for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }

  //wow plugin
  if (screen.width > 768) {
    new WOW().init();
  }


  //fancybox plugin
  $('[data-fancybox]').fancybox({
    loop: true
  });

  //stellar plugin initialize
  if (screen.width > 768) {
    $(window).stellar();
  }
})

function GoogleForm() {　 //這裡要對應到自己的 javascript 名稱
  //宣告欄位
  var field1 = $("[name='Name']").val();
  var field2 = $("[name='Tel']").val();
  var field3 = $("[name='Email']").val();
  var field4 = $("[name='Message']").val();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSda7dIs4aJQxsgK0Vo7WoE7ry8Uaoz30bpp-pt4SohRm1GrAA/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
    data: {　 //Google Form 裡面的欄位 name ＊＊記得要改＊＊
      "entry.1993843987": field1,
      "entry.1591298797": field2,
      "entry.1771937319": field3,
      "entry.1571377732": field4
    },
    type: "POST",
    dataType: "xml",
    // statusCode: {
    //   0: function alertChang() {
    //     alert("no!");　 //完成送出表單的警告視窗重新導向
    //   },
    //   200: function alertChang() {
    //     alert("已送出!");　 //完成送出表單的警告視窗
    //     window.location.assign("http://google.com");　 //完成送出表單後的重新導向
    //   }
    // }
  });
}

function alertChang() {
  Swal.fire(
    "表單送出", //標題 
    "您所輸入的聯絡資訊已送出!", //訊息內容(可省略)
    "success" //圖示(可省略) success/info/warning/error/question
    //圖示範例：https://sweetalert2.github.io/#icons
  );
}