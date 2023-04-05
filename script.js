const getShows = async function () {
  const showRequest = await fetch("https://api.tvmaze.com/schedule/web");
  const data = await showRequest.json();
  console.log(showRequest);
  console.log(data);
};

getShows();
