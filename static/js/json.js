let url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand';

fetch(url)
.then(res => res.json())
.then((out) => {
  password = out[0].title;
  password_length = password.length;
  alert(password)
})
.catch(err => { throw err });
