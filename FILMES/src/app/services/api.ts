import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a2fdd650fb8c6b72e33e0c63e843bb95",
        language: "pt-BR",
        include_adult: false,
    },
});

// Função para buscar filmes populares
const getPopularMovies = async () => {
    try {
        const response = await api.get("/movie/popular");
        const movies = response.data.results;

        if (movies.length > 0) {
            console.log("Lista de filmes populares:");
            movies.forEach((movie: { title: any; }, index: number) => {
                console.log(`${index + 1}. ${movie.title}`);
            });
        } else {
            console.log("Nenhum filme encontrado.");
        }
    } catch (error: any) {
        console.error("Erro ao buscar filmes:", error.message);
    }
};

// Chama a função para exibir a lista no terminal
getPopularMovies();
