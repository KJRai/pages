import data from '../data.json'


const FeaturedProducts = () => {
    const products  = data ;

    return (
        <div className='flex flex-column justify-between gap-x-10 text-xl p-4 rounded-md bg-cyan-600'>
            <div className="item">
                <h1 style={{ paddingBottom: "10px" }}>Products</h1>
                {products.map((pro) => (
                    <div className='card' key={pro.id}>
                        <h3>{pro.name}</h3>
                    </div>
                ))}
            </div>
            <div className="item-price">
                <h1 style={{ paddingBottom: "10px" }}>Price</h1>
                {products.map((pro) => (
                    <div className='card' key={pro.id}>
                        <h3>{pro.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
