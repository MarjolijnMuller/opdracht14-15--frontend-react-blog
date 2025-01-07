function readTime(content) {
    let words = content.split(" ");
    let timeToRead = (words.length+1)/200;
    return timeToRead.toFixed();
}

export default readTime;