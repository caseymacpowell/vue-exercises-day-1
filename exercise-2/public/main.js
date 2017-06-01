var mainAppVm = new Vue ({
	el: '#app',
	data: {
		a: '',
		b: '',
	},
	computed: {
		add: function(){
			return parseInt(this.a) + parseInt(this.b);
		},
		multiply: function(){
			return parseInt(this.a) * parseInt(this.b);
		}
	}
});