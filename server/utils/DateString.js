// Function that  creates the simple todays date string
function dateString() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
};

export default dateString