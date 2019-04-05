


if (window.innerWidth < 992) {
    jQuery( ".checkMenu" ).on( "click", function() {
        // console.log("passouAq")
            if( jQuery("#wrapper").hasClass("menuClose")) {
                jQuery("#wrapper").removeClass("menuClose");
            }
        })
    jQuery( ".close-menu" ).on( "click", function() {
        jQuery("#wrapper").addClass("menuClose");
    })
}

jQuery( document ).ready(function() {
    if (window.innerWidth < 992) {
        jQuery( ".checkMenu" ).on( "click", function() {
            // console.log("passouAq")
                if( jQuery("#wrapper").hasClass("menuClose")) {
                    jQuery("#wrapper").removeClass("menuClose");
                }
            })
        jQuery( ".close-menu" ).on( "click", function() {
            jQuery("#wrapper").addClass("menuClose");
        })
    }
})

jQuery(function() {
    jQuery('#colorselector').change(function(){
      jQuery('.colors').hide();
      jQuery('#' + jQuery(this).val()).show();
    });
  });
// if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery')}
// +function ($) {'use strict';
// 	var version = $.fn.jquery.split(' ')[0].split('.')
// 	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
// 		throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
// 	}
// }(jQuery);

jQuery(document).ready(function ($) {
    $('.botao-commerce.botao-novo-cadastro').click(function(){
        $(this).closest('form').each(function(){ this.submit() });
    });



   /* jQuery(document).ready(function(){
        jQuery('.thumbs__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical:true
        });
    });*/

    // Thumbs Carousel

    if(jQuery(window).width() > 992) {
        jQuery( document ).on('thumbs:start', function(){
            var  thumbs  =  $('.thumbs__list');
            if(thumbs) {
                if(thumbs.find('li').length  >  4){                                        
                        thumbs.slick({
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite:false,
                        vertical:true,
                        nextArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
                        prevArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
                    });
                }
            }
        });
    }
    if(jQuery(window).width() < 992) {
        $( document ).on('thumbs:start', function(){
            var  thumbs  =  $('.thumbs__list');
            
            if(thumbs) {
                if(thumbs.find('li').length  >  3){
                    thumbs.owlCarousel({
                        items:  4,
                        itemsCustom: [[320, 3], [425, 4], [600, 4], [768, 4], [992, 4], [1200, 4]],
                        navigation:  true,
                        pagination:  false,
                        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right">	</i>']
                    });
                }
            }
        });
    }


    +function ($) {
		if (jQuery.fn.owlCarousel) {
			var $fullBanner = jQuery('#full-banner');
			$fullBanner.find('ul').owlCarousel({
				autoPlay : 5000,
				stopOnHover : true,
				pagination: false,
				navigation:false,
				navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				paginationSpeed : 1000,
				goToFirstSpeed : 2000,
				singleItem : true,
				autoHeight : true
			});


            jQuery(".showcase-carousel ul").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [600, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singleItem: false
            });
            jQuery(".tray-kit-list").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [600, 2], [768, 2], [992, 2], [1200, 2]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singleItem: false
            });

          /*  jQuery(".showcase__list").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [600, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singleItem: false
            });
            */

            jQuery(".banners-carousel ul").owlCarousel({
                autoPlay: true,
                items: 2,
                itemsCustom: [[320, 1], [768, 1], [992, 1], [1200, 2]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singxleItem: false
            });

            jQuery(".brands__list ul").owlCarousel({
                autoPlay: false,
                itemsCustom: [[320, 3], [768, 3], [992, 5], [1200, 8]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
            });
            

            jQuery(".banners-extra__list").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singxleItem: false
            });
            jQuery(".product__related ul").owlCarousel({
                autoPlay: false,
                items: 4,
                itemsCustom: [[320, 2], [768, 2], [992, 3], [1200, 4]],
                itemsScaleUp: false,
                itemsTabletSmall: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                pagination: false,
                singxleItem: false
            });

            
            
            if(jQuery(window).width() < 1200) {
                jQuery(".vertical-showcases ul").owlCarousel({
                    autoPlay: true,
                    items: 1,
                    itemsCustom: [[320, 1], [768, 1], [992, 1], [1200, 1]],
                    itemsScaleUp: false,
                    itemsTabletSmall: false,
                    navigation: true,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: false,
                    singxleItem: false
                });
            }
            if(jQuery(window).width() < 1200) {
                jQuery( ".plus.color" ).remove();
                jQuery( ".cpClear" ).remove();
                jQuery(".fotosCompreJunto").owlCarousel({
                    autoPlay: true,
                    items: 1,
                    itemsCustom: [[320, 2], [768, 2], [992, 3], [1200, 3]],
                    itemsScaleUp: false,
                    itemsTabletSmall: false,
                    navigation: true,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    pagination: false,
                    singxleItem: false
                });
            }

        }
    }(jQuery);

    // +function ($) {
    //     'use strict';

    //     var $smartFilterMobile = jQuery('.mobileFilter');
    //     var $mobileMenu = jQuery('.mobileMenu');
    //     var $mask = jQuery('#mask');

    //     jQuery($smartFilterMobile).click(function () {
    //         jQuery('body').toggleClass('ac_sm_ft');
    //     });
    //     jQuery($mobileMenu).click(function () {
    //         jQuery('body').toggleClass('ac_sm_menu');
    //     });
    //     jQuery($mask).click(function () {
    //         jQuery('body').removeClass('ac_sm_menu ac_sm_ft');
    //     });
    // }(jQuery);


    +function ($) {
        jQuery('.caixa-botoes .bt-avancar').html('Avançar');

        jQuery(document).ready(function ($) {
            jQuery('table').each(function (index, el) {
                var titles = [];

                jQuery(this).find('th').each(function (index, el) {
                    titles.push(jQuery(this).html());
                });

                jQuery(this).find('tr').each(function (index, el) {
                    jQuery(this).find('td').each(function (index, el) {
                        jQuery(this).attr('data-table-title', titles[index]);
                    });
                });
            });
        });
    }(jQuery);

    if (screen.width < 767) {
        var i = 1;

        jQuery('.smart_filter [name=form-filter] h3').each(function (index, el) {
            var self = jQuery(this);

            if (self.next('ul').find('label').length) {
                var name = self.next('ul').find('input').attr('name');
                var name = name + i;
                self.attr('data-filter-label', name)
                    .addClass('smart-filter-label')
                    .attr('data-filter-label-content', self.html());
                self.next('ul').attr('data-filter-container', name)
                    .addClass('smart-filter-container');
                i++;
            }
        });

        jQuery('.smart_filter .smart-filter-label').each(function (index, el) {
            var self = jQuery(this);
            var name = self.attr('data-filter-label');

            self.bind('click', function (event) {
                self.toggleClass('estado-ativo');
                jQuery('[data-filter-container=' + name + ']').slideToggle('300')
                    .toggleClass('estado-ativo');
            });
        });
    };

    jQuery('#foto_p').attr('data-target', "");

    if($('.smart_filter h3').eq(0).text() == "Categorias") {
        $('.smart_filter h3').eq(0).text($('.breadcrumb .category').text());
    }

    if($('.fotosCompreJunto').length > 0) {

        var aux;

        $.each($('.fotosCompreJunto .produto img'), function() {
            aux = $(this).attr('src');

            aux = aux.replace('/90_', '/180_');

            $(this).attr('src', aux);
        });

    }

    if($('#nav_bar .nv-01 > .you-need').length > 0) {

        if($(window).width() < 980) {
            $('#nav_bar .nv-01 > .you-need .you-need__toggle').on('click', function(){
                $('.you-need__list').slideToggle(150);
            });
        }

    }

    var lastScrollTop = 0;
    jQuery(window).scroll(function (event) {
        var st = jQuery(this).scrollTop();

        if (st > 150) {
            jQuery('body').addClass('moving');
            if (st > lastScrollTop) {
                jQuery('body').addClass('moving--down');
            } else {
                jQuery('body').removeClass('moving--down');
            }
            lastScrollTop = st;
        } else {
            jQuery('body').removeClass('moving');
        }
    });

});

