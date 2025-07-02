// 自定义JavaScript，用于增强网站功能

$(document).ready(function() {
    // 为带二维码的卡片重新初始化tooltip
    $('.qrcode a').tooltip({
        trigger: 'click hover',
        placement: 'bottom',
        html: true
    });
    
    // 点击带二维码的卡片，显示二维码
    $('.qrcode a').on('click', function(e) {
        // 阻止链接跳转
        if($(this).attr('href') === '#') {
            e.preventDefault();
        }
        
        // 显示tooltip
        $(this).tooltip('show');
        
        // 阻止冒泡，避免点击后立即隐藏
        e.stopPropagation();
    });
    
    // 点击其他地方隐藏tooltip
    $(document).on('click', function() {
        $('.qrcode a').tooltip('hide');
    });
}); 