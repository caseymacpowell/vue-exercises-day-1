var mainAppVm = new Vue({
	el: '#app',
	data: {
		colorOne: {
			R: '',
			G: '',
			B: ''
		},
		colorTwo: {
			R: '',
			G: '',
			B: ''
		},
	},
	computed: {
		backgroundColorA: function(){
			var color = "rgb(" + parseInt(this.colorOne.R) + "," + parseInt(this.colorOne.G) + "," + parseInt(this.colorOne.B) + ")";
			console.log(color);
			return color;
		},
		backgroundColorB: function(){
			var color = "rgb(" + parseInt(this.colorTwo.R) + "," + parseInt(this.colorTwo.G) + "," + parseInt(this.colorTwo.B) + ")";
			console.log(color);
			return color;
		},
		averageColor: function(){
			var R = Math.round((parseInt(this.colorOne.R) + parseInt(this.colorTwo.R)) / 2);
			var G = Math.round((parseInt(this.colorOne.G) + parseInt(this.colorTwo.G)) / 2);
			var B = Math.round((parseInt(this.colorOne.B) + parseInt(this.colorTwo.B)) / 2);
			var color =  "rgb(" + R + "," + G +"," + B + ")";
			console.log(color);
			return color;
		}
	}
});