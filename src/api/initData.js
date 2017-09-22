const initData = () => (
    fetch('http:192.168.0.103/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
