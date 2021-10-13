/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from '../interfaces/menu.interface';


 function Home({menu}:HomeProps): JSX.Element {

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

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data:menu}: AxiosResponse<MenuItem[]> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
