import React from 'react'
import Styles from "../../Style/movie.module.scss"
import StarRatings from 'react-star-ratings';

const Card = (props) => {
    console.log(props)
    const baseurl = "https://image.tmdb.org/t/p/w342"
    return (
        <div className={props.showIndex === props.index ? Styles.column_active : Styles.column}>
            <div className={props.showIndex === props.index ? Styles.card_active : Styles.card} onClick={() => props.toggleIndex(props.index)}>
                <img
                    src={`${baseurl}` + props.data.poster_path}
                    alt={props.data.title}
                    className={Styles.tm_image}
                />
                <div className={Styles.tm_details}>
                    <p className={Styles.personname}>{props.data.title}</p>
                    {/* <p className={Styles.designation}>{props.data.designation}</p> */}

                </div>
            </div>
            {props.showIndex === props.index ?
                <div className={props.showIndex === props.index ? Styles.card1_active : Styles.card1}>
                    <div style={{ marginBottom: "20px" }}>
                        <button
                            onClick={props.handleClickCard}
                            className={Styles.closeBtn}
                        >X</button>
                    </div>
                    <p className={Styles.tm_content}><b>Synopsis</b>: {props.data.overview}</p>
                    <p className={Styles.tm_content}><b>Ratings:</b> {props.data.vote_average}/10 </p>
                    <p className={Styles.tm_content}><b>Popularity:</b> {props.data.popularity} </p>
                    <p className={Styles.tm_content}><b>Release Date:</b> {props.data.release_date} </p>
                </div> : null}
        </div>
    )
}

export default Card
