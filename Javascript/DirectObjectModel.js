//Here are 3 DOM coding problems with answers, strictly using the methods shown in your notes (getElementById, className, innerHTML, style, textContent, getElementsByTagName, getElementsByClassName, querySelector).


//Problem 1: Change text and color using ID

//Problem

//An HTML page has a paragraph with id msg.
//Write JavaScript to:

//1. Change its text to "Welcome Yogesh"


//2. Change its color to blue



//Answer

<p id="msg">Hello</p>

<script>
let element = document.getElementById("msg");
element.textContent = "Welcome Yogesh";
element.style.color = "blue";
</script>




//Problem 2: Display content using class name

//Problem

//There are multiple elements with class name note.
//Write JavaScript to:

//1. Select the first element


//2. Print its HTML content using innerHTML



//Answer

<div class="note"><b>Important Note</b></div>
<div class="note">Second Note</div>

<script>
let element = document.getElementsByClassName("note");
console.log(element[0].innerHTML);
</script>




//Problem 3: Modify heading using querySelector and tag name

//Problem

//An HTML page has multiple <h1> tags.
//Write JavaScript to:

//1. Select the first <h1>


//2. Change its text


//3. Change its color to red



//Answer

<h1>Main Heading</h1>
<h1>Sub Heading</h1>

<script>
let heading = document.querySelector("h1");
heading.textContent = "DOM Manipulation";
heading.style.color = "red";
</script>
Here are 3 EXTRA DOM coding problems with answers, again only using the methods from your notes 👇


---

/*Problem 4: Change text using innerHTML

Problem

An element with id info contains some text.
Write JavaScript to replace its content with:

<p>Hello DOM</p>

Answer*/

<div id="info">Old Content</div>

<script>
let element = document.getElementById("info");
element.innerHTML = "<p>Hello DOM</p>";
</script>


---

/*Problem 5: Change color using getElementsByTagName

Problem

An HTML page has multiple <p> tags.
Write JavaScript to:

1. Select the first paragraph


2. Change its text color to green



Answer */

<p>Paragraph One</p>
<p>Paragraph Two</p>

<script>
let element = document.getElementsByTagName("p");
element[0].style.color = "green";
</script>


---

/*Problem 6: Append text using textContent

Problem

An element with id channel contains text "My Channel".
Write JavaScript to append " – Subscribe" to the existing text.

Answer*/

<p id="channel">My Channel</p>

<script>
let element = document.getElementById("channel");
element.textContent += " - Subscribe";
</script>
// combined Problem

<script>
let heading = document.getElementById("title");
heading.textContent = "DOM Practice";
heading.style.color = "red";

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.color = "blue";

let info = document.getElementsByClassName("info");
console.log(info[1].textContent);

let box = document.querySelector("#box");
box.innerHTML = "<p>All DOM methods combined</p>";
box.textContent += " ✔";
</script>
