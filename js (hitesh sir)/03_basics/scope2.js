function one() {
    const username = "Hitesh"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website); this will throw error as we can't access website variable
    two()
}
one()
// In the above case, func two could access func one's variables but func one can't access func two's variables, hence we see an error when we try to print 'website'