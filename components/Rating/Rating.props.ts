import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditible?: boolean;
	rating: number;
	setRating?: (rating:number) => void;
}