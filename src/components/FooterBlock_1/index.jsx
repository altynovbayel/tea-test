import React from 'react';
import c from './FooterBlock_1.module.scss'
import {aboutCompanyList, business, contactsList, forClient} from "../../utils/list";

function FooterBlock_1() {
  return (
    <div className={c.footer_1}>
      <ul className={c.footer_list}>
        <h1>Контакты</h1>
        {
          contactsList.map((item, id) => (
            <li key={id}>{item}</li>
          ))
        }
      </ul>
      <ul className={c.footer_list}>
        <h1>О компании</h1>
        {
          aboutCompanyList.map((item, id) => (
            <li key={id}>{item}</li>
          ))
        }
      </ul>
      <ul className={c.footer_list}>
        <h1>Бизнесу</h1>
        {
          business.map((item, id) => (
            <li key={id}>{item}</li>
          ))
        }
      </ul>
      <ul className={c.footer_list}>
        <h1>Клиентам</h1>
        {
          forClient.map((item, id) => (
            <li key={id}>{item}</li>
          ))
        }
        <button className={c.login_btn}>Войти</button>
      </ul>
    </div>
  );
}

export default FooterBlock_1;