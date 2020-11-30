import React, { useState } from 'react'
import PreviewComponent from '../../components/preview-collection/PreviewComponent'
import SHOP_DATA from './shop.data'
export default function ShopPage() {
    let [collection, setCollection] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collection.map(({ id, ...others }) => <PreviewComponent key={id} {...others} />)
            }

        </div>
    )
}
