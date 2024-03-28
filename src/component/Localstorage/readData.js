const getRedStore = () => {
    const localdata = localStorage.getItem('readlist');
    if (localdata) {
        return JSON.parse(localdata)
    }
    return [];

};


const setRedStore = id => {
    const cLocaldata = getRedStore();
    const finddata = cLocaldata.find(data => data === id);
    if (!finddata) {
        cLocaldata.push(id);
        localStorage.setItem('readlist', JSON.stringify(cLocaldata));
    }
}


export { getRedStore, setRedStore }