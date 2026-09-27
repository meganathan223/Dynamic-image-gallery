import { useState } from 'react'
import './Gallery.css'
import { FOOD_LIST } from '../../data/foodList'
import ImageCard from '../../components/ImageCard'
import ImageModal from '../../components/ImageModal';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="gallery">
                {FOOD_LIST.map((item) => (
                    <ImageCard
                        key={item.id}
                        img={item}
                        onSelect={setSelectedImage}
                    />
                ))}
            </div>

            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    )
}