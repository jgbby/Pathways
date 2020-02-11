new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	navigation: true,

	/*onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const tl = new TimelineMax({ delay: 0.5 });
		
		if (destination.index === 1){
			const path = document.querySelector('.path');
			const ways = document.querySelector('.way');
			
			tl.fromTo(path, 0.7, { x: "100%" }, {x: "-35%"});
		}
	}*/
});