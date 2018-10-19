document.querySelector('#change').addEventListener('click', changeAnimal);

function changeAnimal() {
  const animals = [
    'https://www.gannett-cdn.com/-mm-/421fa88894207f6fd125837bfbea3a215d8338a7/c=972-205-2409-1017/local/-/media/2016/10/18/USATODAY/USATODAY/636124053572235005-101816orange-cat-thinkstock.jpg?width=3200&height=1680&fit=crop',
    'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233437/Entlebucher-Mountain-Dog-On-White-01.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzum9tYJ-7NlF1LlaZ3cMtKZU16yLNiTs70iTGSjW6fCJnADrZ',
    'https://www.gentlegiants.is/media/8087/humpback-whale-megaptera-novaeangliae.jpg?width=1000&height=500',
    'https://images-na.ssl-images-amazon.com/images/I/51HTqIOvqRL._SL500_AC_SS350_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMa4CpFznM9Hmcpb_cF0dFzPzHkiWlX02hnZjel9N9XQy36dVpWg',
    'https://c402277.ssl.cf1.rackcdn.com/photos/12800/images/priority_species/beluga-whale.jpg?1479924948',
  ];
  const randomNumber = Math.floor(Math.random(0, 10) * animals.length);
  document.querySelector('.animal').src = animals[randomNumber];
}
