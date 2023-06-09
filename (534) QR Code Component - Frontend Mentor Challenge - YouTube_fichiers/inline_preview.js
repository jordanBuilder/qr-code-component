(function(g){var window=this;'use strict';var Xfb=function(a){g.T.call(this,{G:"div",N:"ytp-inline-preview-ui"});this.Sf=!1;this.player=a;this.S(a,"onStateChange",this.EO);this.S(a,"videodatachange",this.jp);this.S(a,"onInlinePreviewModeChange",this.E3);this.jf=new g.lo(this.vv,null,this);g.D(this,this.jf)},b6=function(a){g.bS.call(this,a);
this.j=new Xfb(this.player);g.D(this,this.j);this.j.hide();g.YQ(this.player,this.j.element,4);if(a.isInline()){this.load();var b=a.getRootNode();g.wo(b,["ytp-inline-preview-mode","ytp-no-contextmenu"]);this.player.T().K("web_rounded_containers")&&g.zo(a.getRootNode(),"ytp-rounded-inline-preview",!0);this.player.T().K("web_inline_player_disable_scrubbing")&&g.zo(a.getRootNode(),"ytp-inline-preview-mode-no-scrubbing",!0)}};
g.v(Xfb,g.T);g.k=Xfb.prototype;
g.k.FL=function(){this.tooltip=new g.JV(this.player,this);g.D(this,this.tooltip);g.YQ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qc=new g.TS(this.player);g.D(this,this.Qc);var a=["ytp-inline-preview-scrim"];this.player.T().K("web_inline_player_expand_to_watch")||a.push("ytp-inline-preview-scrim-clear");this.lj=new g.T({G:"div",Ia:a});g.D(this,this.lj);this.lj.Da(this.element);this.S(this.lj.element,"click",this.xG);this.player.T().K("web_inline_player_expand_to_watch")&&(a=new g.B2(this.player,
this),g.D(this,a),a.Da(this.lj.element));this.nj=new g.CV(this.player,this,300);g.D(this,this.nj);this.nj.Da(this.lj.element);this.controls=new g.T({G:"div",N:"ytp-inline-preview-controls"});g.D(this,this.controls);this.controls.Da(this.element);a=new g.yU(this.player,this,this.player.T().K("kevlar_simp_remove_min_width_for_mute_button"));g.D(this,a);a.Da(this.controls.element);a=new g.AV(this.player,this);g.D(this,a);a.Da(this.controls.element);this.Jc=new g.NU(this.player,this);g.D(this,this.Jc);
g.YQ(this.player,this.Jc.element,4);this.S(this.player,"appresize",this.Eb);this.S(this.player,"fullscreentoggled",this.Eb);this.Eb()};
g.k.show=function(){g.mo(this.jf);this.Sf||(this.FL(),this.Sf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show()};
g.k.hide=function(){this.jf.stop();g.T.prototype.hide.call(this);this.player.isInline()||this.Sf&&this.Jc.hide()};
g.k.ra=function(){g.T.prototype.ra.call(this)};
g.k.xG=function(a){a.target!==this.lj.element||this.player.T().K("web_inline_player_expand_to_watch")||this.player.Na("onExpandInlinePreview",a)};
g.k.E3=function(){g.zo(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Ge=function(){this.Jc.xc();this.nj.xc()};
g.k.vv=function(){this.Ge();g.mo(this.jf)};
g.k.Eb=function(){g.bV(this.Jc,0,this.player.gb().getPlayerSize().width,!1);g.QU(this.Jc)};
g.k.EO=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.jp=function(a,b){if(this.player.isInline()&&(g.zo(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.kI),this.player.K("web_player_disable_inline_scrubbing")||this.player.K("disable_inline_preview_scrubbing_for_vac_ads_on_web"))){var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.zo(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Cc=function(){return this.tooltip};
g.k.hg=function(){return!1};
g.k.gh=function(){return!1};
g.k.Qb=function(){return!1};
g.k.El=function(){return!1};
g.k.oD=function(){};
g.k.Ip=function(){};
g.k.Nx=function(){};
g.k.Dm=function(){return null};
g.k.lF=function(){return null};
g.k.oF=function(){return new g.je(0,0)};
g.k.BB=function(){return null};
g.k.qk=function(){return new g.Cl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Gv=function(a,b,c,d,e){var f=d=0,h=0,l=g.Wl(a);if(b){c=g.uo(b,"ytp-miniplayer-expand-watch-page-button");var m=g.uo(b,"ytp-mute-button"),n=g.uo(b,"ytp-subtitles-button"),p=g.Ul(b,this.element);b=g.Wl(b);d=p.y+40;c&&(h=8);if(n||m)h=p.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.gb().getPlayerSize().width;h=g.be(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.fp=function(){};
g.k.zl=function(){return!1};
g.k.pD=function(){};
g.k.rz=function(){};
g.k.Lq=function(){};
g.k.Kq=function(){};
g.k.uE=function(){};
g.k.Jr=function(){};g.v(b6,g.bS);b6.prototype.Mk=function(){return!1};
b6.prototype.load=function(){this.player.hideControls();this.j.show()};
b6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.aS("inline_preview",b6);})(_yt_player);
