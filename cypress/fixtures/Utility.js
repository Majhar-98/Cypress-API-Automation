class Utility {
    randomId(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
export default Utility;