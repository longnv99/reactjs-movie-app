const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c2316184af86b621c7840f188495ac4d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}

export default apiConfig