const makeRoute = (path) => process.env.PUBLIC_URL === '/' ? path : `${process.env.PUBLIC_URL}${path}`;
export default makeRoute;