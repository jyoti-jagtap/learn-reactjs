function coinToss() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const urls = {
  google: 'https://www.google.co.in/',
  linkedin: 'https://in.linkedin.com/'
};

let url;

if (coinToss() === "heads") {
   url = <a href={urls.google} > Google </a>
} else {
   url = <a href={urls.linkedin} > Linkedin </a>
}

ReactDOM.render(url, document.getElementById('myIf'));