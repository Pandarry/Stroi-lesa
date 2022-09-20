import { useState } from 'react';
// import Image from 'next/image';

import styles from '/styles/ImageSlider.module.scss';

const SlidesOne = [
    {
        img: 'https://images.unsplash.com/photo-1601021631769-ae79269abcc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Строительные леса',
    },

    {
        img: 'https://images.unsplash.com/photo-1635961134620-5da36ab4ad72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Строительные леса',
    },

    {
        img: 'http://faqindecor.com/wp-content/uploads/2020/03/2.jpg',
        title: 'Строительные леса',
    },
    {
        img: 'https://www.zaggo.ru/sas/image/01_briques_de_parement_renovation_facade.jpg',
        title: 'Строительные леса',
    },
    {
        img: 'https://images.unsplash.com/photo-1646608220368-c604d8e8130f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        title: 'Строительные леса',
    },
];

const SlidesTwo = [
    {
        img: 'https://st38.stblizko.ru/images/product/318/367/946_original.jpg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://prokat-instrumenta.kz/wp-content/uploads/2016/02/arenda-teleskopichekoj-stojki.jpeg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://rsk-spb.com/upload/medialibrary/f7b/f7bbe412c7f51d9a0743263eb3cb7d3f.jpg',
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

const SlidesThree = [
    {
        img: 'https://m.media-amazon.com/images/I/61uODylK5cL.jpg',
        title: 'Струбцина',
    },
    {
        img: 'https://frankfurt.apollo.olxcdn.com/v1/files/rbhgkbcbssuq1-KZ/image;s=644x461',
        title: 'Струбцина',
    },
    {
        img: 'https://moiinstrumentu.ru/wp-content/uploads/2020/08/strubczina-dlya-opalubki.jpg',
        title: 'Струбцина',
    },

    {
        img: 'https://empire-s3-production.bobvila.com/slides/6650/widened/slide1.jpg?1591211631',
        title: 'Струбцина',
    },
];

const SlidesFour = [
    {
        img: 'https://lirp.cdn-website.com/fad38f86/dms3rep/multi/opt/Foundation+Jacks-640w.jpg',
        title: 'Домкрат',
    },
    {
        img: 'https://i.pinimg.com/564x/dc/83/a9/dc83a988dc2c217de7b5e4eb6bb81c6f.jpg',
        title: 'Домкрат',
    },

    {
        img: 'https://ae04.alicdn.com/kf/Hec2eea6a1d80456db91b1388d099f2ddM/3-1-5.jpg',
        title: 'Домкрат',
    },
];

export default function ImageSlider({ product }) {
    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState(0);
    const [current3, setCurrent3] = useState(0);
    const [current4, setCurrent4] = useState(0);
    const length = SlidesOne.length;
    const length2 = SlidesTwo.length;
    const length3 = SlidesThree.length;
    const length4 = SlidesFour.length;

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

    const nextSlide3 = () => {
        setCurrent3(current3 === length3 - 1 ? 0 : current3 + 1);
    };

    const prevSlide3 = () => {
        setCurrent3(current3 === 0 ? length3 - 1 : current3 - 1);
    };

    const nextSlide4 = () => {
        setCurrent4(current4 === length4 - 1 ? 0 : current4 + 1);
    };

    const prevSlide4 = () => {
        setCurrent4(current4 === 0 ? length4 - 1 : current4 - 1);
    };

    if (product == 'lesa') {
        return (
            <div className={styles.ImageSlider}>
                <button onClick={prevSlide} className={styles.LeftArrow}></button>
                <button onClick={nextSlide} className={styles.RightArrow}></button>

                {SlidesOne.map((slide, index) => {
                    return (
                        <div key={index}>
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
            </div>
        );
    }
    if (product == 'stoiki') {
        return (
            <div className={styles.ImageSlider}>
                <button onClick={prevSlide2} className={styles.LeftArrow}></button>
                <button onClick={nextSlide2} className={styles.RightArrow}></button>

                {SlidesTwo.map((slide, index) => {
                    return (
                        <div key={index}>
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
            </div>
        );
    }
    if (product == 'strubtsina') {
        return (
            <div className={styles.ImageSlider}>
                <button onClick={prevSlide3} className={styles.LeftArrow}></button>
                <button onClick={nextSlide3} className={styles.RightArrow}></button>

                {SlidesThree.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current3 && (
                                <img src={slide.img} alt={slide.title} loading="lazy" />
                            )}
                            {index === current3 && (
                                <div className={styles.TextOverImg}>
                                    <p>{slide.title}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
    if (product == 'domkraty') {
        return (
            <div className={styles.ImageSlider}>
                <button onClick={prevSlide4} className={styles.LeftArrow}></button>
                <button onClick={nextSlide4} className={styles.RightArrow}></button>

                {SlidesFour.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current4 && (
                                <img src={slide.img} alt={slide.title} loading="lazy" />
                            )}
                            {index === current4 && (
                                <div className={styles.TextOverImg}>
                                    <p>{slide.title}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}
