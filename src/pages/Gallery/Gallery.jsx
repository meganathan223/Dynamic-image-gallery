import './Gallery.css'
import { FOOD_LIST } from '../../data/foodList'

export default function Gallery() {
    return (
        <>
            <div className="gallery">
                {FOOD_LIST.map((item) => (
                    <div key={item.id} className="img-card">
                        <div className="image-container">
                            <img src={item.imgurl} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}