import React from 'react';
import "./ImageList.css"

export const ImageList = ({data}) => {
    return (
        <div className="imageList">
            {data.hits.map((item) => {
                return (
                    <div className="picture" key={item.id}><img src={item.previewURL} alt={item.id}/></div>
                )
            })}
        </div>
    )
}
