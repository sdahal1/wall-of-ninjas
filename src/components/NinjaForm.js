import React , {useState} from 'react';
// import styles from './MyButtonComponent.module.css';
import styles from './NinjaForm.module.css';


const NinjaForm = () => {
   


    const [formInfo, setFormInfo] = useState({
        ninjaName: "",
        ninjaImg: "",
        ninjaLang: "",
        ninjaFavColor: ""
    })

    

    const [allNinjas, setAllNinjas ] = useState([])

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

       
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        // allNinjas.push(formInfo) CANT DO IT THIS WAY IN REACT
        setAllNinjas([...allNinjas, formInfo])
        console.log(allNinjas)
        setFormInfo({
            ninjaName: "",
            ninjaImg: "",
            ninjaLang: "",
            ninjaFavColor: ""
        })
        
    }

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
        <>
        <div>
             <form onSubmit = {submitHandler} className = "col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Ninja Name</label>
                    <input className="form-control" type="text" name="ninjaName" id="" onChange= {changeHandler} value = {formInfo.ninjaName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link</label>
                    <input className="form-control" type="text" name="ninjaImg" id="" onChange= {changeHandler} value = {formInfo.ninjaImg} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Language</label>
                    <input className="form-control" type="text" name="ninjaLang" id="" onChange= {changeHandler} value = {formInfo.ninjaLang}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color</label>
                    <input className="form-control" type="text" name="ninjaFavColor" id="" onChange= {changeHandler} value = {formInfo.ninjaFavColor}/>
                </div>
               
                <button type="submit" className="btn btn-success">Add Ninja</button>

            </form>
        </div>
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
        </>
    );
};


export default NinjaForm;