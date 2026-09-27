export default function ImageCard({ img, onSelect }) {
    return (
        <div className="img-card">
            <div className="image-container" onClick={() => onSelect(img)}>
                <img src={img.imgurl} alt={img.title} />
            </div>
        </div>
    )
}