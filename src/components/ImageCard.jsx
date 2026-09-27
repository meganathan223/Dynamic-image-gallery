export default function ImageCard({ image, onSelect }) {
    return (
        <div className="img-card">
            <div className="image-container" onClick={() => onSelect(image)}>
                <img src={image.imgurl} alt={image.title} />
            </div>
        </div>
    )
}