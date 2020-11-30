import React from 'react'
import CollecttionItem from '../collection-item/CollecttionItem'
import './preview-collecttion.scss'

export default function PreviewComponent({ title, items }) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>

                {
                    items.filter((item, id) => id < 4).map(item => <CollecttionItem key={item.id} imageUrl={item.imageUrl}>{item.name}</CollecttionItem>)
                }
            </div>
        </div>
    )
}
