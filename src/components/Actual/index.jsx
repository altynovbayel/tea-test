import React from 'react';
import c from './Actual.module.scss'
import ActualBanner from "./ActualBanner";
import {actualContent_1, actualContent_2} from "../../utils/list";
import actualBackImg_1 from '../../images/actual-banner.webp'
import actualBackImg_2 from '../../images/actual-banner-2.webp'

function Actual() {
  return (
   <>
     <div className={c.actual}>
       <div className={c.container}>
         <div className={c.title_container}>
           <p className={c.actual_history}>
             20 лет мы занимаемся чаем. Из самых популярных запросов мы составили тематические подборки. Ищите и находите нужный чай для разных ситуаций.
           </p>
           <div className={c.title}>
             <h1>Актуальные Подборки</h1>
           </div>
         </div>
         <ActualBanner {...actualContent_1} background={actualBackImg_1}/>
         <ActualBanner {...actualContent_2} background={actualBackImg_2}/>
       </div>
     </div>
   </>
  );
}

export default Actual;