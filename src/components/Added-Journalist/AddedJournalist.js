import React from 'react';
import './AddedJournalist.css';

const AddedJournalist = (props) => {
    const{totalJournalist} = props;

    let total = 0;
    for(const journalist of totalJournalist){
        total = total + journalist.age;
    }
    let name = '';
    for(const journalistName of totalJournalist){
        name = name + journalistName.name;
    }
    let addedJournalist = [];
    totalJournalist.map(journalist =>{
        addedJournalist.push([{name:journalist.name}])
        return addedJournalist;
    })
    return (
        <div className="added-journalist">
            <div>
                <h3>Journalist Added: {props.totalJournalist.length}</h3>
                <h4>Total Ages: {total}</h4>
            </div>
            <div>
                <h3>Added Journalist Name </h3>
                {
                    addedJournalist.map(items =>{
                        return(
                            items.map(item =>{
                                return(
                                    <ol key={Math.round(Math.round()*1000).toString()}>
                                        <div>
                                        <p>{item.name}</p>
                                        </div>
                                    </ol>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AddedJournalist;