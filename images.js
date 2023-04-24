let images = "cosmic1.jpg, cosmic10.jpg, cosmic11.jpg, cosmic2.jpg, cosmic3.jpg, cosmic4.jpg, cosmic5.jpg, cosmic6.jpg, cosmic7.jpg, cosmic8.jpg, cosmic9.jpg, cyber1.jpg, cyber2.jpg, cyber3.jpg, cyber4.jpg, cyber5.jpg, cyber6.jpg, demon1.jpg, demon2.jpg, demon3.jpg, furry1.jpg, furry10.jpg, furry11.jpg, furry12.jpg, furry2.jpg, furry3.jpg, furry4.jpg, furry5.jpg, furry6.jpg, furry7.jpg, furry8.jpg, furry9.jpg, kawaii1.jpg, kawaii10.jpg, kawaii11.jpg, kawaii12.jpg, kawaii13.jpg, kawaii14.jpg, kawaii15.jpg, kawaii16.jpg, kawaii2.jpg, kawaii3.jpg, kawaii4.jpg, kawaii5.jpg, kawaii6.jpg, kawaii7.jpg, kawaii8.jpg, kawaii9.jpg, laser1.jpg, laser10.jpg, laser11.jpg, laser2.jpg, laser3.jpg, laser4.jpg, laser5.jpg, laser6.jpg, laser7.jpg, laser8.jpg, laser9.jpg, ninja1.jpg, ninja2.jpg, ninja3.jpg, ninja4.jpg, ninja5.jpg, ninja6.jpg, ninja7.jpg, super1.jpg, super10.jpg, super11.jpg, super12.jpg, super2.jpg, super3.jpg, super4.jpg, super5.jpg, super6.jpg, super7.jpg, super8.jpg, super9.jpg"
let skip = ["furry12.jpg","furry10.jpg","furry8.jpg","cyber2.jpg",]
let allImages = images.split(", ")
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

let imgPath = "rainbowImages/"
let vidPath = "vids/"
console.log(allImages)

allImages.forEach(image=>{

    document.querySelector("#thumbnails").innerHTML += `<article tabindex="-1">
    <a class="thumbnail" href="${imgPath+image}">
    <img src="${imgPath+image}" alt='' />
    </a>
    <h2 class="${skip.includes(image)?"gone":""}">
    <a target="blank_" href="${vidPath+image.slice(0,-3)+"mp4"}"
    >Animate</a>
    </h2>
    </article>`

})

document.querySelectorAll(".gone").forEach(el=>{
	el.remove()
})


