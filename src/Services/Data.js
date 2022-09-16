import axios from "axios";

const url = 'https://rickandmortyapi.com/api/character';
const getData = async () => {
    const response = await axios.get(url)
    const data = await response.data.results
    return data
};

export default getData;




    

