/* eslint-disable react-hooks/exhaustive-deps */
import {  RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './star.svg';


export const Rating = ({isEditible = false, rating, setRating,  ...props}: RatingProps):JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	useEffect(() => {
		constructRating(rating);
	}, [rating]);
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editible]: isEditible
				})} 
				onMouseEnter = {() => changeDisplay(i + 1)}
				onMouseLeave = {() => changeDisplay(rating)}
				onClick = {() => onClick(i + 1)}
				>
					<StarIcon 
				tabIndex = {isEditible ? 0: -1}
				onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditible && handleSpace(i + 1, e)}
				/>
				</span>

			);
		});
		setRatingArray(updatedArray);
	};
	const changeDisplay = (i:number) => {
		if(!isEditible) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i:number) => {
		if(!isEditible || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i:number, e: KeyboardEvent<SVGElement>) => {
		if(e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key = {i}>{r}</span>))}
		</div>
	);
};