function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var t=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);t&&t.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,t,a;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=document,t=e.getElementById(`scr_${vTurbSrcId}`),(a=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.parentElement.insertBefore(a,t)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`scr_${vTurbSrcId}`),(a=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,a.style.position="relative",a.style.width="100%",a.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,t.parentElement.insertBefore(a,t)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`vid_${vTurbPlayer.id}`),(a=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.position="absolute",a.style.objectFit="cover",a.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,t.appendChild(a)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`vid_${vTurbPlayer.id}`),(a=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.position="absolute",a.style.backdropFilter="blur(5px)",a.style.webkitBackdropFilter="blur(5px)",t.appendChild(a)}(document))}function vTurbLoadSmrtvds(){var e,t,a,r;e=window,t=document,e.smrtvds||(a=e.smrtvds=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},e._smrtvds||(e._smrtvds=a),a.push=a,a.loaded=!0,a.version="1.1",a.queue=[],(r=t.createElement("script")).async=!0,r.src=`https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,t.getElementsByTagName("head")[0].appendChild(r)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"668d772843e0d5000a99d3ff","org_id":"36124149-fb5f-4577-852d-90288afff251","name":"147curto_final_FACE1","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"36124149-fb5f-4577-852d-90288afff251/players/668d772843e0d5000a99d3ff/thumbnail.jpg","cover_key":"36124149-fb5f-4577-852d-90288afff251/players/668d772843e0d5000a99d3ff/cover.jpg","version":"v1","video_id":"65779b090bb9f400092acd59","options":{"autoplay":"smartplay","smart_autoplay_template":"image","theme":"#7DB91F","foreground_color":"#FFFFFF","video":{"width":1280,"height":720},"cdn":"cdn.converteai.net","displays":{"big_play":!1,"play_pause":!0,"backward":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[{"id":"callaction_668d772843e0d5000a99d3ff_0","type":"below_button","btnText":"ENTRAR PRO PROJETO 30K","position":"bc","link":"https://pay.kuenha.com/cc23c110-2eea-4ced-88f5-9d1316ee7d9f","range":{"start":665,"finish":1140},"color":"#14AF34","show_visit_returns":!1,"colors":{"text":"#FFFFFF","background":"#14AF34","text_hover":"#FFFFFF","background_hover":"#51E11B"},"size":"lg"}],"pixels":[{"id":"pixel_668d772843e0d5000a99d3ff_0","type":"facebook","pixel_id":"648896747181267","pixel_value":"PITCH","dispatch":!0,"dispatch_in":665,"dispatch_type":"time"}],"thumbs":[{"id":"thumb_668d772843e0d5000a99d3ff_0","image":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2023/06/17/648db6d430fe400009312a5b.gif","start":0,"finish":665,"has_button":!1,"button_name":"Nome do bot\xe3o","button_size":"sm","button_position":"bc","button_url":"","button_background_color":"#1890FF","button_background_hover_color":"#1890FF","button_text_color":"#FFFFFF"},{"id":"thumb_668d772843e0d5000a99d3ff_1","image":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/27/65b4ffb154ff6d00010c028f.jpg","start":665,"finish":1080,"has_button":!0,"button_name":"PEGAR MEU DESCONTO!","button_size":"lg","button_position":"bc","button_url":"https://pay.kiwify.com.br/MjaGIEn?utm_source=facebook","button_background_color":"#3FA116","button_background_hover_color":"#1C901E","button_text_color":"#FFFFFF"}],"headlines":[{"id":"headline_668d772843e0d5000a99d3ff_25","active":!0,"name":"7","number":25,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4e6fc80ba00018a58df.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4e6fc80ba00018a58df.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_26","active":!0,"name":"6","number":26,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4c4fc80ba00018a58dd.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4c4fc80ba00018a58dd.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_27","active":!0,"name":"5","number":27,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4bb5f2a7200012c5b6e.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4bb5f2a7200012c5b6e.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_28","active":!0,"name":"4","number":28,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4b1fc80ba00018a58dc.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4b1fc80ba00018a58dc.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_29","active":!0,"name":"3","number":29,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4a9fc80ba00018a58db.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4a9fc80ba00018a58db.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_30","active":!0,"name":"2","number":30,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4a0fc80ba00018a58da.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe4a0fc80ba00018a58da.png","weight":.01,"is_responsive":!1},{"id":"headline_668d772843e0d5000a99d3ff_31","active":!0,"name":"1","number":31,"url_desktop":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe496fc80ba00018a58d8.png","url_mobile":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2024/01/11/659fe496fc80ba00018a58d8.png","weight":.01,"is_responsive":!1}],"turbos":[],"smart_autoplay_elements":[{"id":"smart_autoplay_element_668d772843e0d5000a99d3ff_0","height":384,"width":576,"x":352,"y":168,"order":1,"opacity":1,"rotation":0,"type":"image","properties":{"alt":"Smart AutoPlay","src":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2023/06/17/648db806c41c4200080fc001.gif"}}],"mini_hooks":!0,"mini_hooks_elements":[{"id":"mini_hooks_element_668d772843e0d5000a99d3ff_0","height":93.47609217465154,"name":"01","active":!0,"width":934.7609217465149,"range":{"start":15,"finish":22},"x":172,"y":0,"order":1,"rotation":0,"type":"image","opacity":1,"properties":{"alt":"Imagem","src":"https://cdn.converteai.net/36124149-fb5f-4577-852d-90288afff251/2023/12/21/6584bccbfc80ba00018a49e8.gif"}}],"resume":!0,"fake_bar":!0,"headline":!0,"turbo":!0,"turbo_speed":1.2,"turbo_auto_test":!1,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(8,93,138,0.78)","start_at":0,"end_at":1080,"animation":{"animation":"pulse","properties":{"speed":3}},"custom_preview":null},"resume_options":{"play":"Continuar assistindo?","title":"Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo","replay":"Assistir do in\xedcio?","disable_pause":!1,"foreground_color":"#FFFFFF","background_color":"#1550C9"},"fake_bar_options":{"height":7,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbSrcId="668d772843e0d5000a99d3ff",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();