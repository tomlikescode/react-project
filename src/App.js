import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Years from './Years'
export default App


const imagesAndColors = [{image: '../react-project/tree/gh-pages/images/pizza.jpg', color: 'red', Year: '2019', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: '../react-project/images/pizza.jpg', color: 'orange', Year: '2018', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: '../react-project/tree/gh-pages/public/images/pizza.jpg', color: 'yellow', Year: '2017', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: '../react-project/tree/gh-pages/public/images/pizza.jpg', color: 'green', Year: '2016', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: './react-project/tree/gh-pages/images/pizza.jpg', color: 'blue', Year: '2015', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: './react-project/images/pizza.jpg', color: 'indigo', Year: '2014', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'},
                        {image: './react-project/tree/gh-pages/public/images/pizza.jpg', color: 'violet', Year: '2013', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, beatae non earum porro libero nesciunt et saepe sapiente voluptates illum?'}
                        ];



const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function mergeArrayObjects (array1,array2) {
        let start = 0;
        let merge = [];

        while (start < array1.length) {
            if(array1[start].Year === array2[start].Year) {
                merge.push({...array1[start],...array2[start]})
            }
            start = start + 1
        }
        
        return merge;
}



function App() {
    const [loading, setLoading] = useState(true)    
    const [years, setYears] = useState([])

    const removeYear = (Year) => {
        const newYears = years.filter((year) => year.Year !== Year)
        setYears(newYears);
    }

    const fetchYears = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const popObject = await response.json();
            const { data, } = popObject;
            let array1 = data;
            let array2 = imagesAndColors;

            let array3 = mergeArrayObjects(array1,array2);
            let years = array3;

            setLoading(false)
            setYears(years)
            console.log(years)
        } catch (error){
            setLoading(false)
            console.log(error)
        }
        
    }

    useEffect(() => {
    fetchYears()
    }, [])



    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (years.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>you're not interested in the us population?</h2>
                    <button className="btn" onClick={()=> fetchYears()}>
                        refresh
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Years years={years} removeYear={removeYear}/>
        </main>
    )


}

