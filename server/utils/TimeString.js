// Function that  creates time stamp string
function timeStamp() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return `${hour}h:${minute}m:${second}s`
};

export default timeStamp