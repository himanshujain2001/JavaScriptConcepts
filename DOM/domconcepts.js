///// DOM Methods

///// for getting the data
1. document.getElementById('page-content') // poora ele batayega
2. document.getElementById('page-content').id // us ele ki id bta dega
3. document.getElementById('page-content').className // us ele ki class bta dega
4. document.getElementById('page-content').getAttribute('id') // us ele ki id bta dega
5. document.getElementById('page-content').getAttribute('class') // us ele ki class bta dega

6. const collectionOfHeading = document.getElementsByClassName('h2heading') // html collection dega
   
   const arrayofHeading = Array.from(collectionOfHeading);

   arrayofHeading.forEach( (item) => item.style.color = 'peach')


///// for setting the data
1. document.getElementById('page-content').setAttribute('class' , 'abc') // us ele ki class 'abc' set kr dega and phle se koi hogi to override krega
2. document.getElementById('page-content').setAttribute('class', 'content-container abc') // us ele ko ye dono class de dega because apan ko
// phle vaali class bhi chahiye thi aur nayi bhi chahiye thi to override nhi ho isiliye dono class de di

3. const title = document.getElementById('page-content')

// apan ele ko grab kr k usko style bhi kr skte h
   title.style.backgroundColor = 'white'

////// Diff b/w innerText, textContent, innerHTML

console.log(title.innerHTML) // 'DOM Concepts <span style="display: none;">explanation</span>'
console.log(title.innerText) // 'DOM Concepts'
console.log(title.textContent) // 'DOM Concepts explanation'

// means innerHTML, HTML ko support krta h to html ele koi hoga to vo bhi display hoga
// while innerText and textContent both doesn't support HTML and agar tag m koi style apply hui h jaise display = none to innerText usko display
// nhi krega (means jo UI pe visible h sirf vhi output dega) while textContent kr dega


//// Query Selectors:

document.querySelector('h2') // jitni bhi h2 hogi unme se sabse phli vaali output dega 
document.querySelector('#page-content')

const element = document.querySelector('.content-container')
element.style.backgroundColor = 'peach'

document.querySelector('input[type="password"]')

const allHeadings = document.querySelectorAll('h2') // saari h2 aayengi aur nodelist ki form m dega and nodeList pe foreach laga skte h
allHeadings.style.color = 'yellow' // error (this isn't allowed)
allHeadings[0].style.color = 'yellow' // this is correct


//////// Parent to Child and Child to Parent Navigation:

const parent = document.querySelector('.listholder')

console.log(parent.children); // gives an HTML colln of childs (only element nodes)
console.log(parent.childNodes); // NodeList dega jisme text node(means line change), comment node(koi comment likha hua h to vo), element node,
// non-element node sab aayenge
console.log(parent.children[0].innerHTML) // Monday

// styling can also be applied to childrens
parent.children[1].style.color = 'yellow' 

console.log(parent.firstElementChild); // Monday vaala aa jaayega poora (means including html)
console.log(parent.lastElementChild); // Wednesday vaala aa jaayega poora


////// Child to Parent Navigation: 

const child = document.querySelector('.list-items')

console.log(child.parentElement); // parent ele mil jaayega agar ele node available hoga to varna "null" aayega
console.log(child.parentNode); //  parentNode returns the parent of the specified node in the DOM tree, regardless of whether it is an element node,
//  document node, document fragment, or even a document type declaration (doctype). Ex: html file m apan <html> tag ka parent maangenge to 
// document object ans aayega

console.log(child.nextElementSibling); // isme only element node consider hoga agar vo available hoga to vo aayega varna null aayega
console.log(child.nextSibling); // isme text node(means line change), comment node, element node, non-element node ye sab consider honge aur phir
// jo available hoga vo ans aayega
console.log(child.previousElementSibling);

Ex: 
    <div>
      Hello
      <span id="mySpan">World!</span>
    </div>

// above ex m child span tag h to jaise previousElementSibling m "null" ans aayega while previousSibling m "Hello" as text node ans aayega


////// Note: 

/*

-> NodeList m map function available nhi hota to usko use nhi kiya jaa skta lekin agar apan usko use krna chahte h to apan ko usko
phle array m convert krna pdega aur phir array m to available hota hi h to uspe laga skte h phir

-> HTML Collection m map, foreach vagerah kuch bhi nhi hota to usko iterate krna h to array m convert krna hi pdega aur vo apan 'from'
method se krenge

*/