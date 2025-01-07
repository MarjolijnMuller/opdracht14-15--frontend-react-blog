function dateFormatter(date) {
    date = new Date(date);
    const shortOption = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const dutchDate = date.toLocaleDateString('nl-NL', shortOption);
    return dutchDate;
}

export default dateFormatter;