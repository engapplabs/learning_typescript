class WebSite {

	url: string;
	facebookLikes: number;

	constructor(url: string, facebookLikes: number) {
		this.url = url;
		this.facebookLikes = facebookLikes;
	};

	getLikesInK(): number {
		return this.facebookLikes / 1000;
	}

	setLikes() {
		this.facebookLikes++;	
	}

	get facebookLikes() {
		return this.facebookLikes;
	}

	set facebookLikes(likes: number) {
		this.facebookLikes = facebookLikes;
	}

};

console.log(WebSite);

var google = new WebSite("xvideos", 2000);
console.log(google);
