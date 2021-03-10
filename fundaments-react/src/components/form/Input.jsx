import React, {useState} from 'react'

export default props => {
    const [nome, setNome] = useState('Pedro')

    return (
        <div>
            <h4>{nome}</h4>
            <input type="text" value={nome} onChange={
                e=> setNome(e.target.value)
            }/>
        </div>
        
    )
        
}