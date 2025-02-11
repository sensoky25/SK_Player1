function jwplayer_sd( $atts ) {
	extract( shortcode_atts( array (
		'id' => '',
		'thumbnail' => 'https://res.cloudinary.com/dbkr8dqv1/image/upload/v1712587348/samples/Thumbnail/KH%207Legend.webp',
        'sub_english' => '',
        'sub_khmer' => '',
        'sub_thai' => '',
        'sub_korean' => '',
        'sub_chinese' => '',
        'sub_vietnam' => '',
        'sub_french' => '',
        'sub_japanese' => '',
        'sub_indonesian' => '',
        'sub_malay' => '',
	), $atts ) );

return <<<JWPLAYER
<div id="myElement"></div>
<script type="text/javascript">
var playerInstance = jwplayer("myElement")
playerInstance.setup({
playbackRateControls: [0.5, 0.75, 1, 1.25, 1.5, 2],
    skin: {name: 'alaska',},
	"mute": false,
	logo: {
		file: "",
		link: "#",
		position: "top-right"
	},
    width: "100%",
    sharing: true,
    aspectratio: "16:9",
    image: "{$atts['thumbnail']}",
    sources: [{file:"{$atts['id']}"},],
    tracks: [
        {file:"{$atts['sub_english']}", label: "English", kind: "captions","default": true},
		{file:"{$atts['sub_khmer']}", label: "Khmer", kind: "captions"},
		{file:"{$atts['sub_thai']}",label: "Thai",kind: "captions"},
		{file:"{$atts['sub_korean']}",label: "Korean",kind: "captions"},
		{file:"{$atts['sub_chinese']}",label: "Chinese",kind: "captions"},
		{file:"{$atts['sub_vietnam']}",label: "Vietnam",kind: "captions"},
		{file:"{$atts['sub_french']}",label: "French",kind: "captions"},
		{file:"{$atts['sub_japanese']}",label: "Japanese",kind: "captions"},
		{file:"{$atts['sub_indonesian']}",label: "Indonesian",kind: "captions"},
		{file:"{$atts['sub_malay']}",label: "Maly",kind: "captions"},
	]
});
  
playerInstance.on("ready",function(){let e=playerInstance.getContainer(),r=e.querySelector(".jw-button-container");r.querySelector(".jw-spacer");let o=e.querySelector(".jw-display-icon-rewind"),n=o.cloneNode(!0),t=n.querySelector(".jw-icon-rewind");t.style.backgroundImage="url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgroSWGayo83JiEV_Eb_kBMV-5PwJt7pXTooOC8D9Tff-CFOXGls_9ry8dIVdvklcyvlhjlYkiCDad8GnZ8EUutvSFcEIasTynVCbCSf25fsa-3DKStdkw9g2IqGq5Mx2imKHlh9wecwHhs4JBFGgoiTbX3r3On_T6uXXZFtZTRzG6knA/s300/2.webp)",t.ariaLabel="Forward 10 Seconds";let l=e.querySelector(".jw-display-icon-next");l.parentNode.insertBefore(n,l),e.querySelector(".jw-display-icon-next").style.display="none";let c=r.querySelector(".jw-icon-rewind"),i=c.cloneNode(!0);i.style.backgroundImage="url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgroSWGayo83JiEV_Eb_kBMV-5PwJt7pXTooOC8D9Tff-CFOXGls_9ry8dIVdvklcyvlhjlYkiCDad8GnZ8EUutvSFcEIasTynVCbCSf25fsa-3DKStdkw9g2IqGq5Mx2imKHlh9wecwHhs4JBFGgoiTbX3r3On_T6uXXZFtZTRzG6knA/s300/2.webp)",i.ariaLabel="Forward 10 Seconds",c.parentNode.insertBefore(i,c.nextElementSibling),[t,i].forEach(e=>{e.onclick=()=>{playerInstance.seek(playerInstance.getPosition()+10)}})});
</script>
JWPLAYER;
}
add_shortcode( 'jwplayer', 'jwplayer_sd' );