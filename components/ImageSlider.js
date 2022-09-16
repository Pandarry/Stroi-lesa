import { useState } from 'react';

import styles from '/styles/ImageSlider.module.scss';

const Slides = [
    {
        img: 'https://images.unsplash.com/photo-1601021631769-ae79269abcc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Строительные леса',
    },
    {
        img: 'https://st38.stblizko.ru/images/product/318/367/946_original.jpg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://moiinstrumentu.ru/wp-content/uploads/2020/08/strubczina-dlya-opalubki.jpg',
        title: 'Струбцина',
    },
    {
        img: 'https://prokat-instrumenta.kz/wp-content/uploads/2016/02/arenda-teleskopichekoj-stojki.jpeg',
        title: 'Телескопические стойки',
    },
    {
        img: 'https://ae04.alicdn.com/kf/Hec2eea6a1d80456db91b1388d099f2ddM/3-1-5.jpg',
        title: 'Домкрат',
    },

    {
        img: 'https://images.unsplash.com/photo-1635961134620-5da36ab4ad72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Строительные леса',
    },
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const length = Slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className={styles.ImageSlider}>
            <button onClick={prevSlide} className={styles.LeftArrow}>
                <svg viewBox="-32 0 512 512">
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                </svg>
            </button>
            <button onClick={nextSlide} className={styles.RightArrow}>
                <svg viewBox="-32 0 512 512">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
            </button>

            {Slides.map((slide, index) => {
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
