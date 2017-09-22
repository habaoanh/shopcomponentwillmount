const searchProduct = (key) => {
    const url = `http:192.168.0.104/api/search.php?key=${key}`;
    return fetch(url)// eslint-disable-line
    .then(res => res.json());
};

export default searchProduct;
