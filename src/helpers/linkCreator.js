function linkCreator(postName) {
    const link = "/post/" + postName;
    console.log(link);
    return link;
}

export default linkCreator;