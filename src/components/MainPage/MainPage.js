import React from 'react';
import classes from './MainPage.module.css';
import bgImg from '../../assets/bg.png';
import logoImg from '../../assets/logo.png';
import compImg from '../../assets/komputer.png';
import { Outlet } from 'react-router-dom';

const MainPage = (props) => {
    return (
        <div className={classes.main}>
            <header>
                <div className={classes.bg}>
                    <img src={bgImg} alt='bg image' />
                </div>
                <div className={classes.section1}>
                    <div className={classes.box1}></div>
                    <div className={classes.box2}></div>
                    <div className={classes.box3}>
                    <div className={classes.logo}>
                        <img src={logoImg} alt='logo image' />
                        <p>Süni intellekt sistemi</p>
                    </div>
                    <p>Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxsı hansı faizlikdə oldugunuzu müəyyən edə biləcəksiniz.</p>
                    </div>
                </div>
                <div className={classes.compImg}>
                    <img src={compImg} />
                </div>
                <ol className={classes.educationList}>
                    <li className={classes.active}>Təhsil</li>
                    <li>Dil bilikləri</li>
                    <li>Xüsusi bacarıqlar</li>
                    <li>İdman</li>
                    <li>Proqram bilikləri</li>
                </ol>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default MainPage;