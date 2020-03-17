const mul = (x, y, z) => { 
  return x * y * z ;
}


const updateWithAdd = async (event) => {
  
   
    const i = parseInt(document.querySelector('#length').value);
    const j = parseInt(document.querySelector('#width').value);
    const k = parseInt(document.querySelector('#height').value);
    const ans = mul(i, j, k);
    document.querySelector('#result').innerHTML = `Result is ${ans}`;


    
    localStorage.setItem('length', i);
    localStorage.setItem('width', j);
    localStorage.setItem('height', k);
    localStorage.setItem('volume', ans);

    if (i != null) {
      sessionStorage.setItem("length", i);
    }
    if (j != null) {
      sessionStorage.setItem("width", j);
    }
    if (k != null) {
      sessionStorage.setItem("height", k);
    }
    if (ans != null) {
        sessionStorage.setItem("volume", ans);
    }
   
  
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'btn') { updateWithAdd(event) }
});


const jokeURI = "https://www.splashbase.co/api/v1/images/random";

// fetch information
const getImg = async () => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.url || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
    try {
        document.querySelector('#imgarea').src = ''
        const answer = await getImg()
        document.querySelector('#imgarea').src = answer
    } catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'ajbtn') { updateWithJoke(event) }
})