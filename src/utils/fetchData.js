export const exerciseOptions = {
  method: "GET",
  // headers: {
  //   "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //   "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  // },
  headers: {
    "X-RapidAPI-Key": "bfeb91f035msh4a7ff9be81c9fd4p11bd91jsn80bfd8eba5c2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, exerciseOptions) => {
  const response = await fetch(url, exerciseOptions);
  const data = response.json();

  if (data) {
    return data;
  } else {
    const error = data.catch((err) => {
      return err;
    });
    return error;
  }
};
