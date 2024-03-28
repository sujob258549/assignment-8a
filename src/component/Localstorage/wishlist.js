const getwishlish = () => {
    const localdata = localStorage.getItem('wishlist');
    if (localdata) {
        return JSON.parse(localdata)
    }
    return [];

};


const setwishlish = id => {
    console.log('hello', id)
    const cLocaldata = getwishlish();
    const finddata = cLocaldata.find(data => data == id);
    if (!finddata) {
        cLocaldata.push(id);
        localStorage.setItem('wishlist', JSON.stringify(cLocaldata));
    }
}


export { getwishlish, setwishlish }