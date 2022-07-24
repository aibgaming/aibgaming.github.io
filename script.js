// $(document).on("scroll", function() {
//     var pageTop = $(document).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var tags = $(".tag");
  
//     for (var i = 0; i < tags.length; i++) {
//       var tag = tags[i];
  
//       if ($(tag).position().top < pageBottom) {
//         $(tag).addClass("visible");
//       } else {
//         $(tag).removeClass("visible");
//       }
//     }
//   });

const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)

// ---------------------------------------------------------------


const ulElement = document.getElementById("list-items") //list item
const counterEL = document.getElementById("counter")   // counter obj

let counter = 0
function incrementCounter(){
	counter++
	counterEL.innerText = counter

	const li = document.createElement('li')
	li.setAttribute('data-counter',counter)

	if (counter%2 == 0){
		li.style.background = 'red'
	} else {
		li.style.background = 'yellow'
		li.style.padding = '20px'
	}

	li.innerHTML = '<b>Sentence </b>' + counter
	
	ulElement.appendChild(li) 
}

function decrementCounter(){

	if (counter > 0 ){
		const li = ulElement.querySelector('[data-counter="' + counter + '"]')
		const number = parseInt(li.getAttribute('data-counter'), 10)

		if(number%2==0){
			li.remove()
			
		}
		counter--
		
		
	}
	counterEL.innerText = counter
}

const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)


// ES6 / ES2015 

const arr = [1,2,3,4,5,6,7,8]

for (let i = 0; i < arr.length;i++){
	const el = arr[i]

}

const newMappedArray = arr.map(function(element){
	console.log(element)
	return 100
})

console.log(arr, newMappedArray)