import './Home.css'

export default function Home({ setPage }) {
    return (
        <>
            <div className="home-container">

                <div className="container-1">
                    <h1 className="welcome-title">Welcome</h1>
                    <p className="food-caption">Good food is a whole mood. Explore hand-crafted recipes</p>
                    <p className="food-caption">Savour the art of fine dining. Every dish is a masterpiece crafted with fresh ingredients and passion.</p>
                    <div className="btn-explore">
                        <button className="btn " onClick={() => setPage('gallery')}>Explore Gallery</button>
                    </div>
                </div>

                <div className="container-2">
                    <div className="image-slider">

                    </div>
                </div>
            </div>
        </>
    )
}