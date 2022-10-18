import React, { useState , useEffect } from "react";
import getData from '../../Services/Data';
import Loader from '../pure/Loader';
import Product from "../pure/Product";
import Search from '../pure/Search'


const IndexProducts = () => {

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

    const CharacterNotFound = <div className="flex justify-center items-center text-3xl py-8"> Character not found! </div>

    return (
        <>
            <Search seachcharacters={seachcharacters} />
            { loading && 
                <Loader/> 
            }
            { filterCharacters?.length === 0 && 
                CharacterNotFound 
            }
            { characters &&

                <div className="w-full flex flex-row flex-wrap justify-center">
                    {
                        filterCharacters.map((item , index) => (
                            <Product 
                                key={index} 
                                product={item} 
                            />
                        ))
                    }
                </div>

            }
        </>
    );
}

export default IndexProducts;



