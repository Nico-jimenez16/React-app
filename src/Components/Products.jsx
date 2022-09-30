import React, { useState , useEffect } from "react";
import getData from '../Services/Data';
import Loader from './Loader'


const Products = () => {

    const [search , setSearch] = useState('');
    const [characters , setCharacters] = useState(null);
    const [filterCharacters , setFilterCharacters] = useState(null);
    const [loading , setLoading] = useState(false);

    // Se ejecutan una ves para cargar los datos de la API en el State
    useEffect(() => {
        
        setLoading(true)
        // Llamada a la funcion getData para traer los datos de la API y setea los datos
        getData()
            .then((character) => {
                    setCharacters(character)
                    setFilterCharacters(character)
                    setLoading(false)
            })
            .catch(err => console.error(err))

    } , []);

    // Hook se ejecuta cuando cambia el valor del estado de la variable Search
    useEffect(() => {

        // Filtra los characters que coincidad con el search del input 
        const filterCharacter = characters?.filter((character) => {
                return character.name.toLowerCase().includes(search.toLowerCase())
        });

        setFilterCharacters(filterCharacter)
        // eslint-disable-next-line
    } , [ search ]);

    // Se ejecuta cada ves que se ingresa algo en el imput 
    const seachcharacters = (value) => {
        setSearch(value)
    };

    const notFound = <div className="flex justify-center items-center text-3xl py-8"> Character not found! </div>

    return (
        <React.Fragment>
            <div className="w-full flex justify-center mb-8">
                <input className="w-3/4 border-2 border-teal-600 rounded-full p-4" type="text" placeholder="Search character" onChange={ e => seachcharacters(e.target.value) }></input>
            </div>
            { loading && <Loader/> }
            { filterCharacters?.length === 0 && notFound }
            { characters &&
                <div className="w-full flex flex-row flex-wrap justify-center">
                    {
                        filterCharacters.map((item , index) => (
                            <div key={index} className="w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/5 m-2 -2 rounded-xl bg-[url(https://pbs.twimg.com/media/D4ZIBUjW4AAwPWb.jpg)] text-white">
                                <div className="w-full flex justify-center my-2 h-56">
                                    <img className="w-fit m-auto h-full" src={item.image} alt=""/>
                                </div>
                                <div className="flex flex-col justify-center p-2">
                                    <h1 className="flex justify-center text-md md:text-xl font-bold underline"> {item.name} </h1>
                                    <h4 className="text-md ml-2 mt-2">Species: {item.species} </h4>
                                    <h4 className="text-md ml-2 mt-2">Location: {item.location.name} </h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </React.Fragment>
    );
}

export default Products;


