import React from 'react';
import styles from './NinjaForm.module.css';


const DisplayNinjas = (props) => {
    const {allNinjas, setAllNinjas} = props;
    const graduateStudent = (e, itemInfo, idxNum)=>{
        console.log("you click on this student", itemInfo)
        console.log("student is at index number", idxNum)
        let result = allNinjas.filter((oneNinja, idx)=>{
            console.log(oneNinja, idx)
            return idx!= idxNum
        })
        console.log(result)
        setAllNinjas(result)


    }
    return (
        <div className = {styles.container}>
            {allNinjas.map((ninja, idx ) =>{
                // return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>

                return <div onClick = {(e)=>graduateStudent(e, ninja,idx)} className= {styles.individualNinja} style = {{backgroundColor: ninja.ninjaFavColor }}>
                    <p>Ninja Name: {ninja.ninjaName}</p>
                    <p>Favorite Language: {ninja.ninjaLang}</p>
                    <p><img src={ninja.ninjaImg} alt="" height= "200px" width= "200px"/></p>
                </div>
            })}
        </div>
    );
};


export default DisplayNinjas;