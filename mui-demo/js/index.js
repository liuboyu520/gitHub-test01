//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

var searchInput = document.querySelector('.mui-input-clear');
document.addEventListener('tap', function(e) {
	if(e.target !== searchInput) {
		searchInput.blur();
	}
})

document.querySelector('.mui-action-menu').addEventListener('tap', function() {
	mui('.mui-off-canvas-wrap').offCanvas('toggle');
})

var cityBtn = document.getElementById('cityBtn');
			var picker = new mui.PopPicker({
				layer: 2
			});
			picker.setData([{
				value: '001',
				text: '广东',
				children: [{
						value: "001",
						text: "广州"
					},
					{
						value: "002",
						text: "深圳"
					}
				]
			}, {
				value: '002',
				text: '福建',
				children: [{
						value: "001",
						text: "福州"
					},
					{
						value: "002",
						text: "泉州"
					}
				]
			}, {
				value: '003',
				text: '浙江',
				children: [{
						value: "001",
						text: "杭州"
					},
					{
						value: "002",
						text: "绍兴"
					}
				]
			}]);

cityBtn.addEventListener('tap', function() {
	picker.show(function(selectItems) {
		cityBtn.innerText = selectItems[1].text;
	})
})

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

mui('.mui-table-view-cell').on('tap', '.sharebtn', function() {
			mui('#sheet1').popover('toggle');
})

document.querySelectorAll('.mui-tab-item')[1].addEventListener('tap',function(){
	mui.openWindow({
		url:'phone.html'
	});
})