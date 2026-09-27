export default function ImageModal({ image, onClose }) {
    console.log(image.imgurl)
    if (!image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <img
                    src={image.imgurl}
                    alt={image.title}
                    className="modal-image"
                />
                <div className="modal-caption">
                    <h2>{image.title}</h2>
                    <p>{image.desc}</p>
                </div>
            </div>
        </div>
    );
}