var elements = document.querySelectorAll('.product__right-wrapper');
Stickyfill.add(elements);


if(jQuery('.product__addcart').length > 0) {

    var prodId;

    jQuery('.product__addcart').on('click', function() {
        prodId = jQuery(this).data('id');

        addCart(prodId);
    });
}

jQuery( document ).ready(function() {
    jQuery("body").addClass("active__body");
});

jQuery( document ).ready(function() {
    if (window.innerWidth < 992) {

        jQuery( "svg.cat__icon.icon--arrow-bottom" ).on( "click", function() {            
            jQuery(this).addClass("rotateDrop");
            
            if(jQuery(".dropdown-switcher").hasClass("active__dropdown")) {
                jQuery(".dropdown-switcher").removeClass("active__dropdown");
                jQuery("svg.cat__icon.icon--arrow-bottom").removeClass("rotateDrop");
            } else {
                jQuery(".dropdown-switcher").addClass("active__dropdown");
                
            }

        });

    }

    jQuery("#avalieClick").on( "click", function() {
        jQuery("#ProdAbas ul li").removeClass("aberta"); 
        jQuery("#formasPagto").css( "display", "none" );
        jQuery("#AbaPersonalizadaConteudo8").css( "display", "none" );
        jQuery("#coments").css( "display", "none" );
        jQuery("#itensInclusos").css( "display", "none" );
        jQuery("#descricao").css( "display", "none" );
        jQuery("#Aba3").addClass("aberta");
        jQuery("#coments").css( "display", "block" );
        
    });

});

