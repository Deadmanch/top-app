/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticProps } from 'next';
import React from 'react';
import { withLayout } from '../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from '../interfaces/menu.interface';


 function Search(): JSX.Element {
return (
	<>
	
	</>
);
 }

export default withLayout(Search);

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
