import $ from 'jquery';

const SERVER_URL = 'http://127.0.0.1:3000'

exports.getAllPokes = () => {
  return $.get('/api/pokemon')
}

exports.giveALike = (name) => {
  console.log('name', name)
  $.ajax({
    method: "POST",
    url: `/api/pokemon`,
    data: JSON.stringify({name: name}),
    contentType: "application/json",
    success: () => { getAllPokes() }
  });
}
