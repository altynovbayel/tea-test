import React from 'react';
import Banner from "../../components/Banner";
import Actual from "../../components/Actual";
import Stocks from "../../components/Stocks";
import TeaSelections from "../../components/TeaSelections";
import News from "../../components/News";
import Form from "../../components/Form";
import FooterBlock_1 from "../../components/FooterBlock_1";
import FooterBlock_2 from "../../components/FooterBlock_2";
import Services from "../../components/Services";


function Main() {
  return (
    <div>
      <Banner/>
      <Actual/>
      <Stocks/>
      {/*<TeaSelections/>*/}
      {/*<Services/>*/}
      <News/>
      <Form/>
      <FooterBlock_1/>
      <FooterBlock_2/>
    </div>
  );
}

export default Main;