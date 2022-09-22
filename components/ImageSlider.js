import { useState } from 'react';

import styles from '/styles/ImageSlider.module.scss';

const SlidesOne = [
    {
        img: 'https://www.barnaul-altai.ru/business/stroyoborud/img/stroyoborudnews16.jpg',
        title: 'Строительные леса',
    },
    {
        img: 'https://fora-systems.ru/upload/iblock/4da/4da057efe8a005a29e4d42b854560e1d.jpg',
        title: 'Строительные леса',
    },
    {
        img: 'https://artpodem.ru/sites/default/files/sub-image/img_1210.jpg',
        title: 'Строительные леса',
    },


    {
        img: 'https://stroyka.ru/upload/articles/802/03-lesa-stroitelnye-svoimi-rukami-chertezhi-i-foto.jpg',
        title: 'Строительные леса',
    },

    {
        img: 'https://stroyka.ru/upload/articles/802/04-lesa-stroitelnye-svoimi-rukami-chertezhi-i-foto.jpg',
        title: 'Строительные леса',
    },
];

const SlidesTwo = [
    {
        img: 'https://rsk-spb.com/upload/medialibrary/f7b/f7bbe412c7f51d9a0743263eb3cb7d3f.jpg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://st38.stblizko.ru/images/product/318/367/946_original.jpg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://prokat-instrumenta.kz/wp-content/uploads/2016/02/arenda-teleskopichekoj-stojki.jpeg',
        title: 'Телескопические стойки',
    },

    {
        img: 'https://stremyanki.kz/wp-content/uploads/2021/11/001x400-400x400.jpg',
        title: 'Телескопические стойки',
    },
    {
        img: 'http://sv-barrisol.ru/uploads/posts/2019-04/1556535653_295201994_w640_h640_prodat-opalubku-vy.jpg',
        title: 'Телескопические стойки',
    },
];

// const SlidesThree = [
//     {
//         img: 'https://m.media-amazon.com/images/I/61uODylK5cL.jpg',
//         title: 'Струбцина',
//     },
//     {
//         img: 'https://frankfurt.apollo.olxcdn.com/v1/files/rbhgkbcbssuq1-KZ/image;s=644x461',
//         title: 'Струбцина',
//     },
//     {
//         img: 'https://moiinstrumentu.ru/wp-content/uploads/2020/08/strubczina-dlya-opalubki.jpg',
//         title: 'Струбцина',
//     },

//     {
//         img: 'https://empire-s3-production.bobvila.com/slides/6650/widened/slide1.jpg?1591211631',
//         title: 'Струбцина',
//     },
// ];

// const SlidesFour = [
//     {
//         img: 'https://lirp.cdn-website.com/fad38f86/dms3rep/multi/opt/Foundation+Jacks-640w.jpg',
//         title: 'Домкрат',
//     },
//     {
//         img: 'https://i.pinimg.com/564x/dc/83/a9/dc83a988dc2c217de7b5e4eb6bb81c6f.jpg',
//         title: 'Домкрат',
//     },

//     {
//         img: 'https://ae04.alicdn.com/kf/Hec2eea6a1d80456db91b1388d099f2ddM/3-1-5.jpg',
//         title: 'Домкрат',
//     },
// ];

export default function ImageSlider({ product }) {
    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState(0);

    const length = SlidesOne.length;
    const length2 = SlidesTwo.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide2 = () => {
        setCurrent2(current2 === length2 - 1 ? 0 : current2 + 1);
    };

    const prevSlide2 = () => {
        setCurrent2(current2 === 0 ? length2 - 1 : current2 - 1);
    };

    function Arrow() {
        return(
        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.613904 0.542791L0 1.07801L2.24998 3.03901L4.49996 5L6.74998 3.03898L9 1.07795L8.38159 0.538984L7.76317 0L6.13157 1.42198L4.49996 2.84396L2.87271 1.42577C1.97772 0.645774 1.24148 0.00758425 1.23663 0.00758425C1.23177 0.00758425 0.951541 0.248429 0.613904 0.542791Z" fill="#B0B6C1" />
        </svg>
        )
    }

    if (product == 'lesa') {
        return (
          
            <div className={styles.ImageSlider}>

                {SlidesOne.map((slide, index) => {
                    return (
                        <div key={index} className={styles.ImgBorder}>
                            {index === current && (
                                <img src={slide.img} alt={slide.title} loading="lazy" />
                            )}
                            {index === current && (
                                <div className={styles.TextOverImg}>
                                    <p>{slide.title}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className={styles.Arrow} >
                    <button onClick={prevSlide} className={styles.LeftArrow}>
                        <Arrow />
                    </button>
                    <button onClick={nextSlide} className={styles.RightArrow} >
                        <Arrow />
                    </button>
                </div>
            </div>
          
        );
    }
    if (product == 'stoiki') {
        return (
            <div className={styles.ImageSlider}>

                {SlidesTwo.map((slide, index) => {
                    return (
                        <div key={index} className={styles.ImgBorder}>
                            {index === current2 && (
                                <img src={slide.img} alt={slide.title} loading="lazy" />
                            )}
                            {index === current2 && (
                                <div className={styles.TextOverImg}>
                                    <p>{slide.title}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className={styles.Arrow}>
                    <button onClick={prevSlide2} className={styles.LeftArrow}><Arrow/></button>
                    <button onClick={nextSlide2} className={styles.RightArrow}><Arrow/></button>
                </div>
            </div>
        );
    }
}