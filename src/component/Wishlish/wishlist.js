const getwishlish = () => {
    const localdata = localStorage.getItem('datas');
    if (localdata) {
        return JSON.parse(localdata)
    }
    return [];

};


const setwishlish = id => {
    const cLocaldata = getwishlish();
    const finddata = cLocaldata.find(data => data === id);
    if (!finddata) {
        cLocaldata.push(id);
        localStorage.setItem('datas', JSON.stringify(cLocaldata));
    }
}


export { getwishlish, setwishlish }