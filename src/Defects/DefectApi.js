//import Defectdata from './DefectData';
import axios from 'axios';
export class DefectApi {
    static getDefects(cb){
       // return Defectdata.Defects;
       axios.get('http://localhost:3001/Defects')
       .then(response =>cb(response.data))
       .catch(error=>{throw error});
    }

}