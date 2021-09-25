import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';


export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка2</Button>
      <P size="l">Большой текст</P>
      <P>Средний текст</P>
      <P size="s">Маленький текст</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag size="m" color="grey">Grey</Tag>
      <Tag color="primary">Основной</Tag>
      <Rating rating={rating} isEditible setRating={setRating}></Rating>
    </>
  );
}