jQuery(".triger_btn-tabs").click(function () {    
    var item = jQuery(this).closest('.dispblock');
    var hasOpen = !item.hasClass('drop');
    jQuery('.dispblock').removeClass('drop');
    if(hasOpen) item.addClass("drop");
    else{ item.removeClass("drop") }

});

jQuery( ".seemore-btn" ).on( "click", function() {
    if(jQuery("#descricao").hasClass("showthis")) {
        jQuery("#descricao").removeClass("showthis");
    } else {
        jQuery("#descricao").addClass("showthis");
    }

});

jQuery( "#avalieClick" ).on( "click", function() {
    if(jQuery("#descricao").hasClass("showthis")) {
        jQuery("#descricao").removeClass("showthis");
    } else {
        jQuery("#descricao").addClass("showthis");
    }
});

function addCart(dataProductId){
    var dataSession = jQuery("html").attr("data-session");
    jQuery.ajax({
        method: "POST",
        url: "/web_api/cart/",
        contentType: "application/json; charset=utf-8",
        data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+dataProductId+'","quantity":"1"}}'
    }).done(function( response, textStatus, jqXHR ) {
    
        jQuery('.addcart-' + dataProductId).html('Adicionado!!');
        setTimeout(function(){
            jQuery('.addcart-' + dataProductId).html('<svg class="addCart__icon icon--cart"><use xlink:href="#cart"></use></svg> Adicionar à Sacola');
        }, 2000);
        var qtdCart = parseInt(jQuery("span[data-cart=amount]").html());
        jQuery("span[data-cart=amount]").html(qtdCart + 1);

        const UPDATECART = new CustomEvent('UPDATECART', { detail: response.data });
        window.dispatchEvent(UPDATECART);
    }).fail(function( jqXHR, status, errorThrown ){
        var response = jQuery.parseJSON( jqXHR.responseText );
    
    });
}


//Infomações na pagina de produto (como comprar, troca facil...)

jQuery("svg.search__icon").click(function () {    
    var item = jQuery(this).closest('.condicoes-item');
    var hasOpen = !item.hasClass('drop');
    jQuery('.condicoes-item').removeClass('drop');
    if(hasOpen) item.addClass("drop");
    else{ item.removeClass("drop") }

});

jQuery(".closeModalinfo").click(function () {    
    jQuery('.condicoes-item').removeClass('drop');
});




setTimeout(function() {
    jQuery(window).load(function(){
        if (window.innerWidth < 992) {
            if (jQuery("#carousel").children().length <= 0) {
            } else {
                // console.log("passou aqui")
                jQuery('.jcarousel-skin-tango').not('.slick-initialized').slick({
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
        
    })
    jQuery(".lista_cor_variacao li").addClass("liTeste");
},100)
$(function(){

$('liTeste').click(function(){
    console.log("passou")
    setTimeout(function() {
        jQuery(window).load(function(){
            if (window.innerWidth < 992) {
                if (jQuery("#carousel").children().length <= 0) {
                } else {
                    // console.log("passou aqui")
                    jQuery('.jcarousel-skin-tango').not('.slick-initialized').slick({
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
            
        })
        jQuery(".lista_cor_variacao li").addClass("liTeste");
        return false;
    },10)
})
})