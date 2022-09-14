import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

export default function TitlebarImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}></ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}></IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
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
        img: 'https://kz.all.biz/img/kz/catalog/470196.jpeg',
        title: 'Строительные леса',
    },
];
