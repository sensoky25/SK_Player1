{"playlist": [{
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
}]}