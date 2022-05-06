import React, { useContext } from 'react';
import './style.css';
import RepsStarred from '../../components/RepsStarred';
import { ReposFavContext } from '../../common/context/ReposFav';

function RepositoriosFav() {

    return (
        <div className='reps_fav__bloco'>
            
            <RepsStarred />

        </div>
    );
}

export default RepositoriosFav;