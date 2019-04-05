/** thumbs.js **/
const  $  =  $tray;
if( typeof $  ==  'function') {
    
    $(document).ready(function(){
        $(window).ajaxComplete(function( event, xhr, settings ){
            if(settings) {
                if(settings.url.indexOf('variant_gallery') !==  -1) {
                    loadThumb();
                }
            }
        });
        loadThumb();
    });
    function  loadThumb() {
        const  thumbs  =  $('.produto-imagem-miniaturas');
        if(thumbs.length) {
            thumbs.hide();
            const   images  =  thumbs.find('img, .icon-video');
            let     html;
            if($('.thumbs').length) $('.thumbs').remove();
            if(images.length) {
                html  =  `<div class="thumbs">`;
                html  +=  `<ul class="thumbs__list">`;
                
                images.each((index, item) => {
                    html  +=  createThumb($(item).attr('src'), index);
                });
            
                html  +=  `</ul>`;
                html  +=  `</div>`;
                thumbs.after(html);

                $(document).trigger("thumbs:start");
                
                $('.thumbs a').click((evt) => {
                    let index = $(evt.currentTarget).attr('data-index');

                    selectThumb(index);
                    
                    if ($(evt.currentTarget).find('.thumb__video').length) { 
                        $('#colVideo').show();
                    } else {
                        $($('a', thumbs).eq(index)).mouseover().click();
                        $('#colVideo').hide();
                    }
                    evt.preventDefault();
                });			
                
                selectThumb('0');
            }
        }
    }
    
    function selectThumb(index) {
        $(`.thumbs li`).removeClass('thumbs__item--actived'); console.log(`.thumbs [data-index=${index}]`);
        
        setTimeout(function() {
        if (window.innerWidth < 992) {
            if (jQuery("#carousel").children().length <= 0) {
            } else {
                // console.log("passou aqui")
                jQuery('.jcarousel-skin-tango').slick({
                    centerMode: true,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    variableWidth: true,
                    dots: true,
                    arrows: false,  
                });
                // console.log("não vazio");
            }
        }
        if (jQuery("#carousel").children().length <= 0) {
            console.log("vazio");
        } else {
            jQuery("#foto_p").addClass("fotoDisplayNone");
            console.log("não vazio");
        }

        },100)
        
        $(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
    }

    function  createThumb(src,index) {
        if (src) {
            return  `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
        }else{
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
        }
    }
}
